import React from 'react'
import Posts from './Posts'
import BaseContainer from '../../components/BaseContainer'
import PostSidebar from "./PostSidebar"

export default function Blog() {
  return (
    <BaseContainer paddingTop={24}>
        <div  className="grid grid-cols-1 lg:grid-cols-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 content-start lg:mx-4 lg:my-4">
            <PostSidebar/>
            <div className="h-36 bg-slate-600"><h1>recent post</h1></div>
          </div>
          <div className="lg:col-span-2 lg:order-first">
            <Posts/>
          </div>
        </div>
    </BaseContainer>
   
  )
}

