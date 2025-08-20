import { Router } from 'express';
import { addPost, deletePost, getAllPosts, updatePost } from './post-controller.js';
export const postsRoutes = Router();
postsRoutes.get('/posts', getAllPosts);
postsRoutes.post('/posts', addPost);
postsRoutes.patch('/posts/:id', updatePost);
postsRoutes.delete('/posts/:id', deletePost);