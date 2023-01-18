import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/home/Home'
import Posts from '../pages/posts/Posts'
import { Wrapper } from '../ui/core'

const Routing = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </Wrapper>
  )
}

export default Routing
