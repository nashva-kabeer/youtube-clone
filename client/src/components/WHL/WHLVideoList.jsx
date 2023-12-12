import React from 'react';
import ShowVideoList from '../ShowVideoList/ShowVideoList';


function WHLVideoList({page,videoList,CurrentUser}) {
   console.log(videoList?.data)
  return (
    <>
    {
      CurrentUser ?(<>
    {
        videoList?.data?.filter(q=>q?.viewer===CurrentUser).reverse().map(m=>{
            return(
                <>
                <ShowVideoList videoId={m?.videoId} key={m?._id}/>
                </>
            )
        })
    }
      </>):(<>
      <h2 style={{color:"white"}}>plz login to watch your {page}</h2>
      </>)
    }
    </>
  )
}

export default WHLVideoList