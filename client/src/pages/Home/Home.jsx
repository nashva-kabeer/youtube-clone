import React from 'react';
import './Home.css';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import {useSelector} from 'react-redux';

function Home() {
  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();

    const NavList = [
      "All","java","Python","C++","Movies","Science","Animations","Gaming","Comedy","Trending",
      "Songs","Fiction","Technology","Entertainment","Food","Travel","Lifestyle"
    ]

  return (
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
          <div className="navigation_home">
            {
              NavList.map(m=>{
                return(
                  <p key={m} className="btn_nav_home">{m}</p>
                )
              })
            }
          </div>
          <ShowVideoGrid vids={vids}/>
        </div>
    </div>
  )
}

export default Home