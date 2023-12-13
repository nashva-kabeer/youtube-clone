import express from 'express';
import {uploadVideo,getAllVideos} from '../controller/uploadVideo.js';
import {likeController} from '../controller/like.js';
import {viewController} from '../controller/view.js';
import {likedVideoController,getAllLikedVideosController,deleteLikedVideoController} from '../controller/likedVideo.js';
import upload from '../Helpers/fileHelpers.js';
import {watchLaterController,getAllWatchLaterController,deleteWatchLaterController} from '../controller/watchLater.js'
import {historyController,getAllHistoryController,claerHistoryController} from '../controller/history.js'

const routes = express.Router();

routes.post('/uploadvideo',upload.single("file"),uploadVideo)
routes.get('/getvideos',getAllVideos)
routes.patch('/like/:id',likeController)
routes.patch('/view/:id',viewController)
routes.post('/likedvideo',likedVideoController)
routes.get('/getalllikedvideos',getAllLikedVideosController)
routes.delete('/deletelikedvideo/:videoId/:viewer',deleteLikedVideoController)
routes.post('/watchlater',watchLaterController)
routes.get('/getallwatchlater',getAllWatchLaterController)
routes.delete('/deletewatchlater/:videoId/:viewer',deleteWatchLaterController)
routes.post('/history',historyController)
routes.get('/getallhistory',getAllHistoryController)
routes.delete('/clearhistory/:userId',claerHistoryController)

export default routes;