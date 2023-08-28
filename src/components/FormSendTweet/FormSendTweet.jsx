import "./FormSendTweet.scss"
import {useState} from "react"
import { FormControl, FormGroup, TextField, Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const FromSendTweet = ({sendTweet, closeModal}) => {
    
    const [form, setForm] = useState({
        tweet: ""
    });

    const formChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className="formSendTweet">
        <IconButton className="iconClose" onClick={closeModal}>
            <CloseIcon />
        </IconButton>
        <h2 className="formSendTweet__title">Enviar Tweet</h2>
        <form className="formSendTweet__form" onSubmit={(e) => sendTweet(e, form)} onChange={formChange}>
            <FormControl>
                <FormGroup>
                    <TextField
                        className="formSendTweet__form-textarea"
                        name="tweet"
                        multiline
                        rows="6"
                        placeholder="Escribe tu tweet..."
                        margin="normal"
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Enviar Tweet</Button>
                </FormGroup>
            </FormControl>
        </form>
    </div>
  )
}

FromSendTweet.propTypes={
    sendTweet: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
}

export default FromSendTweet