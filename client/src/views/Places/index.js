import React from 'react'
import Navbar from "../../components/Navbar";

export default function Places({isLogged, setLoggedIn}) {
  return (
    <>
        <Navbar isLogged={isLogged} setLoggedIn={setLoggedIn}/>
        <div className="h-screen flex items-center justify-center"><h1>Places</h1></div>
    {/* <div className="mx-auto lg:max-w-[80%] md:max-w-[85%] max-w-[90%] pt-20">
     </div> */}
    </>
  )
}
