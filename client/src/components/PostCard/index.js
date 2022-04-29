import React from 'react'
import {ImageList} from '../../assets'
import { HeartIcon, ChatAltIcon, BookmarkIcon } from '@heroicons/react/outline'
import "./postCard.scss"
export default function PostCard() {
  return (
    <div className="rounded-2xl border-2 my-4 overflow-hidden hover:shadow-xl transform duration-300 bg-white bg-opacity-90 bg-clip-padding blur-backdrop-filter">
      
      <div className="absolute top-2 left-2 rounded-lg flex justify-center items-center z-20 bg-white bg-opacity-90 bg-clip-padding blur-backdrop-filter shadow-lg">
        <p className="px-4 py-2 text-blue-800 font-semibold text-xs shadow">Category Name</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-[250px] rounded-xl flex justify-center items-center z-10 bg-black/[0.3] shadow-lg opacity-0 hover:opacity-100 transform-ease-in-out duration-300 tranform -translate-y-2 hover:translate-y-0">
        <a href="/" className="px-4 py-2 text-white font-semibold text-sm shadow border-2 border-white rounded-lg hover:bg-white hover:text-black transform-ease-in-out duration-300">Read More</a>
      </div>

     
        <div className="h-[250px] w-full overflow-hidden">
          <img src={ImageList[Math.floor(Math.random() * 3)]} alt="" className="h-full w-full object-cover mb-4 hover:scale-105 transform duration-300"/>
        </div>
        <div className=" py-4 px-6">

        <div className="flex items-center pb-2 border-b mb-2">
          <img
            className="h-6 w-6 rounded-full mr-6"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1649959052~exp=1649959652~hmac=1032e6218e756f65ccd5a4fffa65997ff8d68f38afb1d329217192dd2db90635&w=740"
            alt=""
          />
            <h4 className="pr-2 text-black text-sm">Janith pm</h4>
            <p className="pr-2">&middot;</p>
            <p className="text-slate-600 text-sm">May 01, 2022</p>                       
          </div>

          <h1 className="text-xl mb-4 font-semibold">Lorem ipsum dolor sit amet, consectet</h1>
          
          <div className="w-full grid grid-cols-2">
            <div className="flex items-center">
              <HeartIcon className="h-4 w-4 mr-2" aria-hidden="true" />
              <p className="mr-4 text-sm">1.12K</p>
              <ChatAltIcon className="h-4 w-4 mr-2" aria-hidden="true" />
              <p className="mr-4 text-sm">205</p>
            </div>
            <div className="w-full flex justify-end items-center">
              <BookmarkIcon className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>

        </div>
    </div>
  )
}
