import videoFile from "../models/videoFile.js";
import mongoose from "mongoose";

export const viewController = async(req,res)=>{
    const {id:_id} = req.params;
    // console.log(_id)

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Video Unavailable..")
    }
    try {
        const file = await videoFile.findById(_id);
        const views = file.views;
        const updateViews = await videoFile.findByIdAndUpdate(
            _id,
            {
                $set:{ "views":views + 1 }
            }
        )
        res.status(200).json(updateViews)
    } catch (error) {
        res.status(400).json("error: ",error)
    }
}