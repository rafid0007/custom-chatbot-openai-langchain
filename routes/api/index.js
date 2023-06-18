 import express from 'express';
 import chatRoute from "./chat.route.js";

const ApiRouter = express.Router();

// routes
ApiRouter.get('/health', (req, res) => res.send('API is working ' + `in ${process.env.NODE_ENV} mode`));
ApiRouter.use('/chats', chatRoute);


export default ApiRouter;
