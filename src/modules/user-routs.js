import { Router } from "express";
import { createUser, deleteUser, getAllUsers, updateUser } from "./user-conroller.js";

const userRoutes = Router();
userRoutes.get('/users', getAllUsers);
userRoutes.put('/users/:id', updateUser);
userRoutes.post('/users', createUser);
// userRoutes.post('/users/login', login);
userRoutes.delete('/users/:id', deleteUser);