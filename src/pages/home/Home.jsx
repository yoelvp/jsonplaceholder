import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Grid, Heading } from '../../ui/core'
import UserCard from './UserCard'

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/users`)
    setUsers(response.data)
  }

  return (
    <Container>
      <Heading as='h1' align='center' marginBottom='1rem'>
        Users
      </Heading>

      <Grid templateColumns='2'>
        {users.map(user => <UserCard key={user.id} user={user} />)}
      </Grid>
    </Container>
  )
}

export default Home
