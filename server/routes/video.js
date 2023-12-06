import express from 'express';
import {uploadVideo,getAllVideos} from '../controller/uploadVideo.js';
import upload from '../Helpers/fileHelpers.js';


const routes = express.Router();

routes.post('/uploadvideo',upload.single("file"),uploadVideo)
routes.get('/getvideos',getAllVideos)

export default routes;