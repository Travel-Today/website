import React from 'react'
import Posts from './Posts'
import BaseContainer from '../../components/BaseContainer'
import OptInFormTile from '../../components/OptInFormTile'
import PostSidebarTile from "./PostSidebarTile"
import CategoryTile from "./CategoryTile"

export default function Blog() {
  return (
    <BaseContainer paddingTop={24}>
        <div  className="grid grid-cols-1 lg:grid-cols-3">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 content-start lg:mx-4 lg:my-4">
            <PostSidebarTile/>
            <OptInFormTile/>
            <CategoryTile/>
          </div>
          <div className="lg:col-span-2 lg:order-first">
            <Posts/>
          </div>
        </div>
    </BaseContainer>
   
  )
}

