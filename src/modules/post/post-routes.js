import { Router } from 'express';
import { verifyToken } from '../../middleware/verify-token.js';
import { addPost, deletePost, getAllPosts, updatePost } from './post-controller.js';
export const postsRoutes = Router();
postsRoutes.get('/posts', getAllPosts);
postsRoutes.post('/posts', verifyToken, addPost);
postsRoutes.patch('/posts/:id', verifyToken, updatePost);
postsRoutes.delete('/posts/:id', verifyToken, deletePost);