import React from 'react'
import PostCard from "../../components/PostCard"

export default function Posts() {
  return (
    <div>
          <h2 className="text-2xl font-semibold py-1 mb-4 uppercase border-b-2 mt-8">Trending Posts</h2>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-4">
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
      </div>
  )
}
