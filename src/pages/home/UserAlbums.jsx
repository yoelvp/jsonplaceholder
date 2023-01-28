import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, Flex } from '../../ui/core'
import AlbumCard from './components/AlbumCard'

const UserAlbums = () => {
  const [albums, setAlbums] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getUserAlbums(id)
  }, [])

  const getUserAlbums = async (userId) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/users/${userId}/albums`)
    setAlbums(response.data)
  }

  // https://jsonplaceholder.typicode.com/photos?albumId=1

  console.log({ albums })

  return (
    <Container paddingX='2rem'>
      <Flex
        direction='column'
        gap='1rem'
        marginBottom='2rem'
      >
        {albums.map(album => <AlbumCard key={album.id} album={album} />)}
      </Flex>
    </Container>
  )
}

export default UserAlbums
