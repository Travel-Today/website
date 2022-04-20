import React, {useState} from 'react'
import {SearchIcon} from '@heroicons/react/outline'

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    const handleClick = () =>{
        alert( searchInput)
    }

    const onKey = (e) =>{
        if(e.key === "Enter"){
            alert("enter key ",searchInput)
        }
    }
  return (
      
        <div className="pb-4 w-full flex border-b">
            <input
            className="w-full border-2 rounded-tl-lg rounded-bl-lg appearance-none shadow py-2 px-6 text-gray-700 focus:outline-none"
            placeholder="Ask enything?"
            onChange={handleChange}
            value={searchInput}
            />
            <button onClick={handleClick} onKeyDown={onKey} className=" appearance-none rounded-tr-lg rounded-br-lg bg-green-500 px-4 py-2 text-white hover:outline-none hover:ring-2 ring-offset-2 ring-green-500 ring-opacity-60 trnaform duration-300">
                <SearchIcon className="w-4 hover:scale-125 transform duration-300 "/>
            </button>
        </div>
  )
}
