

const aiService = require("../services/ai.service")

module.exports.getReview = async (req, res) => {
    try {
      console.log("Received body:", req.body); 
  
      const { code } = req.body; 
  
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
  
