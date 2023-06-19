import express from 'express';
import ApiRouter from './api/index.js';
const RootRoute = express.Router();

// routes for all apis
RootRoute.use('/api/v1', ApiRouter);

export default RootRoute;
