import comment from '../models/comment.js';
import mongoose from 'mongoose';



export const postCommentController = async(req,res) =>{
    const commentData = req.body;
    // console.log(commentData)
    const postComment = new comment(commentData);
    try {
        await postComment.save();
        res.status(200).json('comment posted')
    } catch (error) {
        res.status(400).json(error)
    }
};

export const editCommentController =async(req,res)=>{
    const {id:_id} = req.params;
    const {commentBody} = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Comment Unavailable..")
    }
    try {
        const updateComment = await comment.findByIdAndUpdate(
            _id,
            {
                $set:{"commentBody":commentBody}
            }
        )
        res.status(200).json(updateComment)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllcommentController = async(req,res) =>{
    try {
        const commentList = await comment.find();
        res.status(200).send(commentList);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

export const deleteCommentController = async (req, res) => {
    const {id:_id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("Comments Unavailable..");
    }
    try {
    await comment.findByIdAndDelete(_id);
    res.status(200).json({ message: "Comment Deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};