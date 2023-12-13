import React from 'react';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import './WHL.css';
import WHLVideoList from './WHLVideoList';
import {useDispatch, useSelector} from 'react-redux';
import { clearHistory } from '../../actions/history';



function WHL({page,videoList}) {
    const CurrentUser = useSelector(state => state.currentUserReducer)
    const dispatch = useDispatch();
    const handleClearHistory = () =>{
        if(CurrentUser){
            dispatch(clearHistory({
                userId:CurrentUser?.result._id
            }))
        }
    }

  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
            <p className="container_whl">
                <div className="box_WHL left_WHL">
                    <b>Your {page} Shown Here</b>
                    {
                        page==="History"&&
                    <div className="clearHistory_btn" onClick={()=>handleClearHistory()}>
                        Clear History
                    </div>
                    }
                </div>
                <div className="rightSide_whl">
                    <h1>{page}</h1>
                    <div className="whl_list">
                        <WHLVideoList page={page} videoList={videoList} CurrentUser={CurrentUser?.result._id}/>
                    </div>
                </div>
            </p>
        </div>
    </div>
  )
}

export default WHL