import type { Post } from '@/schemes/post'

import { useEffect, useState } from 'react'

interface UsePostStore {
  posts: Post[]
  isLoading: boolean
  error: string,
  fetchNextPage: () => void
  handlePerPageNumber: (perPage: number) => void
}

export const usePosts = (): UsePostStore => {
  const [posts, setPosts] = useState<Post[]>([])
  const [pageNumber, setPageNumber] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setIsLoading(true)
    getPosts()
  }, [pageNumber, perPage])

  const getPosts = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${perPage}`)

      if (!response.ok) {
        throw new Error('An error occurred while trying to obtain the requested data')
      }
      const jsonResponse = await response.json()
      setIsLoading(false)
      setPosts(prevState => prevState.concat(jsonResponse))
    } catch (error: any) {
      console.error(error)
      setError(error.message)
      setIsLoading(false)
    }
  }

  const fetchNextPage = () => {
    setPageNumber(pageNumber + 1)
  }

  const handlePerPageNumber = (perPage: number) => {
    setPerPage(perPage)
  }


  return {
    posts,
    isLoading,
    error,
    fetchNextPage,
    handlePerPageNumber
  }
}
