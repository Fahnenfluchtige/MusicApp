import React from 'react'
import '../styles/SongsList.css'
import {songs} from '../music/data'

type Props = {
  playSong: (index: number) => void;
};

const SongsList: React.FC<Props> = ({ playSong }) => {
  return (
    <div className='songs-name'>
      <div style={{display: 'flex', alignItems:'center'}}>
        <h2 className='popular-heading'>Popular</h2>
        <button className='play'>Play all</button>
      </div>
      <table className='table-style'>
        <thead>
          <tr className='tr-style'>
            <th style={{ width: '4em',  textAlign: 'left' }}>#</th>
            <th style={{ width: '6em',  textAlign: 'left' }}></th>
            <th style={{ width: '100em',  textAlign: 'left' }}>Title</th>
            <th style={{ width: '50em',  textAlign: 'left' }}>Group</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id} className='columns' onClick={() => playSong(song.id-1)}>
              <td>{song.id}</td>
              <td><img src={song.image} style={{width:'2rem', height:'2rem'}}/></td>
              <td>{song.title}</td>
              <td>{song.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{height:'10rem'}}></div>
    </div>
  )
}

export default SongsList
