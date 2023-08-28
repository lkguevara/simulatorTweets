import {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import { Container, Snackbar } from '@mui/material'
import SendTweet from './components/SendTweet/SendTweet'
import { TWEETS_STORAGE } from './utils/constants'
import ListTweets from './components/ListTweets/ListTweets'

function App() {
  const [open, setOpen] = useState({
    open: false,
    text: null
  })

  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(() => {
    const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetsStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false);
  }, [reloadTweets])

  const deleteTweets = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  }

  return (
    <>
      <Container className="tweets-simulator" maxWidth={false}>
        <Header />
        <SendTweet setOpen={setOpen} allTweets={allTweets}/>
        <ListTweets allTweets={allTweets} deleteTweets={deleteTweets}/>
        <Snackbar 
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={open.open}
          onClose={() => setOpen({ open: false, text: null })}
          autoHideDuration={1000}
          message={<span id='mensaje'>{open.text}</span>}
        />
      </Container>
    </>
  )
}

export default App
