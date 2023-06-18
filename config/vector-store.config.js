import {OpenAIEmbeddings} from "langchain/embeddings/openai";
import {HNSWLib} from "langchain/vectorstores/hnswlib";

const getVectorStore = async () => {
    try {
        return await HNSWLib.load(
            "demo-data-hnswlib",
            new OpenAIEmbeddings()
        );
    } catch (error) {
        throw new Error("Problem loading vector store");
    }
}

const vectorStore = await getVectorStore();

export default vectorStore;
