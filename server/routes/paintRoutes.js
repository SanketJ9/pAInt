import express, { response } from "express";
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router()

const configuration = new Configuration({
    apiKey : process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

router.route('/').get((req,res) => {
    res.send("hello from Paintt")
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        })

        const image = aiResponse.data.data[0].b64_json;
        console.log("image is",image)
        // const imageUrl = aiResponse['data'][0]['url']

        res.status(200).json({ photo:image})
        // res.status(200).json({ 
        //     success: true,
        //     data: imageUrl
        // })

    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          } 
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
})


export default router;