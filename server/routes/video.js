import express from 'express';
import {uploadVideo,getAllVideos} from '../controller/uploadVideo.js';
import {likeController} from '../controller/like.js';
import upload from '../Helpers/fileHelpers.js';

const routes = express.Router();

routes.post('/uploadvideo',upload.single("file"),uploadVideo)
routes.get('/getvideos',getAllVideos)
routes.patch('/like/:id',likeController)

export default routes;