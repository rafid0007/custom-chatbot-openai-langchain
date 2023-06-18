import { TextLoader } from "langchain/document_loaders";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { HNSWLib } from "langchain/vectorstores";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import dotenv from 'dotenv';

dotenv.config({ path: 'config/config.env' });

// loading data from text file
const FILE_NAME = "demo-data.txt";
const loader = new TextLoader(FILE_NAME);
const docs = await loader.load();

// splitting data into chunks
const chunkSize = 1000;
const chunkOverlap = 20;
const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize,
    chunkOverlap,
});
const splitDocuments = await textSplitter.splitDocuments(docs);

// storing split data into vector store while converting them into embeddings
const vectorStore = await HNSWLib.fromDocuments(
    splitDocuments,
    new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_API_KEY,
    })
);
await vectorStore.save("demo-data-hnswlib");
