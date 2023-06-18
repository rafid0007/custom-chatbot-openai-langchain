import catchAsyncErrorsMiddleware from "../middlewares/catchAsyncErrors.middleware.js";
import {getChatResponseFromAi} from "../services/chat.service.js";

const createChatResponse = catchAsyncErrorsMiddleware(async (req, res, next) => {
    const {user_id, user_message} = req.body;
    const response = await getChatResponseFromAi({user_id, user_message});

    res.status(200).json({
        success: true,
        data: {
            ai_response: response
        },
    });
});

export default {
    createChatResponse
}
