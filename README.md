# custom-chatbot-openai-langchain

## Description

This is a server built with Node.js and express.

## Installation

Before installing switch the node version to >18.

To install the dependencies, run the following command:

### `npm install`

Now change the name of .env.sample to .evn and add OPENAI_API_KEY

Now run below command to ingest data from demo-data.txt file and save it into a vector store as embeddings.

[ Often requires installing hnswlib-node separately to successfully ingest data ]

### `npm run ingest`

If the ingestion is successfull. Start the server.

Start the server in development mode

### `npm run dev`

Start the server in production mode with single instance.

### `npm run start`

Start the server in production mode using clustering

### `npm run start:pm2`

Restart the server in production mode using clustering

### `npm run restart:pm2`

Stop the server in production mode using clustering

### `npm run stop:pm2`

For other additional scripts check package.json file.

