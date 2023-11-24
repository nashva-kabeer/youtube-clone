import React from 'react';
import { useState } from 'react';
import './comments.css';
import DisplayComments from './DisplayComments';

function Comments() {
    const [CommentText, setCommentText] = useState("");

    const commentList = [
        {   _id:1,
            Commentbody:"hello",
            userCommented:"abc"
        },
        {   
            _id:2,
            Commentbody:"heii",
            userCommented:"bcd"
        },
    ];

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <>
    <form className='comment_sub_form_comments' onSubmit={handleOnSubmit}>
        <input type='text' onChange={(e)=>setCommentText(e.target.value)} placeholder='add comment..' className='comment_ibox'/>
        <input type='submit' value="add" className='comment_add_btn_comments'/>
    </form>
    <div className="display_comment_container">
        {
            commentList.map(m=>{
                return(
                    <>
                    <DisplayComments
                    ctId={m._id}
                    CommentBody={m.Commentbody}
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