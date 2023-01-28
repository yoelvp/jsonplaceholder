import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { Button, DialogContent, DialogHeader, DialogWrapper, Paragraph } from '../ui/core'

const Dialog = ({ children, closeDialog }) => {
  return createPortal(
    <DialogWrapper>
      <DialogHeader marginTop='1rem'>
        <Paragraph>
          Comments
        </Paragraph>
        <Button onClick={closeDialog}>
          <AiOutlineClose />
        </Button>
      </DialogHeader>
      <DialogContent>
        {children}
      </DialogContent>
    </DialogWrapper>,
    document.getElementById('portal')
  )
}

export default Dialog
