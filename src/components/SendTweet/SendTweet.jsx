import "./SendTweet.scss"
import { useState } from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ModalContainer from "../ModalContainer/ModalContainer"
import FromSendTweet from "../FormSendTweet/FormSendTweet"
import moment from 'moment'
import {TWEETS_STORAGE} from "../../utils/constants"

const SendTweet = () => {
  const [isOpen, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const sendTweet = (e, form) => {
    e.preventDefault()
    const {tweet} = form;
    let allTweets = []

    if(!tweet){
      console.log('todos los campos son obligatorios')
    } else {
      form.time = moment();
      allTweets.push(form);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
      console.log('Tweet enviado correctamente');
      closeModal();
    }
    allTweets = []
  }

  return (
    <div className="sendTweet">
        <Fab className="sendTweet__openModal" color="primary" aria-label="add" onClick={openModal}>
            <AddIcon />
        </Fab>

        <ModalContainer isOpen={isOpen} closeModal={closeModal}>
            <FromSendTweet sendTweet={sendTweet}/>
        </ModalContainer>
    </div>
  )
}

export default SendTweet