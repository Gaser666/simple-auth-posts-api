import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../../../db/models/user-model.js";

const getAllUsers = async (req, res) => {

    const users = await userModel.find();
    res.json({
        message: "All users fetched successfully",
        data: users
    });
}
const updateUser = async (req, res) => {
    let { id } = req.params;
    const updatedUser = await userModel.findByIdAndDelete(id, { ...req.body }, { new: true });
    res.json({
        message: "User updated successfully",
        data: updatedUser
    });
};
const createUser = async (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const newUser = await userModel.insertOne(req.body);
    newUser.password = undefined;
    res.json({
        message: "User created successfully",
        data: newUser
    });
};
const deleteUser = async (req, res) => {
    let { id } = req.params;
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.json({
        message: "User deleted successfully",
        data: deletedUser
    });
};
const login = async (req, res) => {
    const exist = await userModel.findOne({ email: req.body.email });

    if (!exist) {
        return res.status(404).json({
            message: "User not found",
        });
    }
    const isPasswordValid = bcrypt.compareSync(req.body.password, exist.password);
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "emial or password is incorrect",
        });
    }
    const token = jwt.sign({ _id: exist._id, role: exist.role }, "our_secret_key");
    res.json({
        message: `Welcocme ${exist.name}`, token
    });
    
}
export { createUser, deleteUser, getAllUsers, login, updateUser };

