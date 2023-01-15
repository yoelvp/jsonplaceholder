import React from 'react'
import { useDialog } from '../../hooks/useDialog'
import { Button, Card, CardFooter, Paragraph } from '../../ui/core'
import PostComments from './PostComments'

const Post = ({ post }) => {
  const { isOpenDialog, openDialog, closeDialog } = useDialog()

  return (
    <>
      <Card
        background='primary'
        marginBottom='1rem'
      >
        <Paragraph
          color='dark'
          size='1.025rem'
          fontWeight='bold'
        >
          {post.title}
        </Paragraph>
        <Paragraph color='dark' size='1rem'>
          {post.body}
        </Paragraph>
        <CardFooter>
          <Button
            size='1rem'
            onClick={openDialog}
          >
            Comments
          </Button>
        </CardFooter>
      </Card>
      {isOpenDialog && (
        <PostComments
          userId={post.userId}
          closeDialog={closeDialog}
        />
      )}
    </>
  )
}

export default Post
