import './Tweet.scss'
import {Card, CardContent} from '@mui/material'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone'
import moment from 'moment'
import propTypes from 'prop-types'

const Tweet = ({tweet:{username, tweet, time}, index, deleteTweets}) => {

  return (
    <Card className='tweet'>
        <CardContent>
            <div className='tweet__header'>
                <h5>{username}</h5>
                <DeleteTwoToneIcon onClick={() => deleteTweets(index)}/>
            </div>
            <p>{tweet}</p>
            <div className='tweet__date'>
                {moment(time).format('DD/MM/YYYY HH:mm')}
            </div>
        </CardContent>
    </Card>
  )
}

Tweet.propTypes = {
    tweet: propTypes.object.isRequired,
    index: propTypes.number.isRequired
}

export default Tweet