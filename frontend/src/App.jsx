import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {

  const [ code, setCode ] = useState(` function sum() { return 1 + 1}`)

  const [ review, setReview ] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code });

    // Ensure response data is a string before setting it in state
    // setReview(typeof response.data === "string" ? response.data : JSON.stringify(response.data, null, 2));
    const responseData = response.data.response; // Ensure accessing the correct key

    // Ensure it's a string
    if (typeof responseData === "string") {
        // Properly format the response
        setReview(responseData);
    } else {
        setReview(JSON.stringify(responseData, null, 2));
    }

    // console.log(responseData);
    // console.log(response.data);
}

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                overflow: "auto"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
        </div>
        {/* <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div> */}
        <div className="right">
  <Markdown
    rehypePlugins={[rehypeHighlight]}
    components={{
      code({ inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
          <pre className={className}>
            <code {...props}>{children}</code>
          </pre>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
    }}
  >
    {review}
  </Markdown>
</div>
      </main>
    </>
  )
}



export default App