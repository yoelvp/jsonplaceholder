import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ButtonLink, Container, Flex, Heading } from '../../ui/core'
import Post from './Post'
import { GrNext, GrPrevious } from 'react-icons/gr'

const LIMIT_API = 10

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getPosts()
    window.scrollTo(0, 0)
  }, [page])

  const getPosts = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/posts?_page=${page}&_limit=${LIMIT_API}`)
    setPosts(response.data)
  }

  const handlePrevPage = () => {
    setPage(page - 1)
    window.scrollTo(0, 0)
  }

  const handleNextPage = () => {
    setPage(page + 1)
    window.scrollTo(0, 0)
  }

  console.log(page)

  return (
    <>
      <Container paddingX='2rem'>
        <Heading as='h1' color='primary' marginBottom='1rem'>
          The best posts
        </Heading>
        <Flex direction='column' gap='1rem'>
          {posts.map(post => <Post key={post.id} post={post} postId={post.id} />)}
        </Flex>
        <Flex justify='space-between' padding='1rem'>
          <ButtonLink to={`/posts?page=${page - 1}`} onClick={handlePrevPage}>
            <GrPrevious />
          </ButtonLink>
          <ButtonLink to={`/posts?page=${page + 1}`} onClick={handleNextPage}>
            <GrNext />
          </ButtonLink>
        </Flex>
      </Container>
    </>
  )
}

export default Posts
