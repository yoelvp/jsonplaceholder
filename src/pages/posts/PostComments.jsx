import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dialog from '../../components/Dialog'
import { Card, Flex, Paragraph } from '../../ui/core'

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

  console.log(comments)

  return (
    <Dialog closeDialog={closeDialog}>
      <Flex direction='column'>
        {comments.map(comment => {
          return (
            <Card
              key={comment.id}
              background='secondary'
            >
              <Paragraph key={comment.id}>
                {comment.name}
                {comment.postId}
              </Paragraph>
            </Card>
          )
        })}
      </Flex>
    </Dialog>
  )
}

export default PostComments
