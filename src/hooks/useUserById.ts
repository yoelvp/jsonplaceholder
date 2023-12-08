import { User } from '@/schemes/user'
import { useEffect, useState } from 'react'

interface UseUserByIdParams {
  userId: number
}

interface UseUserByIdStore {
  user: User | null
  isLoading: boolean
  error: string
}

export const useUserById = ({ userId }: UseUserByIdParams): UseUserByIdStore => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    getUser(userId)
  }, [userId])

  const getUser = async (userId: number) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

      if (!response.ok) {
        throw new Error('An error occurred while trying to obtain the requested data')
      }
      const jsonResponse = await response.json()
      setUser(jsonResponse)
      setIsLoading(false)
    } catch (error: any) {
      console.error(error)
      setError(error.message)
      setIsLoading(false)
    }
  }

  return {
    user,
    isLoading,
    error
  }
}
