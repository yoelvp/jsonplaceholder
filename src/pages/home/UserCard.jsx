import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Flex, Paragraph, Span } from '../../ui/core'

const UserCard = ({ user }) => {
  return (
    <Card
      as={Link}
      to={`/user/album/${user.id}`}
    >
      <Flex direction='column'>
        <Paragraph color='dark'>
          {user.name}
        </Paragraph>
        <Span color='gray' fontSize='1rem'>
          {user.username}
        </Span>
      </Flex>
    </Card>
  )
}

export default UserCard
