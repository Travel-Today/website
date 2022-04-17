import React, {useState} from 'react'
import SearchBar from '../../components/SearchBar'
import { Tab } from '@headlessui/react'
import {classNames} from "../../utilities"

export default function PostSidebar() {

    let [categories] = useState({
        Recent: [
          {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lectus sed nisl mollis faucibus',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
          },
          {
            id: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lectus sed nisl mollis faucibus",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
          {
            id: 3,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lectus sed nisl mollis faucibus",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
          {
            id: 4,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lectus sed nisl mollis faucibus",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
          {
            id: 5,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lectus sed nisl mollis faucibus",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
          {
            id: 6,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lectus sed nisl mollis faucibus",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
          },
        ],
        Popular: [
          {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lectus sed nisl mollis faucibus',
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
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lectus sed nisl mollis faucibus',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
          },
          {
            id: 2,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur lectus sed nisl mollis faucibus",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
          },
        ],
      })
    
  return (
    <div className="px-2 w-full">
        <SearchBar/>
        <div className="w-full px-2 py-6 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-200 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full uppercase tranform duration-500 py-2.5 text-sm leading-5 font-medium rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-blue-600 hover:bg-blue-600/[0.5] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 border-2 rounded-xl">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3 border-b-2',
                // " h-[300px] overflow-hidden hover:overflow-auto no-scrollbar",
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100 w-full"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </div>
  )
}
