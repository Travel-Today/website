import React, {useState} from 'react'
import { Tab } from '@headlessui/react'
import {classNames} from "../../utilities"
import { ImageList } from '../../assets'
export default function PostSidebar() {

    let [categories] = useState({
        Recent: [
          {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. nisl mollis faucibusa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
          },
          {
            id: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. nisl mollis faucibus",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
          {
            id: 3,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. nisl mollis faucibus",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
          {
            id: 4,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. nisl mollis faucibus",
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
          },
          {
            id: 6,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
        ],
        Popular: [
          {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
          },
          {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lectus sed nisl mollis faucibus',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
          },
        ],
        featured: [
          {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, l mollis faucibus',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
          },
          {
            id: 2,
            title: "Lorem ipsum dolor sit amet, ectetur lectus sed nisl mollis faucibus",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
          },
        ],
      })
    
  return (
    <div className="w-full px-2 mt-8 lg:mt-0 sm:px-0 ">
        <Tab.Group>
          <Tab.List className="flex mb-4 space-x-1 rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full  uppercase tranform duration-300 py-2 text-sm leading-5 font-medium rounded-lg shadow-lg border',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 scale-90',
                    selected
                      ? 'bg-blue-600 text-white shadow scale-100'
                      : 'text-blue-600 hover:bg-blue-600/[0.5] hover:text-white'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white pt-4',
                "max-h-[400px] overflow-hidden hover:overflow-auto no-scrollbar ",
              )}
            >
              <PostSidebarWeidget posts={posts}/> 
            </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
    </div>
  )
}


const PostSidebarWeidget = ({posts}) =>(
    <ul >
        {posts.map((post) => (
            <li
            key={post.id}
            className="w-[95%] h-[80px] grid grid-cols-3 gap-x-2 mb-6 hover:bg-gray-100 border-b-2 hover:scale-105 transform duration-300"
            >
                <div className="h-full w-full overflow-hidden">
                    <img className="h-full w-full object-cover hover:scale-110 transform duration-300" src={ImageList[Math.floor(Math.random()*3)]} alt=""/>
                </div>
                <div className=" col-span-2">
                    <h3 className="relative h-[45px] text-sm font-medium leading-5 overflow-hidden">
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




