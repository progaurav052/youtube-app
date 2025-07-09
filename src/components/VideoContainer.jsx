import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  
  const [showVideos,setShowVideos]=useState([]);// to trigger reconcilation algo
  useEffect(()=>{
     getVideos();
  },[])//we want it to be called once when the component renders
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setShowVideos(json.items);


  }
  
  return showVideos.length===0?<h1>shimmer UI</h1>: (
    <div className='flex flex-wrap'>
      { showVideos.map((video)=>{
        return(<VideoCard key ={video.id}videoDetails={video}/>);
      })}
    </div>
  )
}

export default VideoContainer