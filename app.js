import express from 'express';
import cors from 'cors';
import errorMiddleware from './middlewares/error.middleware.js';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Route Imports
import { notFoundHandler } from './middlewares/customErrorHandler.middleware.js';
import RootRoute from './routes/root.route.js';

// config
const app = express();

// cors setup
const corsConfig = {
    origin: true,
    credentials: true,
};
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

// helmet setup
app.use(
    helmet({
        crossOriginResourcePolicy: {
            policy: 'cross-origin',
        },
    })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// add sanitization middleware (express-mongo-sanitize)
// add sanitization middleware (xss-clean)

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Serving static files
app.use(express.static(join(__dirname, 'client')));

// Routes
app.use('/', RootRoute);

// Middleware for Errors
app.use(notFoundHandler);
app.use(errorMiddleware);

export default app;
