import React from 'react'
import {ImageList} from '../../assets'
import { HeartIcon, ChatAltIcon, BookmarkIcon } from '@heroicons/react/outline'

export default function PostWeiget() {
  return (
    <div className="h-[500px] md:h-[250px] w-full border rounded-2xl shadow hover:shadow-xl transform duration-300">
        <div className="grid md:grid-cols-3 h-full w-full">
            <div className="md:order-last w-[100%]">
                <div className="h-full w-full px-4 pt-4 md:px-0 md:pt-0 overflow-hidden flex items-center justify-center">
                    <img src={ImageList[Math.floor(Math.random() * 3)]} alt="" className=" w-full h-[200px] md:w-[200px] rounded-3xl object-cover hover:scale-105 transform duration-300"/>
                </div>
            </div>
            <div className="md:col-span-2 mx-4 my-4">
                <div>
                    <a className="px-4 py-2 text-red-800 font-semibold rounded-xl text-xs bg-red-200" href="/">Category Name</a>
                    <h2 className="text-2xl pr-8 mt-4 mb-2 font-bold">Exercitation minim duis nulla sint ex consectetur ullamco.</h2>
                    <p className="text-gray-600 my-2">Lorem ipsum dolor sit amet, consectet</p>
                    <div className="flex items-center my-2">
                        <img
                            className="h-6 w-6 rounded-full mr-6"
                            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1649959052~exp=1649959652~hmac=1032e6218e756f65ccd5a4fffa65997ff8d68f38afb1d329217192dd2db90635&w=740"
                            alt=""
                        />
                        <h4 className="pr-2 text-black text-sm">Janith pm</h4>
                        <p className="pr-2">&middot;</p>
                        <p className="text-slate-600 text-sm">May 01, 2022</p>                       
                    </div>
                </div>
          
                <div className="grid grid-cols-2 mt-[30px]">
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
    </div>
  )
}
