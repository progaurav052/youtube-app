import React from 'react'

const VideoCard = (props) => {

  const {snippet,statistics}=props.videoDetails;
  const {channelTitle,description,title}=snippet;
  const {viewCount,likeCount}=statistics;
  const {thumbnails}=snippet;

  return (
    <div className='p-2 m-2 w-64 shadow-lg rounded-lg'>
        <img src={thumbnails.medium.url} alt="video-thumbail" className='rounded-sm'/>
        <ul>
            
            <li className='font-bold py-2'>{title}</li>
            <li className=''>{channelTitle}</li>
            <li>{viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard