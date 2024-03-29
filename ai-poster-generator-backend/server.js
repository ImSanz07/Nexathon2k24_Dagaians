const express = require("express");
const cors = require("cors");
const { generateImage } = require('./stableDiffusion');

const app=express();
app.use(cors());
app.use(express.json());

app.get("/",cors(),(req,res)=>{

})

app.post("/sendData",async(req,res)=>{
    const {eventName} = req.body;
    const {venue} = req.body;
    const {time} = req.body;
    const {date} = req.body;
    const {description} = req.body;
    const prompt = `Design Text Based Event Poster for ${eventName} which is ${description},${venue},${time},${date},always generate or include text,Always add photorealistic image,focus of human anatomy,Generate Discrete Images without Merging them,Always include QR code for registration,Generate a realistic and sharp image without any artistic effects,4k resolution,creative,highly detailed, sharp focus,vibrant colors,high detail,realistic lighting,realistic,cyberpunk,sci-fi`;

    const negativeprompt = `Blurry,Easynegative, bad-hands-5, low quality, poorly drawn, out of focus, bad composition`;
  

    

    const imageData = await generateImage(prompt,negativeprompt); 
    res.send(imageData);
    console.log(prompt);

});

app.listen(5000,()=>{
    console.log("Port Connected");
})