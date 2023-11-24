import React, { useState } from 'react';
import {BsThreeDots} from 'react-icons/bs';
import {MdPlaylistAddCheck} from 'react-icons/md';
import {AiFillDislike,AiOutlineDislike,AiFillLike,AiOutlineLike} from 'react-icons/ai';
import {RiPlayListAddFill,RiHeartAddFill,RiShareForwardFill} from 'react-icons/ri';
import './LikeWatchLaterSaveBtns.css';

function LikeWatchLaterSaveBtns() {
    const [saveVideo,setSaveVideo] = useState(false)
    const [likeBtn, setLikeBtn] = useState(false)
    const [dislikeBtn, setDislikeBtn] = useState(false)

    const toggleSaveVideo = () => {
        if(saveVideo){
            setSaveVideo(false)
        }else{
            setSaveVideo(true)
        }
    }
    const toggleLikeBtn = () => {
        if(likeBtn){
            setLikeBtn(false)
        }else{
            setLikeBtn(true)
        }
    }
    const toggleDislikeBtn = () => {
        if(dislikeBtn){
            setDislikeBtn(false)
        }else{
            setDislikeBtn(true)
        }
    }
  return (
    <div className='btns_cont_videoPage'>
        <div className="btn_videoPage">
            <BsThreeDots/>
        </div>
        <div className="btn_videoPage">
            <div className="like_videoPage" onClick={()=>toggleLikeBtn()}>
                {
                    likeBtn ? <>
                    <AiFillLike size={22} className='btns_videoPage'/>
                    </>:<>
                    <AiOutlineLike size={22} className='btns_videoPage'/>
                    </>
                }
                <b>1</b>
            </div>
            <div className="like_videoPage" onClick={()=>toggleDislikeBtn()}>
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