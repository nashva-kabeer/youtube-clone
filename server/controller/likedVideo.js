import likedVideo from '../models/likedVideo.js'
import mongoose from 'mongoose'

export const likedVideoController = async(req,res) =>{
    const likedVideoData = req.body;
    //console.log(likedVideoData)
    const addToLikedVideo = new likedVideo(likedVideoData);
    try {
        await addToLikedVideo.save();
        res.status(200).json('added to likedvideo')
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllLikedVideosController = async(req,res) =>{
    try {
        const files = await likedVideo.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

export const deleteLikedVideoController = async(req,res)=>{
    const {videoId:videoId,viewer:viewer} = req.params;
    // console.log(videoId,viewer)
    try {
        await likedVideo.findOneAndDelete({
            videoId: videoId, viewer:viewer,
        })
        res.status(200).json({message:"Removed from watchlater"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}