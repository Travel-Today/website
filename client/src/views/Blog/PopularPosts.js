import React from 'react'
import PostCard from "../../components/PostCard"

export default function PopularPosts() {
  return (
    <div className="">
        <div className="mb-8">
        <h2 className="text-4xl  font-semibold py-1 md:order-first  mt-4">Popular Articles</h2>
        <p className="text-slate-600">Lorem ipsum dolor sit amet, sed do eiusmod</p>
        </div>
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2 ">
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
