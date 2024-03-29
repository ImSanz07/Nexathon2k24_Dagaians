const axios = require('axios');
const fs = require('fs');


async function generateImage(prompt,negativeprompt) {
    try {
        const apiToken = "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"; // Replace with your API token
        const url = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";
        const data = {
            inputs: prompt, 
            negative_prompt: negativeprompt

        };

        const response = await axios.post(url, data, {
            headers: { Authorization: `Bearer ${apiToken}` },
            responseType: 'arraybuffer'
        });


        // return imageData;
        const imageData = Buffer.from(response.data);

        fs.writeFileSync('generated_image.jpg', imageData);

        return response.data;

        console.log('Image saved successfully!');
        // return 'generated_image.jpg';
         // Return the filename or any other identifier for the saved image
    } catch (error) {
        console.error('Error generating image:', error.response.data);
        throw error;
    }
}


module.exports = { generateImage };
