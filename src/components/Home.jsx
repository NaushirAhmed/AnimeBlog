// Home.jsx
import React from 'react'
import Hero from './Hero'
import LatestPosts from './LatestPosts'

const Home = () => {
  return (
    <div className="bg-[#0F0F1A] min-h-screen">
      <Hero />
      <LatestPosts />
    </div>
  )
}

export default Home