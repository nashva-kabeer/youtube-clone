import React from 'react';
import './Library.css';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import vid from '../../components/Video/vid.mp4';
import {FaHistory} from 'react-icons/fa';
import {MdOutlineWatchLater} from 'react-icons/md';
import {AiOutlineLike} from 'react-icons/ai';
import WHLVideoList from '../../components/WHL/WHLVideoList'
 
function Library() {
  const vids = [
    {
      _id: 1,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 1",
      Uploader: "abc",
      description: "description of  video 1",
    },
    {
      _id: 2,
      video_src: vid,
      Chanel: "cdd",
      title: "video 2",
      Uploader: "abc",
      description: "description of  video 2",
    },
    {
      _id: 3,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploader: "abc",
      description: "description of  video 3",
    },
    {
      _id: 4,
      video_src: vid,
      Chanel: "add",
      title: "video 3",
      Uploader: "abc",
      description: "description of  video 3",
    },
  ];

  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
          <div className="container_libraryPage">
              <h1 className="container_title_libraryPage">
                <b><FaHistory/></b>
                <b>History</b>
              </h1>
              <div className="cotainer_videoList_libraryPage">
                <WHLVideoList
                page={"History"} videoList={vids}
                />
              </div>
          </div>
          <div className="container_libraryPage">
              <h1 className="container_title_libraryPage">
                <b><MdOutlineWatchLater/></b>
                <b>Watch Later</b>
              </h1>
              <div className="cotainer_videoList_libraryPage">
                <WHLVideoList
                page={"Watch Later"} videoList={vids}
                />
              </div>
          </div>
          <div className="container_libraryPage">
              <h1 className="container_title_libraryPage">
                <b><AiOutlineLike/></b>
                <b>Liked Video</b>
              </h1>
              <div className="cotainer_videoList_libraryPage">
                <WHLVideoList
                page={"Liked Video"} videoList={vids}
                />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Library