import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import DescribeChanel from './DescribeChanel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Chanel({setEditCreateChanelBtn,setVideoUploadPage}) {
  const {Cid} = useParams()
  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel===Cid).reverse();
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