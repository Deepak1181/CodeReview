






// const express = require("express");
// const aiRoutes = require("./routes/ai.routes");

// const app = express();

// // Add JSON parsing middleware
// app.use(express.json()); // This is required to read req.body

// app.get("/", (req, res) => {
//   res.send("Hello User");
// });

// // ✅ Use AI routes
// app.use("/ai", aiRoutes);

// module.exports = app;











const express = require("express");
const cors = require("cors"); 
const aiRoutes = require("./routes/ai.routes");

const app = express();


app.use(cors({ origin: "http://localhost:5173" }));
// app.use(cors()); // Allow all origins (for development)

app.use(express.json()); // JSON parsing middleware

app.get("/", (req, res) => {
  res.send("Hello User");
});

// ✅ Use AI routes
app.use("/ai", aiRoutes);

module.exports = app;
