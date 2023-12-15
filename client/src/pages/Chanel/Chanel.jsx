import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
// import vid from '../../components/Video/vid.mp4'
import DescribeChanel from './DescribeChanel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Chanel({setEditCreateChanelBtn,setVideoUploadPage}) {
  const {Cid} = useParams()
  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel===Cid).reverse();
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Chanel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     Uploader: "abc",
  //     description: "description of  video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Chanel: "cdd",
  //     title: "video 2",
  //     Uploader: "abc",
  //     description: "description of  video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploader: "abc",
  //     description: "description of  video 3",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploader: "abc",
  //     description: "description of  video 3",
  //   },
  // ];
  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
          <DescribeChanel 
          setVideoUploadPage={setVideoUploadPage}
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          Cid = {Cid}/>
          <ShowVideoGrid vids={vids}/>
        </div>
    </div>
  )
}

export default Chanel