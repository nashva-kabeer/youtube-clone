import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comment';
import moment from 'moment';
import {useSelector} from 'react-redux';

function DisplayComments({cId,commentBody,userId,commentOn,userCommented}) {

    const CurrentUser = useSelector(state => state.currentUserReducer)

    const [Edit, setEdit] = useState(false)
    const [CommentBdy, setCommentBdy] = useState("");
    const [cmtId, setcmtId] = useState("")

    const handleEdit = (ctId,commentBody) =>{
        setEdit(true);
        setcmtId(ctId);
        setCommentBdy(commentBody);
    }

    const dispatch = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!CommentBdy){
            alert("Type your comments")
        }else{
            dispatch(editComment({
                id:cmtId,
                commentBody:CommentBdy
            }))
            setCommentBdy("")
        }
        setEdit(false);
    };
    
    const handleDeleteComment = (id) =>{
        dispatch(deleteComment(id))
    }

  return (
    <>{
        Edit? <>
        <form className='comment_sub_form_comments' onSubmit={handleOnSubmit}>
        <input type='text' onChange={(e)=>setCommentBdy(e.target.value)} placeholder='Edit comment..' value={CommentBdy} className='comment_ibox'/>
        <input type='submit' value="Change" className='comment_add_btn_comments'/>
        </form>
        </>:<>
        <p className="comment_body">{commentBody}</p>
        </>
    }
    <p className="user_commented">- {userCommented} commented {moment(commentOn).fromNow()}</p>
    {
        CurrentUser?.result._id === userId &&(
        <p className="EditDel_Display_Comment">
            <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
            <i onClick={()=>handleDeleteComment(cId)}>Delete</i>
        </p>
        )
    }
    </>
  )
}

export default DisplayComments