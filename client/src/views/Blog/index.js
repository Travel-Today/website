import React from 'react'
import Posts from './Posts'
import BaseContainer from '../../components/BaseContainer'
import SearchBar from '../../components/SearchBar'
import OptInFormTile from '../../components/OptInFormTile'
import PostSidebarTile from "./PostSidebarTile"
import CategoryTile from "./CategoryTile"

export default function Blog() {
  return (
    <BaseContainer paddingTop={24}>
        <div className="mb-4 pb-4 border-b-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center ">
          <div className="w-full  flex justify-end my-4 md:mb-0">
            <SearchBar/>
          </div>
          <h2 className=" text-2xl lg:col-span-2 font-semibold py-1 uppercase md:order-first">Trending Posts</h2>
        </div>
        <div  className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 ">
            <Posts/>
          </div> 
          <div className="grid grid-cols-1 gap-4 content-start lg:mx-4 lg:my-4">
            <PostSidebarTile/>
            <CategoryTile/>
            <OptInFormTile/>
          </div>
        </div>
        {/* <div>
          <Posts/>
        </div> */}
    </BaseContainer>
   
  )
}

