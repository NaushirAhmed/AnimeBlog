// App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BlogPost from './pages/BlogPost'
import category from './pages/category'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/categories" element={<category />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App