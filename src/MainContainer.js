import React, { useEffect, useState } from 'react'
import SuggestionMenu from './SuggestionMenu';
import { User2Icon, UserCircle2 } from 'lucide-react';
import { useSelector } from 'react-redux';

const YT_API_KEY = "AIzaSyC5iy6fosf1tLLhZq_PqmDm3EfYI2QoaBU";
                 // AIzaSyC5iy6fosf1tLLhZq_PqmDm3EfYI2QoaBU
let query = "doraemon";
              // https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=python&type=video&regionCode=IN&key=YOUR_API_KEY
              //const preData = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${encodeURIComponent(query)}&type=video&key=${YT_API_KEY}`
              
              
              const VideoCard = (props) => {
                return(
    <div className='h-[410px] shadow-md m-4 mt-8 rounded-2xl'>
      <div className=''>
        <img className='h-72 rounded-2xl' src={props?.snippet?.thumbnails?.high?.url} alt='video'/>
        <div className='w-80 h-14 overflow-hidden font-semibold text-lg'>{props?.snippet?.title}</div>
        <div className='ml-1 font-medium text-gray-700 flex'><UserCircle2 className='text-white bg-black rounded-full mr-2'/>{props?.snippet?.channelTitle}</div>
        <div className='mr-2'>{props?.snippet?.publishTime}</div>
      </div>
    </div>
  )
}



const MainContainer = () => {
  const preData = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=49&q=${query}&type=video&key=${YT_API_KEY}`
  
  const [queriData, setQueriData] = useState()
  query = useSelector((state) => state.searching.search);
  useEffect(() => {
  setQueriData(query);
}, [query]);
  console.log(query)

  const [videoData, setVideoData] = useState(null);

  const Video = () => {
   return (
    fetch(preData)
    .then(res => res.json())
    .then(data => setVideoData(data))
   );
  };

  useEffect(() => {
    Video();
  }, [query]);
  
  


  return (
    !videoData ? <div>Loading</div>:
    <div className=''>
        <SuggestionMenu />
        
        <div className='flex flex-wrap'>
          {videoData?.items.map(item => <VideoCard {...item} key={item?.id?.videoId} />)}
          </div>
          
        <div className=''>
          <div className='flex flex-wrap'>
            <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-80 h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-80 h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-80 h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-80 h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-80 h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-80 h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-80 h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-80 h-64 bg-yellow-50 '></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainContainer
