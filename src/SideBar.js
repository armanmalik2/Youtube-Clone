import { User } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  let isOpen = useSelector((state) => state.sideBar.isOpen);
  return (
    <div>
      <div>
        <div className={`${isOpen?"":"hidden"} w-52 text-lg font-semibold sidebar`}>
            <ul>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' ><Link to={'/Watch'}> Home</Link></li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Shorts</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Subscription</li>
                <hr />
                <li className='w-48 h-6 pl-10 content-center rounded-lg   font-bold' >You </li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >History</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Playlist</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Your videos</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Watch later</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >liked videos</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Downloads</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Your clips</li>
                <hr />
                <li className='w-48 h-6 pl-10 content-center rounded-lg  font-bold' >Subscription </li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Mr Beast</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >MrBean</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >The Lallantop</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Dhruv Rathee</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Take a break</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >Sony</li>
                <li className='w-48 h-10 pl-16 content-center rounded-lg  hover:bg-gray-200' >NASA</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default SideBar
