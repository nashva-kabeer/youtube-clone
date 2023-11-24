import React from 'react';
import vid from '../../components/Video/vid.mp4'
import './VideoPage.css';
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../../components/Comments/Comments';

function VideoPage() {
  return (
    <>
    <div className='Container_VideoPage'>
        <div className='Container2_VideoPage'>
            <div className="video_Display_videoPage">
                <video src={vid}
                className='video_ShowVideo_videoPage'
                controls
                autoPlay
                />
                <div className="video_details_videoPage">
                    <div className="video_btns_title_cont_videoPage">
                        <p className="video_title_videoPage">Title</p>
                        <div className="viewv_date_btn_videoPage">
                            <div className="views_videoPage">5 views <div className="dot"></div>uploaded 1 year ago</div>
                            <LikeWatchLaterSaveBtns/>
                        </div>
                    </div>
                </div>
                <div className="chanel_details_videoPage">
                    <b className="chanel_logo_videoPage">
                        <p>C</p>
                    </b>
                    <p className="chanel_name_videoPage">chanel name</p>
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