import express, { Router } from "express";
import { createUser, deleteUser, getAllUsers, login, updateUser } from "./user-conroller.js";
export const userRoutes = Router();
userRoutes.use(express.json());
userRoutes.get('/users', getAllUsers);
userRoutes.put('/users/:id', updateUser);
userRoutes.post('/users', createUser);
userRoutes.post('/users/login', login);
userRoutes.delete('/users/:id', deleteUser);