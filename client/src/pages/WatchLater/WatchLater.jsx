import React from 'react';
import WHL from '../../components/WHL/WHL';
import {useSelector} from 'react-redux';

function WatchLater() {
  const watchLaterList = useSelector(state=>state.watchLaterReducer)
return (
  <WHL page={"Watch Later"} videoList={watchLaterList}/>
)
}
export default WatchLater