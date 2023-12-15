import express from 'express';
import {postCommentController,editCommentController,getAllcommentController,deleteCommentController} from '../controller/comment.js'
import auth from '../middleware/auth.js';

const routes = express.Router();

routes.post('/post',auth,postCommentController)
routes.patch('/edit/:id',auth,editCommentController)
routes.get('/get',getAllcommentController)
routes.delete('/deletecomment/:id',auth,deleteCommentController)

export default routes;