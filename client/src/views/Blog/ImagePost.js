import React from 'react'
import {ImageList} from '../../assets'
export default function ImagePost() {
  return (
    <div className="relative w-full h-full">
   <div className="w-full h-full">
    <img src={ImageList[Math.floor(Math.random() * 3)]} alt="" className="h-full w-full object-cover mb-4 rounded-3xl hover:scale-105 transform duration-300"/>
   </div>
   <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center lg:justify-start lg:items-end text-white rounded-3xl hover:bg-black/[0.4] tranform-ease-in-out duration-300">
       <div className=" p-2 lg:p-8 w-full">
        <p className="text-gray-300 hidden md:block md:font-xs">Category &middot; Janithpm</p> 
        <h4 className="font-[4px] md:text-xl">Deserunt ad in ipsum ullamco Deserunt ad.</h4>
        <p className="text-gray-300 font-[4px] md:font-xs">May 01, 2022</p>
        <div className="text-gray-200 hidden md:block md:font-xs">
            <p className="mr-4">125 Likes</p> 
            <p>35 comments</p> 
        </div>
       </div>
      {/* <a href="/" className="px-4 py-2 text-white font-semibold text-sm shadow border-2 border-white rounded-lg hover:bg-white hover:text-black transform-ease-in-out duration-300">Read More</a> */}
    </div>
  </div>
  )
}
