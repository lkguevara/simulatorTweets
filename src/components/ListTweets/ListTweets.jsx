import './ListTweets.scss'
import PropTypes from 'prop-types'
import Tweet from '../Tweet/Tweet'

const ListTweets = ({allTweets, deleteTweets}) => {
  console.log(allTweets)

  if(!allTweets || allTweets.length === 0) {
    return (
      <div className='listTweetsEmpty'>
        <h2>No hay ningún Tweet publicado...</h2>
      </div>
    )
  }

  return(
    <div className='listTweets'>
      {allTweets.map((tweet, index) => (
        <div key={index} className='listTweets__tweet'>
          <Tweet tweet={tweet} index={index} deleteTweets={deleteTweets}/>
        </div>
      ))}
    </div>
  )
}

ListTweets.propTypes={
  allTweets: PropTypes.array.isRequired,
  deleteTweets: PropTypes.func.isRequired
}

export default ListTweets