import type { FC } from 'react'
import type { Post } from '@/schemes/post'

import { useUserById } from '@/hooks/useUserById'
import { Box, Card, Flex, Heading, ImageProfile, Paragraph } from '@/ui'

interface Props {
  post: Post
}

const PostItem: FC<Props> = ({ post }) => {
  const { user, isLoading } = useUserById({ userId: post.userId })

  return (
    <Card key={post.id} as='article' $rounded='medium' $background='secondary'>
      <Heading as='h4' $color='white'>
        {post.title}
      </Heading>
      <Box as='section'>
        <Flex $gap='8'>
          <ImageProfile $fontSize='12'>
            {user?.name.charAt(0)}
          </ImageProfile>
          <Paragraph $fontSize='12' $color='white'>
            {isLoading && 'Loading...'}
            {!isLoading && user?.name} {`<${user?.email}>`}
          </Paragraph>
        </Flex>
        <Paragraph>
          {post.body}
        </Paragraph>
      </Box>
    </Card>
  )
}

export default PostItem
