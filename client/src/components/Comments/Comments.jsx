import React from 'react';
import { useState } from 'react';
import './comments.css';
import DisplayComments from './DisplayComments';
import {useSelector,useDispatch} from 'react-redux';
import { postComment } from '../../actions/comment';

function Comments({videoId}) {
    const [CommentText, setCommentText] = useState("");

    const CurrentUser = useSelector(state => state.currentUserReducer)
    const commentList = useSelector(state=>state.commentReducer)
    const dispatch = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(CurrentUser){
            if(!CommentText){
                alert('plz type your comment ! ')
            }else{
                dispatch(postComment({
                    videoId:videoId,
                    userId:CurrentUser?.result._id,
                    commentBody: CommentText,
                    userCommented:CurrentUser?.result.name,
                }));
                setCommentText("");
            }
        }else{
            alert('plz login to post comments!')
        }
            
    }
  return (
    <>
    <form className='comment_sub_form_comments' onSubmit={handleOnSubmit}>
        <input type='text' onChange={(e)=>setCommentText(e.target.value)} placeholder='add comment..' value={CommentText} className='comment_ibox'/>
        <input type='submit' value="add" className='comment_add_btn_comments'/>
    </form>
    <div className="display_comment_container">
        {
            commentList?.data?.filter((q)=> videoId === q?.videoId).reverse().map(m=>{
                return(
                    <>
                    <DisplayComments
                    cId={m._id}
                    userId={m.userId}
                    commentBody={m.commentBody}
                    commentOn={m.commentOn}
                    userCommented={m.userCommented}
                    />
                    </>
                )
            })
        }
    </div>
    </>
  )
}

export default Comments