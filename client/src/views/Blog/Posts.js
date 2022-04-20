import React from 'react'
import PostCard from "../../components/PostCard"

export default function Posts() {
  return (
    <>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-x-4">
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
      </>
  )
}
