import React, { useEffect, useState } from 'react';
import {BsThreeDots} from 'react-icons/bs';
import {MdPlaylistAddCheck} from 'react-icons/md';
import {AiFillDislike,AiOutlineDislike,AiFillLike,AiOutlineLike} from 'react-icons/ai';
import {RiPlayListAddFill,RiHeartAddFill,RiShareForwardFill} from 'react-icons/ri';
import './LikeWatchLaterSaveBtns.css';
import { useDispatch , useSelector} from 'react-redux';
import {likeVideo} from '../../actions/video'
import { addToLikedVideo, deleteLikedVideo } from '../../actions/likedVideo';
import { addToWatchLater, deleteWatchLater } from '../../actions/watchLater';

function LikeWatchLaterSaveBtns({vv,vid}) {
    const CurrentUser = useSelector(state => state.currentUserReducer)
    const [saveVideo,setSaveVideo] = useState(false)
    const [likeBtn, setLikeBtn] = useState(false)
    const [dislikeBtn, setDislikeBtn] = useState(false)

    const likedVideoList = useSelector(state=>state.likedVideoReducer)

    const watchLaterList = useSelector(state=>state.watchLaterReducer)



    useEffect(()=>{
        likedVideoList?.data.filter(q=>q?.videoId === vid && q?.viewer === CurrentUser?.result._id).map(m=>setLikeBtn(true))

        watchLaterList?.data.filter(q=>q?.videoId === vid && q?.viewer === CurrentUser?.result._id).map(m=>setSaveVideo(true))
    },[])


    const dispatch = useDispatch()

    const toggleSaveVideo = () => {
        if(CurrentUser){
            if(saveVideo){
                setSaveVideo(false);
                dispatch(deleteWatchLater({
                    videoId:vid,
                    viewer:CurrentUser?.result._id, 
                }));
            }else{
                setSaveVideo(true);
                dispatch(addToWatchLater({
                    videoId:vid,
                    viewer:CurrentUser?.result._id,
                }))
            }
        }else{
            alert('pls login to continue.')
        }
    }
    const toggleLikeBtn = (e,lk) => {
        if(CurrentUser){
            if(likeBtn){
                setLikeBtn(false);
                dispatch(likeVideo({
                    id:vid,Like: lk - 1,
                })
                );
                dispatch(deleteLikedVideo({
                    videoId:vid,
                    viewer:CurrentUser?.result._id,
                }))
            }else{
                setLikeBtn(true);
                dispatch(likeVideo({
                    id:vid,Like: lk + 1,
                })
                );
                dispatch(addToLikedVideo({
                    videoId:vid,
                    viewer:CurrentUser?.result._id,
                }))
                setDislikeBtn(false);
            }
        }else{
            alert('pls login to continue.')
        }
    }
    const toggleDislikeBtn = (e,lk) => {
        if(CurrentUser){
            if(dislikeBtn){
                setDislikeBtn(false)
            }else{
                setDislikeBtn(true);
                if(likeBtn){
                    dispatch(likeVideo({
                        id:vid,Like: lk - 1,
                    })
                    );
                    dispatch(deleteLikedVideo({
                        videoId:vid,
                        viewer:CurrentUser?.result._id,
                    }))
                }
                setLikeBtn(false)
            }
        }else{
            alert('pls login to continue.')
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