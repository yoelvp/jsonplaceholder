import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dialog from '../../components/Dialog'
import { Card, Flex, Paragraph, Span } from '../../ui/core'

const PostComments = ({ userId, closeDialog }) => {
  const [comments, setComments] = useState([])

  console.log(userId)
  useEffect(() => {
    getCommentsOfPost(userId)
  }, [])

  const getCommentsOfPost = async (userId) => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/posts/${userId}/comments`)
    setComments(response.data)
  }

  return (
    <Dialog closeDialog={closeDialog}>
      <Flex direction='column' gap='1rem'>
        {comments.map(comment => {
          return (
            <Card
              key={comment.id}
              background='secondary'
            >
              <Flex
                direction='column'
                gap='0'
                align='start'
                marginBottom='8px'
              >
                <Paragraph
                  align='left'
                  fontWeight='bold'
                >
                  {comment.name}
                </Paragraph>
                <Span
                  fontSize='14px'
                  opacity='0.9'
                >
                  {comment.email}
                </Span>
              </Flex>
              <Paragraph align='left'>
                {comment.body}
              </Paragraph>
            </Card>
          )
        })}
      </Flex>
    </Dialog>
  )
}

export default PostComments
