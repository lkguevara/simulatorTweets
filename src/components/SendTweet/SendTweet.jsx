import "./SendTweet.scss"
import { useState } from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ModalContainer from "../ModalContainer/ModalContainer"
import FromSendTweet from "../FormSendTweet/FormSendTweet"

const SendTweet = () => {
  const [isOpen, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <div className="sendTweet">
        <Fab className="sendTweet__openModal" color="primary" aria-label="add" onClick={openModal}>
            <AddIcon />
        </Fab>

        <ModalContainer isOpen={isOpen} closeModal={closeModal}>
            <FromSendTweet />
        </ModalContainer>
    </div>
  )
}

export default SendTweet