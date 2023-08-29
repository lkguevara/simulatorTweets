import {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import { Container, Snackbar } from '@mui/material'
import SendTweet from './components/SendTweet/SendTweet'
import { TWEETS_STORAGE } from './utils/constants'
import ListTweets from './components/ListTweets/ListTweets'
import UsersFollow from './components/UsersFollow/UsersFollow'
import './index.scss'
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

  const users = [
    {
      userName: 'lkdguevara',
      name: 'Lian Katherine Guevara',
      isFollowing: true
    },
    {
      userName: 'simon009',
      name: 'Simón Arjona',
      isFollowing: false
    },
    {
      userName: 'ruizpaco',
      name: 'Paco Ruiz',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

  return (
    <div className='containerTwitter'>
      <Container className="tweets-simulator" maxWidth={false}>
        <Header />
        <SendTweet setOpen={setOpen} allTweets={allTweets} setAllTweets={setAllTweets}/>
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

      <div className='follows'>
        <h2>¿ A Quién seguir?</h2>
        {
          users.map((user, index) => (
            <UsersFollow 
              key={index} 
              userName={user.userName} 
              name={user.name} 
              initialIsFollowing={user.isFollowing}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
