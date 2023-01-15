import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/home/Home'
import Posts from '../pages/posts/Posts'

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </>
  )
}

export default Routing
