const axios = require('axios');
const fs = require('fs');

async function generateImage(prompt) {
    try {
        const apiToken = "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"; // Replace with your API token
        const url = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";
        const data = {
            inputs: prompt
        };

        const response = await axios.post(url, data, {
            headers: { Authorization: `Bearer ${apiToken}` },
            responseType: 'arraybuffer'
        });

        const imageData = Buffer.from(response.data, 'binary');
        fs.writeFileSync('generated_image.jpg', imageData);

        console.log('Image saved successfully!');
        return 'generated_image.jpg'; // Return the filename or any other identifier for the saved image
    } catch (error) {
        console.error('Error generating image:', error.response.data);
        throw error;
    }
}

// Example usage
// query("Astronaut riding a horse").then((filename) => {
//     console.log('Image saved as:', filename);
// }).catch((error) => {
//     console.error('Error:', error);
// });

module.exports = { generateImage };
