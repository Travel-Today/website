import React from 'react'
import PostCard from "../../../components/PostCard"

export default function TopPosts() {
  return (
      <div>
          <h2 className="text-2xl font-semibold py-1 mb-4 uppercase border-b-2 mt-12">Top Places</h2>
        <div className="grid go\rid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
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
