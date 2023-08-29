import './UsersFollow.scss'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types'

const UsersFollow = ({userName, name, initialIsFollowing}) => {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className='userFollow'>
      <article className='userFollow__card'>
        <header className='header'>
          <Avatar className='avatar' alt="Remy Sharp" src={`https://unavatar.io/${userName}`} />
          <div className='tw-followCard-info'>
            <h3>{name}</h3>
            <p>@{userName}</p>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
          </button>
        </aside>
      </article>
    </div>
  )
}

UsersFollow.propTypes = {
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired
}


export default UsersFollow