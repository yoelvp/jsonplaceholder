import type { FC } from 'react';

import { usePosts } from '@/hooks/usePosts';
import PostItem from './components/PostItem';
import { Box, Button, Container, Grid, Heading, PhoneCase } from '@/ui';

const Homepage: FC = () => {
  const { posts, isLoading, error, fetchNextPage } = usePosts()

  return (
    <Container>
      <PhoneCase>
        <Heading $fontSize='28' $color='secondary'>
          {'{JSON}'} Placeholder
        </Heading>

        {error && (
          <div>{error}</div>
        )}
        <Grid>
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </Grid>
        <Box $paddingY='16'>
          {!isLoading && (
            <Button onClick={fetchNextPage} $background='green' $color='dark'>
              Load more
            </Button>
          )}
          {isLoading && 'Loading more results...'}
        </Box>
      </PhoneCase>
    </Container>
  )
}

export default Homepage
