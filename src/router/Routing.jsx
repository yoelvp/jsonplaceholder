import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Wrapper } from '../ui/core'

import Header from '../components/Header'

import Home from '../pages/home/Home'
import UserAlbums from '../pages/home/UserAlbums'
import Posts from '../pages/posts/Posts'

const Routing = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/album/:id' element={<UserAlbums />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </Wrapper>
  )
}

export default Routing
