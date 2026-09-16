import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BlogPost from './pages/BlogPost'
import Category from './pages/Category'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </>
  )
}

export default App