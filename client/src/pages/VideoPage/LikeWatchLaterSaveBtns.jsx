import React, { useState } from 'react';
import {BsThreeDots} from 'react-icons/bs';
import {MdPlaylistAddCheck} from 'react-icons/md';
import {AiFillDislike,AiOutlineDislike,AiFillLike,AiOutlineLike} from 'react-icons/ai';
import {RiPlayListAddFill,RiHeartAddFill,RiShareForwardFill} from 'react-icons/ri';
import './LikeWatchLaterSaveBtns.css';
import { useDispatch } from 'react-redux';
import {likeVideo} from '../../actions/video'

function LikeWatchLaterSaveBtns({vv,vid}) {
    const [saveVideo,setSaveVideo] = useState(false)
    const [likeBtn, setLikeBtn] = useState(false)
    const [dislikeBtn, setDislikeBtn] = useState(false)

    const dispatch = useDispatch()

    const toggleSaveVideo = () => {
        if(saveVideo){
            setSaveVideo(false)
        }else{
            setSaveVideo(true)
        }
    }
    const toggleLikeBtn = (e,lk) => {
        if(likeBtn){
            setLikeBtn(false);
            dispatch(likeVideo({
                id:vid,Like: lk - 1,
            })
            );
        }else{
            setLikeBtn(true);
            dispatch(likeVideo({
                id:vid,Like: lk + 1,
            })
            );
            setDislikeBtn(false);
        }
    }
    const toggleDislikeBtn = (e,lk) => {
        if(dislikeBtn){
            setDislikeBtn(false)
        }else{
            setDislikeBtn(true);
            if(likeBtn){
                dispatch(likeVideo({
                    id:vid,Like: lk - 1,
                })
                );
            }
            setLikeBtn(false)
        }
    }
  return (
    <div className='btns_cont_videoPage'>
        <div className="btn_videoPage">
            <BsThreeDots/>
        </div>
        <div className="btn_videoPage">
            <div className="like_videoPage" onClick={(e)=>toggleLikeBtn(e,vv?.like)}>
                {
                    likeBtn ? <>
                    <AiFillLike size={22} className='btns_videoPage'/>
                    </>:<>
                    <AiOutlineLike size={22} className='btns_videoPage'/>
                    </>
                }
                <b>{vv?.like}</b>
            </div>
            <div className="like_videoPage" onClick={(e)=>toggleDislikeBtn(e,vv?.like)}>
                {
                    dislikeBtn ? <>
                    <AiFillDislike size={22} className='btns_videoPage'/>
                    </>:<>
                    <AiOutlineDislike size={22} className='btns_videoPage'/>
                    </>
                }
                <b>DISLIKE</b>
            </div>
            <div className="like_videoPage" onClick={()=>toggleSaveVideo()}>
                {
                    saveVideo ? (<>
                    <MdPlaylistAddCheck size={22} className='btns_videoPage'/>
                    <b>Saved</b>
                    </>):(<>
                    <RiPlayListAddFill size={22} className='btns_videoPage'/>
                    <b>Save</b>
                    </>)
                }
            </div>
            <div className="like_videoPage">
                <RiHeartAddFill size={22} className='btns_videoPage'/>
                <b>Thanks</b>
            </div>
            <div className="like_videoPage">
                <RiShareForwardFill size={22} className='btns_videoPage'/>
                <b>Share</b>
            </div>
        </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtns