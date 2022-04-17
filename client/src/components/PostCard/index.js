import React from 'react'
import {ImageList} from '../../assets'

export default function PostCard() {
  return (
    <div className="h-[400px] rounded-lg shadow-lgs border-2 my-4 overflow-hidden">
        <div className="h-[200px] w-full overflow-hidden">
          <img src={ImageList[Math.floor(Math.random() * 3)]} alt="" className="h-full w-full object-cover mb-4 hover:scale-105 transform duration-300"/>
        </div>
        <div className=" py-4 px-6">
        <h1 className="text-xl mb-4 font-semibold">TRAVEL TODAY Website</h1>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt non ex et efficitur.</p>
        </div>
    </div>
  )
}
