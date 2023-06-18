import { OpenAI } from "langchain/llms/openai";
import dotenv from 'dotenv';

dotenv.config({ path: 'config/config.env' });

export const model = new OpenAI({
    modelName: "gpt-3.5-turbo",
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.5,
});

