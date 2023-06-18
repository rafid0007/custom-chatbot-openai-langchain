import {createConversationSummary, getAiResponseFromKnowledgeBase, refineQuestionUsingPreviousSummary} from "../utils/chat/chat.helper.js";
import SummaryModel from "../models/summary.model.js";

export const getChatResponseFromAi = async ({user_id, user_message}) => {
    const summary = await SummaryModel.findOne({user: user_id});
        if (summary) {
            const previousSummary = summary.text;
            const refined_question = await refineQuestionUsingPreviousSummary(previousSummary, user_message);
            const ai_response = await getAiResponseFromKnowledgeBase(refined_question);
            const newSummary = await createConversationSummary(previousSummary, refined_question, ai_response);
            await SummaryModel.findOneAndUpdate({user: user_id}, {text: newSummary});
            //logs
            console.log("=======>user query = ", user_message)
            console.log("=======>previousSummary = ", previousSummary);
            console.log("=======>refined_question = ", refined_question);
            console.log("=======>ai_response = ", ai_response);
            console.log("=======>newSummary = ", newSummary);
            return ai_response;
        } else {
            const ai_response = await getAiResponseFromKnowledgeBase(user_message);
            const newSummary = await createConversationSummary(null, user_message, ai_response);
            await SummaryModel.create({user: user_id, text: newSummary});
            // logs
            console.log("=======>user query = ", user_message);
            console.log("=======>ai_response = ", ai_response);
            console.log("=======>newSummary = ", newSummary);
            return ai_response;
        }
};
