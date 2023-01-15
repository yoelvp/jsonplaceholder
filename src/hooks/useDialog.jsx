import { useState } from 'react'

export const useDialog = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false)

  const openDialog = () => {
    setIsOpenDialog(true)
  }

  const closeDialog = () => {
    setIsOpenDialog(false)
  }

  return { isOpenDialog, openDialog, closeDialog }
}
