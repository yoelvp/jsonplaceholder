import React from 'react'
import { Link } from 'react-router-dom'
import { Heading, Navbar } from '../ui/core'

const Header = () => {
  return (
    <Navbar>
      <Heading as='h4' size='1.5rem' color='dark'>
        Json Placeholder
      </Heading>

      <ul>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
      </ul>
    </Navbar>
  )
}

export default Header
