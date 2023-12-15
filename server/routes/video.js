import express from 'express';
import {uploadVideo,getAllVideos} from '../controller/uploadVideo.js';
import {likeController} from '../controller/like.js';
import {viewController} from '../controller/view.js';
import {likedVideoController,getAllLikedVideosController,deleteLikedVideoController} from '../controller/likedVideo.js';
import upload from '../Helpers/fileHelpers.js';
import {watchLaterController,getAllWatchLaterController,deleteWatchLaterController} from '../controller/watchLater.js'
import {historyController,getAllHistoryController,claerHistoryController} from '../controller/history.js'
import auth from '../middleware/auth.js'

const routes = express.Router();

routes.post('/uploadvideo',auth,upload.single("file"),uploadVideo)
routes.get('/getvideos',getAllVideos)
routes.patch('/like/:id',auth,likeController)
routes.patch('/view/:id',viewController)
routes.post('/likedvideo',auth,likedVideoController)
routes.get('/getalllikedvideos',getAllLikedVideosController)
routes.delete('/deletelikedvideo/:videoId/:viewer',auth,deleteLikedVideoController)
routes.post('/watchlater',auth,watchLaterController)
routes.get('/getallwatchlater',getAllWatchLaterController)
routes.delete('/deletewatchlater/:videoId/:viewer',auth,deleteWatchLaterController)
routes.post('/history',auth,historyController)
routes.get('/getallhistory',getAllHistoryController)
routes.delete('/clearhistory/:userId',auth,claerHistoryController)

export default routes;