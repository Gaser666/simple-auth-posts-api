import { userModel } from "../../../db/user-model.js";

export const checkEmail = async (req, res, next) => {
    const exist = await userModel.findOne({ email: req.body.email });
    if (exist) {
        return res.status(409).json({
            message: "User already exists",
        });
    }
    next();
}