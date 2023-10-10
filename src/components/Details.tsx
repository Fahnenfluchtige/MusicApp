import React from 'react'
import '../styles/PlayComponent.css'

type Props = {
    title: string;
    author: string;
    thumbnail: string;
  };


const Details = ({ title, author, thumbnail }: Props) => {
  return (
    <div>
      <div className="player-elements">
          <img className='picture'
            src={thumbnail}
          />

        <div>
          <p className='song-title'>
            {title}
          </p>

          <p className='song-author'>
            {author}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
