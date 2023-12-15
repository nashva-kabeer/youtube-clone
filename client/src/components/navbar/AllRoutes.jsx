import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Library from '../../pages/Library/Library';
import WatchHistory from '../../pages/WatchHistory/WatchHistory';
import WatchLater from '../../pages/WatchLater/WatchLater';
import LikedVideo from '../../pages/LikedVideo/LikedVideo';
import YourVideo from '../../pages/YourVideo/YourVideo';
import VideoPage from '../../pages/VideoPage/VideoPage';
import Chanel from '../../pages/Chanel/Chanel';
import Search from '../../pages/Search/Search';

function AllRoutes({setEditCreateChanelBtn,setVideoUploadPage}) {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/history" element={<WatchHistory/>} />
        <Route path="/watchlater" element={<WatchLater/>} />
        <Route path="/likedvideo" element={<LikedVideo/>} />
        <Route path="/yourvideo" element={<YourVideo/>} />
        <Route path='/videopage/:vid' element={<VideoPage/>} />
        <Route path='/search/:searchQuery' element={<Search/>} />
        <Route path='/chanel/:Cid' 
        element={<Chanel 
        setVideoUploadPage={setVideoUploadPage} 
        setEditCreateChanelBtn={setEditCreateChanelBtn}/>} />
    </Routes>
  )
}

export default AllRoutes