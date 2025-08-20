import { userModel } from "../../db/user-model.js";

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
    const exist = await userModel.findOne({ email: req.body.email });

    if (exist) {
        return res.status(409).json({
            message: "User already exists",
            data: null
        });
    }
    const newUser = await userModel.insertOne(req.body);
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
export { createUser, deleteUser, getAllUsers, updateUser };

