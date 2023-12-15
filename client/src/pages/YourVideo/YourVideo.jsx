import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import {useSelector} from 'react-redux'
// import vid from '../../components/Video/vid.mp4';
import './yourVideo.css'

function YourVideo() {

  const CurrentUser = useSelector(state => state.currentUserReducer)
  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel===CurrentUser?.result._id).reverse();
    // const vids = [
    //     {
    //       _id: 1,
    //       video_src: vid,
    //       Chanel: "62bafe6752cea35a6c30685f",
    //       title: "video 1",
    //       Uploader: "abc",
    //       description: "description of  video 1",
    //     },
    //     {
    //       _id: 2,
    //       video_src: vid,
    //       Chanel: "cdd",
    //       title: "video 2",
    //       Uploader: "abc",
    //       description: "description of  video 2",
    //     },
    //     {
    //       _id: 3,
    //       video_src: vid,
    //       Chanel: "add",
    //       title: "video 3",
    //       Uploader: "abc",
    //       description: "description of  video 3",
    //     },
    //     {
    //       _id: 4,
    //       video_src: vid,
    //       Chanel: "add",
    //       title: "video 3",
    //       Uploader: "abc",
    //       description: "description of  video 3",
    //     },
    //   ];
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
          <div className="navigation_home">
          </div>
          <div className="container_yourVideo">
          <h1>Your Video</h1>
          {
            CurrentUser ? (<>
            <ShowVideoGrid vids={vids}/>
            </>):(<>
            <h3>plz login to see your uploaded videos</h3></>)
          }
          </div>
        </div>
    </div>
  )
}

export default YourVideo