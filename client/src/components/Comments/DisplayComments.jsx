import React , {useState} from 'react';

function DisplayComments({ctId,CommentBody,userCommented}) {
    const [Edit, setEdit] = useState(false)
    const [CommentBdy, setCommentBdy] = useState("");

    const handleEdit = (ctId,ctBdy) =>{
        setEdit(true);
        setCommentBdy(ctBdy);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
    }

  return (
    <>{
        Edit? <>
        <form className='comment_sub_form_comments' onSubmit={handleOnSubmit}>
        <input type='text' onChange={(e)=>setCommentBdy(e.target.value)} placeholder='Edit comment..' value={CommentBdy} className='comment_ibox'/>
        <input type='submit' value="Change" className='comment_add_btn_comments'/>
        </form>
        </>:<>
        <p className="comment_body">{CommentBdy}</p>
        </>
    }
    <p className="user_commented">- {userCommented} commented</p>
    <p className="EditDel_Display_Comment">
        <i onClick={()=>handleEdit(ctId,CommentBody)}>Edit</i>
        <i>Delete</i>
    </p>
    </>
  )
}

export default DisplayComments