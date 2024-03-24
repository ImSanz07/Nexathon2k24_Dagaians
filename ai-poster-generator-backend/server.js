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
    const prompt = `Create a stunning background for the given poster.Include the text from the Event Title.Make it as beautiful and perfect as possible.\nEvent: ${eventName}\nTime: ${time}\nDate: ${date}\nVenue: ${venue}\nDescription: ${description}`;

    await generateImage(prompt); 

    console.log(prompt);

});

app.listen(5000,()=>{
    console.log("Port Connected");
})