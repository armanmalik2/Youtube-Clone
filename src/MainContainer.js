import React, { useEffect, useState } from 'react'
import SuggestionMenu from './SuggestionMenu';
import { Link2, User2Icon, UserCircle2 } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const YT_API_KEY = "AIzaSyC5iy6fosf1tLLhZq_PqmDm3EfYI2QoaBU";
                 // AIzaSyC5iy6fosf1tLLhZq_PqmDm3EfYI2QoaBU
const YT_API_KEY2 = "AIzaSyCTOwhH-mAdA6cDzbWh11OI5ymOXX5_MFo"
                 // AIzaSyCTOwhH-mAdA6cDzbWh11OI5ymOXX5_MFo
let query = "doraemon";
              // https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=python&type=video&regionCode=IN&key=YOUR_API_KEY
              //const preData = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${encodeURIComponent(query)}&type=video&key=${YT_API_KEY}`
              
              
const VideoCard = (props) => {
  return(
    <Link to={'/Watch/'+props?.id?.videoId}>
    <div className='video h-[410px] shadow-md m-4 mt-8 rounded-2xl flexcheck'>
      <div className=''>
        <img className='h-72 rounded-2xl' src={props?.snippet?.thumbnails?.high?.url} alt='video'/>
        <div className='ml-2 w-80 h-14 overflow-hidden font-semibold text-lg'>{props?.snippet?.title}</div>
        <div className='ml-1 mt-2 mb-2 font-medium text-gray-700 flex'><UserCircle2 className='text-white bg-black scale-125 rounded-full mr-2'/>{props?.snippet?.channelTitle}</div>
        <div className='ml-2'>{props?.snippet?.publishTime}</div>
      </div>
    </div>
    </Link>
  )
}



const MainContainer = () => {
  
  query = useSelector((state) => state.searching.search);

  const preData = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=49&q=${query}&type=video&key=${YT_API_KEY}`
  
  console.log(query)
  
  const [videoData, setVideoData] = useState(null);
  

   useEffect(() => {

    const Video = async () => {
      try {
        const res = await fetch(preData);
        const data = await res.json();
        await setVideoData(data);
      } catch (e) {
        console.log(e);
      }
    };

    Video();
  }, [query]);  // refetch when query changes

  
  


  return (
    
    <div className=''>
        <SuggestionMenu />
        
        <div className='flex flex-wrap'>
          {!videoData ? <div>Loading</div>:videoData?.items?.map(item => <VideoCard {...item} key={item?.id?.videoId} />)}
          </div>
          
        <div className=''>
          <div className='flex flex-wrap justify-center'>
            
          <div className='p-5 h-96 w-fit bg-black '>
              <div className='w-[400px] h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 test h-96 w-fit bg-black '>
              <div className='w-[400px] h-64 bg-yellow-50 '></div>
            </div>
            <div className='p-5 test h-96 w-fit bg-black '>
              <div className='w-[350px] h-64 bg-yellow-50 '></div>
            </div>
            <div className='p-5 test h-96 w-fit bg-black m-8'>
              <div className='w-[350px] h-64 bg-yellow-50 '></div>
            </div>
            <div className='p-5 test h-96 w-fit bg-black m-8'>
              <div className='w-[350px] h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-[350px] h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-[350px] h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-[350px] h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-[350px] h-64 bg-yellow-50 '></div>
            </div>
          <div className='p-5 h-96 w-fit bg-black m-8'>
              <div className='w-[350px] h-64 bg-yellow-50 '></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainContainer
