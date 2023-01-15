import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { ModalWrapper, ModalCard, ModalHeader, Button, ModalBody, Paragraph } from '../ui/core'

const Modal = ({ children, title, closeModal }) => {
  return createPortal(
    <ModalWrapper>
      <ModalCard bg='primary' as='main'>
        <ModalHeader>
          <Paragraph as='h4' size='1.5rem'>
            {title || 'Titulo del modal'}
          </Paragraph>
          <Button onClick={closeModal} >
            <AiOutlineClose />
          </Button>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalCard>
    </ModalWrapper>,
    document.getElementById('portal')
  )
}

export default Modal
