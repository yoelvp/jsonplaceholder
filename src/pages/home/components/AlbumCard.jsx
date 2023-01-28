import React from 'react'
import {
  Card,
  Flex,
  Paragraph
} from '../../../ui/core'
import { MdPhotoAlbum } from 'react-icons/md'

const AlbumCard = ({ album }) => {
  return (
    <Card background='primary'>
      <Flex justify='start' gap='0.5rem'>
        <MdPhotoAlbum size={18} color='#232323' />
        <Paragraph color='dark' align='left'>
          {album.title}
        </Paragraph>
      </Flex>
    </Card>
  )
}

export default AlbumCard
