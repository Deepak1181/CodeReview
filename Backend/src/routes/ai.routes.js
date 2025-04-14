


const express = require('express');
const aiController = require("../controllers/ai.controller")

const router = express.Router();

//controller
// router.get("/get-review" ,(req,res)=>{
//     const prompt = req.query.prompt
//     if(!prompt){
//         return res.status(404).send("prompt not recived")
//     }
// })


router.post("/get-review", aiController.getReview)


module.exports = router;    