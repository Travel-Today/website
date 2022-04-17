import React, {useState} from 'react'
import SearchBar from '../../components/SearchBar'
import { Tab } from '@headlessui/react'
import {classNames} from "../../utilities"
import PostSidebarWeidget from "./PostSidebarWeidget"

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
    <div className="px-3 w-full">
        <SearchBar/>
        <div className="w-full px-2 py-6 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex mb-2  mt-4 space-x-1 rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full uppercase tranform duration-300 py-2 text-sm leading-5 font-medium rounded-lg shadow-lg border',
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
                // " h-[300px] overflow-hidden hover:overflow-auto no-scrollbar",

              )}
            >
              <PostSidebarWeidget posts={posts}/> 
            </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
    </div>
    </div>
  )
}


