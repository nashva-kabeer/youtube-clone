import express from 'express';
import {uploadVideo} from '../controller/uploadVideo.js';
import upload from '../Helpers/fileHelpers.js';


const routes = express.Router();

routes.post('/uploadvideo',upload.single("file"),uploadVideo)

export default routes;