import React from 'react'
import Navbar from "../../components/Navbar";
import Hero from './Hero'
import BaseContainer from '../../components/BaseContainer'
import TopPosts from './TopPosts'
import TopPlaces from './TopPlaces'

export default function Home({isLogged, setLoggedIn}) {
  return (
    <>
        <Navbar isLogged={isLogged} setLoggedIn={setLoggedIn}/>
        <Hero/>
        <BaseContainer paddingTop={10}>
          <TopPosts/>
          <TopPlaces/>
        </BaseContainer>
    </>
  )
}
