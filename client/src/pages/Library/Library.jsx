import React from 'react';
import './Library.css';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import {FaHistory} from 'react-icons/fa';
import {MdOutlineWatchLater} from 'react-icons/md';
import {AiOutlineLike} from 'react-icons/ai';
import WHLVideoList from '../../components/WHL/WHLVideoList'
import {useSelector} from 'react-redux'
 
function Library() {
  const CurrentUser = useSelector(state => state.currentUserReducer)
  const historyList = useSelector(state=>state.historyReducer)
  const watchLaterList = useSelector(state=>state.watchLaterReducer)
  const likedVideoList = useSelector(state=>state.likedVideoReducer)

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
                page={"History"} videoList={historyList}
                CurrentUser={CurrentUser?.result._id}
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
                page={"Watch Later"} videoList={watchLaterList}
                CurrentUser={CurrentUser?.result._id}
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
                page={"Liked Video"} videoList={likedVideoList}
                CurrentUser={CurrentUser?.result._id}
                />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Library