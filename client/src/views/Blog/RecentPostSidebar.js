import React from 'react'
import {ImageList} from '../../assets'


const recentposts = [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit amet, consectetur",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 4,
        title: "Lorem ipsum dolor sit amet,",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 5,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      }
    ]
    


export default function RecentPostSidebar() {
  return (
    <div className="pt-4 bg-gray-100 rounded-2xl">
        <div className="flex justify-between pb-2 px-4">
            <h4 className="font-semibold text-xl">Recent Posts</h4>
            <a className="px-4 py-2 text-blue-800 font-semibold text-sm" href="/">View all</a>
        </div>
        <div className="">
            <ul>
                {recentposts.map((post)=>(
                   <RecentPostWeiget post={post}/> 
                ))}
            </ul>
        </div>
    </div>
  )
}


const RecentPostWeiget = ({post}) =>(
  <li key={post.id}
    className="px-4 grid grid-cols-3 items-center h-[120px] border-t-2 w-full hover:bg-gray-200 "
    >
        <div className="col-span-2 ">
          <div className="flex items-center pb-2">
          <img
            className="h-6 w-6 rounded-full mr-4"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1649959052~exp=1649959652~hmac=1032e6218e756f65ccd5a4fffa65997ff8d68f38afb1d329217192dd2db90635&w=740"
            alt=""
          />
            <h4 className="pr-2 text-black text-sm">Janith pm</h4>
            <p className="pr-2">&middot;</p>
            <p className="text-slate-600 text-sm">May 01, 2022</p>                       
          </div>
            <h3 className="text-normal font-bold hover:text-blue-800">{post.title}</h3>
        </div>
        <div className="flex justify-end">
        <div className="w-[80px] h-[80px] overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover hover:scale-110 transform duration-300" src={ImageList[Math.floor(Math.random()*3)]} alt={post.title}/>
        </div>
        </div>
    </li>
  )