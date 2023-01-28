import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Button, Heading, Navbar, Menu, Flex } from '../ui/core'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menu = useRef(null)

  const handleMenu = (evt) => {
    evt.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = () => {
      if (menu.current) {
        menu.current.addEventListener('click', (evt) => {
          console.log('Menu')
          evt.stopPropagation()
        })
      }

      setIsMenuOpen(false)
    }

    document.addEventListener('click', handleClickOutside)

    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  return (
    <Navbar>
      <Heading as='h4' size='1.5rem' color='dark'>
        Json Placeholder
      </Heading>

      <Button id='iconMenu' onClick={(evt) => handleMenu(evt)}>
        <AiOutlineMenu />
      </Button>

      {isMenuOpen && (
        <Menu ref={menu}>
          <Flex direction='column'>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Posts</Link>
          </Flex>
        </Menu>
      )}
    </Navbar>
  )
}

export default Header
