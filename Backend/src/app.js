


const express = require("express");
const cors = require("cors"); 
const aiRoutes = require("./routes/ai.routes");

const app = express();


// app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors({
  origin: "*", // Temporarily allow all origins (test first)
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// app.use(cors()); // Allow all origins (for development)

app.use(express.json()); // JSON parsing middleware

app.get("/", (req, res) => {
  res.send("Hello User");
});


app.use("/ai", aiRoutes);

module.exports = app;
