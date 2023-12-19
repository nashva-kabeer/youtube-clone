import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import {useSelector} from 'react-redux'
import './yourVideo.css'

function YourVideo() {

  const CurrentUser = useSelector(state => state.currentUserReducer)
  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel===CurrentUser?.result._id).reverse();
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