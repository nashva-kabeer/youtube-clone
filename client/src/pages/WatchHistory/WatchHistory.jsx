import React from 'react';
import WHL from '../../components/WHL/WHL';
import {useSelector} from 'react-redux';

function WatchHistory() {
  const historyList = useSelector(state=>state.historyReducer)
  return (
    <WHL page={"History"} videoList={historyList}/>
  )
}

export default WatchHistory