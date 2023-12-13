import history from '../models/history.js'
import mongoose from 'mongoose'

export const historyController = async(req,res) =>{
    const HistoryData = req.body;
    // console.log(watchLaterData)
    const addToHistory = new history(HistoryData);
    try {
        await addToHistory.save();
        res.status(200).json('added to watchlater')
        // console.log('done')
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllHistoryController = async(req,res) =>{
    try {
        const files = await history.find();
        res.status(200).send(files);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

export const claerHistoryController = async(req,res)=>{
    const {userId:userId} = req.params;
    console.log(userId)
    try {
        await history.deleteMany({
            viewer:userId
        })
        res.status(200).json({message:"history cleared"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}