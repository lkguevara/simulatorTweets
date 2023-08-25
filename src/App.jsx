import Header from './components/Header/Header'
import { Container, Snackbar } from '@mui/material'
import SendTweet from './components/SendTweet/SendTweet'

function App() {

  return (
    <>
      <Container className="tweets-simulator" maxWidth={false}>
        <Header />
        <SendTweet />
      </Container>
    </>
  )
}

export default App
