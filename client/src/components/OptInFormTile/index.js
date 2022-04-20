import React from 'react'

export default function OptInForm() {
  return (
    <div className="mb-8 bg-gray-200 flex flex-col justify-center items-center rounded shadow">
        <h1 className="pt-6 pb-4 text-2xl ">News Letter</h1>
        <p className="px-6 pb-4 text-center">Your email address will not be this published. Required fields are News Today.</p>
            <input
            type="email"
            placeholder="sample@abc.com"
            className="w-[85%] py-2 px-2 placeholder:text-center rounded appearance-none border border-gray-400  text-gray-700 focus:outline-none "
            />
            <button
            className="mt-4 appearance-none rounded bg-green-500 px-4 py-2 text-white uppercase hover:outline-none hover:ring-2 ring-offset-2 ring-green-500 ring-opacity-60 trnaform duration-300"
            >subscribe</button>
        <p className="pt-4 pb-8">lorem ipsum dolor sit amet, consect</p>
    </div>
  )
}
