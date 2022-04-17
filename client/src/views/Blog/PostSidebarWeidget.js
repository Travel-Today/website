import React from 'react'
import {ImageList} from "../../assets"

export default function PostSidebarWeidget({posts}) {
  return (
    <ul >
        {posts.map((post) => (
            <li
            key={post.id}
            className="w-full h-[100px] grid grid-cols-3 gap-x-2 mb-6 hover:bg-gray-100 overflow-hidden border-b-2 hover:scale-105 transform duration-300"
            >
                <div className="h-full w-full overflow-hidden">
                    <img className="h-full w-full object-cover hover:scale-110 transform duration-300" src={ImageList[Math.floor(Math.random()*3)]} alt=""/>
                </div>
                <div className=" col-span-2">
                    <h3 className="relative h-[65px] text-sm font-medium leading-5 overflow-hidden">
                        {post.title}
                    </h3>
                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                    </ul>
                </div>
            </li>
        ))}
    </ul>
  )
}
