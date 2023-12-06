import React,{useState} from 'react';
import './VideoUpload.css';
import {useDispatch,useSelector} from 'react-redux'
import { uploadVideo } from '../../actions/video';
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

function VideoUpload({setVideoUploadPage}) {

    const CurrentUser = useSelector(state => state.currentUserReducer)

    const dispatch = useDispatch();

    const [title,setTitle] = useState("")
    const [videoFile, setVideoFile] = useState("")
    const [progress, setProgress] = useState(0)

    const fileOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setProgress(percentage);
            if (percentage === 100) {
              setTimeout(function () {}, 3000);
              setVideoUploadPage(false);
            }
          },
    }

    const handleSetVideoFile = (e) =>{
        setVideoFile(e.target.files[0]);
    }

    const uploadVideoFile = () =>{
        if(!title){
            alert("Plz Enter the Title of Video")
        }else if(!videoFile){
            alert('Plz Upload the Video')
        }else if(videoFile.size > 1000000){
            alert('Plz Attach video file less than 1kb')
        }else{
            const fileData = new FormData();
            fileData.append("file",videoFile);
            fileData.append("title",title);
            fileData.append("chanel",CurrentUser?.result._id);
            fileData.append("uploader",CurrentUser?.result.name);
            // console.log(videoFile);
            dispatch(uploadVideo({fileData:fileData,fileOptions:fileOptions}))
        }
    }

  return (
    <div className='container_VidUpload'>
        <input type="submit" name="text" value={"X"} className='ibtn_x'
        onClick={()=>setVideoUploadPage(false)}/>
        <div className='container2_VidUpload'>
            <div className="ibox_div_vidUpload">
            <input type='text' className='ibox_vidUpload' maxLength={30} placeholder='Enter Title of Your Video'
            onChange={(e)=>{setTitle(e.target.value)}}/>
            <label htmlFor='file' className='ibox_vidUpload btn_vidUpload'>
                <input type="file" name="file" className='ibox_vidUpload' style={{fontSize:'1rem'}} 
                onChange={(e)=>{handleSetVideoFile(e)}}/>
            </label>
            </div>
            <div className="ibox_div_vidUpload">
                <input type="submit" value="Upload" className='ibox_vidUpload btn_vidUpload'
                onClick={()=>uploadVideoFile()} />
            </div>
            <div className="loader ibox_div_vidUpload">
                <CircularProgressbar
                value={progress} text={`${progress}`} 
                styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: "butt",
                    textSize: "20px",
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(255,255,255,${progress / 100})`,
                    textColor: "#f88",
                    trailColor: "#adff2f",
                    backgroundColor: "#3e98c7",
                  })}/>
            </div>
        </div>
    </div>
  )
}

export default VideoUpload