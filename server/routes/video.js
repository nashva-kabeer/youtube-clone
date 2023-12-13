import express from 'express';
import {uploadVideo,getAllVideos} from '../controller/uploadVideo.js';
import {likeController} from '../controller/like.js';
import {likedVideoController,getAllLikedVideosController} from '../controller/likedVideo.js';
import upload from '../Helpers/fileHelpers.js';
import {watchLaterController,getAllWatchLaterController,deleteWatchLaterController} from '../controller/watchLater.js'

const routes = express.Router();

routes.post('/uploadvideo',upload.single("file"),uploadVideo)
routes.get('/getvideos',getAllVideos)
routes.patch('/like/:id',likeController)
routes.post('/likedvideo',likedVideoController)
routes.get('/getalllikedvideos',getAllLikedVideosController)
routes.post('/watchlater',watchLaterController)
routes.get('/getallwatchlater',getAllWatchLaterController)
routes.delete('/deletewatchlater/:videoId/:viewer',deleteWatchLaterController)

export default routes;