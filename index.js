import express from 'express';
import { dbConnection } from './db/db-connection.js';
const app = express();

dbConnection








app.listen(3000, () => {
    console.log('Server is running on port 3000');
});