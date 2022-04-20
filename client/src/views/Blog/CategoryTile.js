import React from 'react'
import {Link} from 'react-router-dom'
import {ChevronRightIcon} from '@heroicons/react/outline'

export default function CategoryTile() {
  return (
    <div className="px-2 py-4 mt-4">
        <h2 className="text-2xl pb-2 border-b uppercase mb-2">Categories</h2>
        <ul className="h-[350px] overflow-hidden hover:overflow-auto no-scrollbar">
            <li><CategoryWeigdet title="Category 1" slug="category-1"/></li>
            <li><CategoryWeigdet title="Category 2" slug="category-2"/></li>
            <li><CategoryWeigdet title="Category 3" slug="category-3"/></li>      
            <li><CategoryWeigdet title="Category 4" slug="category-4"/></li>      
            <li><CategoryWeigdet title="Category 5" slug="category-5"/></li>      
            <li><CategoryWeigdet title="Category 6" slug="category-6"/></li>      
      
        </ul>
    </div>
  )
}


const CategoryWeigdet = ({title, slug}) => (

    <Link to={`/blog/${slug}`} className="px-2 py-2 my-2 border-2 shadow flex justify-between items-center hover:translate-x-1 duration-200 origin-center hover:origin-top">
        <h4 className="">{title}</h4>
        <ChevronRightIcon className="w-6 text-gray-600"/>
    </Link> 
)
