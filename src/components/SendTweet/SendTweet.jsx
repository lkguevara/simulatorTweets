import "./SendTweet.scss"
import { useState } from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ModalContainer from "../ModalContainer/ModalContainer"
import FromSendTweet from "../FormSendTweet/FormSendTweet"
import moment from 'moment'
import {TWEETS_STORAGE} from "../../utils/constants"

const SendTweet = ({setOpen, allTweets, setAllTweets}) => {
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
    let allTweetsArr = [];

    allTweets ? allTweetsArr = allTweets : null;

    if(!tweet){
      setOpen({
        open: true,
        text: 'todos los campos son obligatorios'
      })
    } else {
      form.time = moment();
      allTweetsArr.push(form);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArr));
      setAllTweets(allTweetsArr);
      setOpen({
        open: true,
        text: 'Tweet enviado correctamente'
      })
      closeModal();
    }
    allTweetsArr = []
  }

  return (
    <div className="sendTweet">
        <Fab className="sendTweet__openModal" color="primary" aria-label="add" onClick={openModal}>
            <AddIcon />
        </Fab>

        <ModalContainer isOpen={isOpen} >
            <FromSendTweet sendTweet={sendTweet} closeModal={closeModal}/>
        </ModalContainer>
    </div>
  )
}

export default SendTweet