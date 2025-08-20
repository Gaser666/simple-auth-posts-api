import express from 'express';
import { dbConnection } from './db/db-connection.js';
import { postsRoutes } from './src/modules/post/post-routes.js';
import { userRoutes } from './src/modules/user/user-routes.js';

const app = express();
app.use(userRoutes);
app.use(postsRoutes);
dbConnection








app.listen(3000, () => {
    console.log('Server is running on port 3000');
});