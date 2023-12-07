import React from 'react';
import {Link} from 'react-router-dom';
import "./ShowVideo.css";
import moment from 'moment';

function ShowVideo({vid}) {
  return (
    <>
    <Link to={`/videopage/${vid?._id}`}>
        <video 
        src={`http://localhost:5000/${vid.filePath}`}
        className='video_ShowVideo'
        />
    </Link>
    <div className="video_description">
        <div className="Chanel_logo_App">
            <div className="fstChar_logo_App">
                <>{vid?.uploader.charAt(0).toUpperCase()}</>
            </div>
        </div>
        <div className="video_details">
            <p className="title_video_ShowVideo">{vid?.videoTitle}</p>
            <pre className='Vid_Views_UploadTime'>{vid?.createdAt}</pre>
            <pre className='Vid_Views_UploadTime'>{vid?.views} views <div className="dot"></div> {vid?.uploader} uploaded {moment(vid?.createdAt).fromNow()}</pre>
        </div>
    </div>
    </>
  )
}

export default ShowVideo