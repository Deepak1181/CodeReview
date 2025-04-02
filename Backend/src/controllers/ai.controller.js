

const aiService = require("../services/ai.service")

module.exports.getReview = async (req, res) => {
    try {
      console.log("Received body:", req.body); // Debugging
  
      const { code } = req.body; // ✅ Correct way
  
      if (!code) {
        return res.status(400).json({ error: "Prompt or code is required" });
      }
  
      const response = await aiService.generateResponse(code);
  
      res.json({ response });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  

// const aiService = require("../services/ai.service");

// module.exports.getReview = async (req, res) => {
//   try {
//     console.log("Received body:", req.body);
    
//     const { code } = req.body;
//     if (!code) {
//       return res.status(400).json({ error: "Code is required" });
//     }

//     const aiResponse = await aiService.generateResponse(code);

//     return res.json({ review: aiResponse });
//   } catch (error) {
//     console.error("Controller Error:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };
