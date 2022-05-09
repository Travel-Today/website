import React from 'react'
import PopularPosts from './PopularPosts'
import BaseContainer from '../../components/BaseContainer'
import SearchBar from '../../components/SearchBar'
import OptInFormTile from '../../components/OptInFormTile'
import RecentPostSidebar from "./RecentPostSidebar"
import CategoryTile from "./CategoryTile"
import ImagePost from './ImagePost'

export default function Blog() {
  return (
    <BaseContainer paddingTop={24}>
        {/* <div className="mb-4 pb-4 border-b-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center lg:gap-x-12">
          <div className="w-full flex justify-end my-4 md:mb-0">
            <SearchBar/>
          </div>
          <div className="lg:col-span-2">

          </div>
          <h2 className="text-2xl  font-bold py-1 uppercase md:order-first  mt-4">Popular Articlas</h2>
        </div> */}
        <div className="w-full min-h-[600px] grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="h-full">
            <ImagePost/>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="h-full "><ImagePost/></div>
              <div className="h-full"><ImagePost/></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-full "><ImagePost/></div>
              <div className="h-full"><ImagePost/></div>
            </div>
          </div>
        </div>

        <div  className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 my-14">
          <div className="lg:col-span-2 ">
            <PopularPosts/>
          </div> 
          <div className="grid grid-cols-1 gap-x-4 content-start lg:mx-4 lg:my-4">
            <RecentPostSidebar/>
            <CategoryTile/>
            <OptInFormTile/>
          </div>
        </div>
    </BaseContainer>
   
  )
}

