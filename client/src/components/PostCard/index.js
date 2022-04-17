import React from 'react'
import {ImageList} from '../../assets'

export default function PostCard() {
  return (
    <div className="h-[400px] rounded-lg shadow-lgs border-2 my-4">
        <img src={ImageList[Math.floor(Math.random() * 3)]} alt="" className="h-[50%] w-full object-cover"/>
        <div className=" py-4 px-6">
        <h1 className="text-xl mb-4 font-semibold">TRAVEL TODAY Website</h1>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt non ex et efficitur.</p>
        </div>
    </div>
  )
}
