import React from 'react'
import Hero from './Hero'
import BaseContainer from '../../components/BaseContainer'
import TopPosts from './TopPosts'
import TopPlaces from './TopPlaces'
export default function Home() {

  
  return (
   
      <>
        <Hero/>
        <BaseContainer paddingTop={10}>
          <TopPosts/>
          <TopPlaces/>
        </BaseContainer>
    </>
   
    
  )
}
