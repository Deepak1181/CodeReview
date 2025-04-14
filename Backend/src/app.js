


const express = require("express");
const cors = require("cors"); 
const aiRoutes = require("./routes/ai.routes");

const app = express();


app.use(cors({ origin: "*" }));
// app.use(cors({
//   origin: ["*"], 
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

// app.use(cors()); 

app.use(express.json()); // JSON parsing middleware

app.get("/", (req, res) => {
  res.send("Hello User");
});


app.use("/ai", aiRoutes);

module.exports = app;
