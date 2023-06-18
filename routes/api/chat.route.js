import express from "express";
import chatController from "../../controllers/chat.controller.js";
import validate from "../../middlewares/validation.middleware.js";
import chatValidationSchema from "../../validation/chat.validate.js"

const chatRoute = express.Router();

chatRoute.post("/", validate(chatValidationSchema), chatController.createChatResponse);

export default chatRoute;
