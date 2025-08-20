import { postModel } from "../../../db/models/post-model.js";

const getAllPosts = async (req, res) => {
    const posts = await postModel.find().populate("createdBy", "name email");

    res.json({
        message: "All posts fetched successfully",
        data: posts
    },);
};
const addPost = async (req, res) => {
    req.body.createdBy = req.decoded._id;
    const newPost = await postModel.insertOne(req.body);
    res.json({
        message: "Post created successfully",
        data: newPost
    }, newPost);
}
const updatePost = async (req, res) => {
    let { id } = req.params;
    const post = await postModel.findOne({ _id: id, createdBy: req.decoded._id });
    if (post) {
        res.json({
            message: "post updated successfully",
            data: post
        })
    }
    else {
        res.status(404).json({
            message: "Post not found or you are not authorized to update this post"
        });
    }
    // const updatedPost = await postModel.findByIdAndUpdate(id, { ...req.body }, { new: true });
    // res.json({
    //     message: "Post updated successfully",
    //     data: updatedPost
    // })
}
const deletePost = async (req, res) => {
    let { id } = req.params;

    const deletedPost = await postModel.findOneByIdAndDelete({ _id: id, createdBy: req.decoded._id });
    if (deletedPost) {
        res.json({
            message: "Post deleted successfully",
            data: deletedPost
        });
    }
    else {
        res.status(404).json({
            message: "Post not found or you are not authorized to delete this post"
        });
    }

}
export { addPost, deletePost, getAllPosts, updatePost };

