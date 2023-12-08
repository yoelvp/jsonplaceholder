import type { User } from '@/schemes/user'

import { useEffect, useState } from 'react'

interface UseUserStore {
  users: User[]
  isLoading: boolean
  error: string
}

export const useUsers = (): UseUserStore => {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!response.ok) {
        throw new Error('An error occurred while trying to obtain the requested data')
      }
      const jsonResponse = await response.json()
      setUsers(jsonResponse)
      setIsLoading(false)
    } catch (error: any) {
      console.error(error)
      setError(error.message)
      setIsLoading(false)
    }
  }

  return {
    users,
    isLoading,
    error
  }
}
