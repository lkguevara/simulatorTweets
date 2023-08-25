import "./FormSendTweet.scss"
import { FormControl, FormGroup, TextField, Button } from '@mui/material'

const FromSendTweet = () => {
  return (
    <div className="formSendTweet">
        <h2 className="formSendTweet__title">Enviar Tweet</h2>
        <form className="formSendTweet__form">
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

export default FromSendTweet