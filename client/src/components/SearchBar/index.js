import React, {useState} from 'react'
import {SearchIcon} from '@heroicons/react/outline'

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    const handleClick = () =>{
        console.log("serach icon ", searchInput)
    }

    const onKey = (e) =>{
        if(e.key === "Enter"){
            console.log("enter key ",searchInput)
        }
    }
  return (
      
        <div className="pb-4 px-4 w-full flex border-b-2">
            <input
            className="w-full border-2 rounded-full appearance-none shadow py-3 px-4 mr-4 text-gray-700 focus:outline-none"
            placeholder="Ask enything?"
            onChange={handleChange}
            value={searchInput}
            />
            <button onClick={handleClick} onKeyDown={onKey} className="appearance-none rounded-full bg-green-500 px-5 text-white">
                <SearchIcon className="w-6"/>
            </button>
        </div>
  )
}
