import mongoose from "mongoose";

const videoFileSchema = new mongoose.Schema({
    videoTitle: {type: String,required: true},
    fileName: {type: String,required: true},
    filePath: {type: String,required: true},
    fileType: {type: String,required: true},
    fileSize: {type: String,required: true},
    videoChanel: {type: String,required: true},
    like: {type: Number,default: 0},
    views: {type: Number,default: 0},
    uploder: {type: String}},
  {
    timestamps: true,
  });

export default mongoose.model("VideoFile",videoFileSchema)