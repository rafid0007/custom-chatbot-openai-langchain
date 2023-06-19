import express from 'express';
import ApiRouter from './api/index.js';
const RootRoute = express.Router();
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// routes for all apis
RootRoute.use('/api/v1', ApiRouter);

// route for home url
RootRoute.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'index.html'));
});

export default RootRoute;
