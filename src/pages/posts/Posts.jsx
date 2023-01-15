import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Heading } from '../../ui/core'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/posts`)
    setPosts(response.data)
  }

  return (
    <>
      <Container>
        <Heading as='h1' color='primary' marginBottom='1rem'>
          The best posts
        </Heading>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
            />
          )
        })}
      </Container>
    </>
  )
}

export default Posts
