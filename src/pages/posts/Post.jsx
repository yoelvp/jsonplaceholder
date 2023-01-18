import React from 'react'
import { useDialog } from '../../hooks/useDialog'
import { Button, Card, CardContent, CardFooter, Paragraph } from '../../ui/core'
import PostComments from './PostComments'

const Post = ({ post }) => {
  const { isOpenDialog, openDialog, closeDialog } = useDialog()

  return (
    <>
      <Card background='primary'>
        <CardContent direction='column' gap='1rem'>
          <Paragraph color='dark' size='1.025rem' fontWeight='bold' align='left'>
            {post.title}
          </Paragraph>
          <Paragraph color='dark' size='1rem' align='left'>
            {post.body}
          </Paragraph>
        </CardContent>
        <CardFooter>
          <Button size='1rem' onClick={openDialog}>
            Comments
          </Button>
        </CardFooter>
      </Card>
      {isOpenDialog && <PostComments userId={post.userId} closeDialog={closeDialog} />}
    </>
  )
}

export default Post
