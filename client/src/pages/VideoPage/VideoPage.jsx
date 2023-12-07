import React from 'react';
import moment from 'moment';
import './VideoPage.css';
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../../components/Comments/Comments';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function VideoPage() {
    const {vid} = useParams();
    const vids = useSelector((state)=>state.videoReducer);
    const vv = vids?.data.filter((q)=> q._id=== vid)[0];
    // const CurrentUser = useSelector(state => state.currentUserReducer)
    // const chanels = useSelector(state=>state.chanelReducer)
    // const currentChanel = chanels.filter(c=>c._id===Cid)[0];
  return (
    <>
    <div className='Container_VideoPage'>
        <div className='Container2_VideoPage'>
            <div className="video_Display_videoPage">
                <video src={`http://localhost:5000/${vv.filePath}`}
                className='video_ShowVideo_videoPage'
                controls
                autoPlay
                />
                <div className="video_details_videoPage">
                    <div className="video_btns_title_cont_videoPage">
                        <p className="video_title_videoPage">{vv?.videoTitle}</p>
                        <div className="viewv_date_btn_videoPage">
                            <div className="views_videoPage">{vv?.views} views <div className="dot"></div>{vv?.uploader} uploaded {moment(vv?.createdAt).fromNow()}</div>
                            <LikeWatchLaterSaveBtns vv={vv} vid={vid}/>
                        </div>
                    </div>
                </div>
                <div className="chanel_details_videoPage">
                    <b className="chanel_logo_videoPage">
                        <p>{vv?.uploader.charAt(0).toUpperCase()}</p>
                    </b>
                    <p className="chanel_name_videoPage">{vv?.uploader}</p>
                </div>
                <div className="comments_videoPage">
                    <h2>
                        <u>Comments</u>
                    </h2>
                    <Comments/>
                </div>
            </div>
            <div className="moreVideoBar">More Videos</div>       
        </div>
    </div>
    </>
  )
}

export default VideoPage