import { postModel } from "../../../db/models/post-model.js";

const getAllPosts = async (req, res) => {
    const posts = await postModel.find();
    res.json({
        message: "All posts fetched successfully",
        data: posts
    });
};
const addPost = async (req, res) => {
    const newPost = await postModel.insertOne(req.body);
    res.json({
        message: "Post created successfully",
        data: newPost
    });
}
const updatePost = async (req, res) => {
    let { id } = req.params;
    const updatedPost = await postModel.findByIdAndUpdate(id, { ...req.body }, { new: true });
    res.json({
        message: "Post updated successfully",
        data: updatedPost
    })
}
const deletePost = async (req, res) => {
    let { id } = req.params;
    const deletedPost = await postModel.findByIdAndDelete(id);
    res.json({
        message: "Post deleted successfully",
        data: deletedPost
    });
}
export { addPost, deletePost, getAllPosts, updatePost };

