import {model} from "../../config/llm.config.js";
import {VectorDBQAChain} from "langchain/chains";
import vectorStore from "../../config/vector-store.config.js";

export const createConversationSummary = async (summary, user_input, bot_response) => {
    return `${summary?? ""} \nuser: ${user_input}, \nbot: ${bot_response}`;
    // try {
    //     const human_text = ` \`You're an AI language model. Generate a concise summary by considering the previous summary, user input, and AI responses in the conversation. Your goal is to capture the key information and maintain coherence..\n\nprevious summary: ${
    //         summary || ""}, \nuser: ${user_input}, \nbot: ${bot_response}\ncombined summary:`;
    //
    //     const response = await model.call(human_text);
    //     return response;
    // } catch (error) {
    //     throw new Error("Problem creating conversation summary");
    // }
};

export const refineQuestionUsingPreviousSummary = async (summary, query) => {
    try {
        const human_text = `Given the current user chat and previous conversations, provide a relevant short question to easily fetch answers from a knowledge base.\n\nPREVIOUS_CONVERSATIONS: \n${summary}\n\nCURRENT_CHAT: ${query}\n\nRefined Chat:`;

        const response = await model.call(human_text);
        return response;
    } catch (error) {
        throw new Error("Problem refining question using previous summary");
    }
};

export const getAiResponseFromKnowledgeBase = async (query) => {
    const human_text = `You are an online assistant about smart home assistant product.If you don't know an answer, ask user to provide more details.\n\nQuery:${query}\n\nAnswer:`;
    const chain = VectorDBQAChain.fromLLM(model, vectorStore);
    const ai_response = await chain.call({
        query: human_text,
    });
    return ai_response.text;
}
