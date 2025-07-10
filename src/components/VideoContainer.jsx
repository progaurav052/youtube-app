import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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
        return(<Link to={"/watch?v="+video.id} key ={video.id}><VideoCard videoDetails={video}/></Link>);
      })}
    </div>
  )
}

export default VideoContainer