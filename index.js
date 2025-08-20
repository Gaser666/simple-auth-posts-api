import express from 'express';
import { dbConnection } from './db/db-connection.js';
import { userRoutes } from './src/modules/user-routs.js';
const app = express();
app.use(userRoutes);
dbConnection








app.listen(3000, () => {
    console.log('Server is running on port 3000');
});