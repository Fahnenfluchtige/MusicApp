import React from 'react'
import '../styles/Main.css'
import {MdVerified} from 'react-icons/md'

type About = {
  
  is_verified: boolean;
  artist: string;
  about: string;
  listeners: number;
};

const info: About[] = [
  { is_verified: true, artist:"Postpank", about: 'Post-punk, an innovative genre born from punk rock, drew influences from various bands. The Cure added a dark and melodic dimension, Tears for Fears blended synth-pop with emotional depth, Depeche Mode brought electronica and darkness, and Joy Division pioneered gloom and atmosphere. Together, these bands shaped post-punk diverse and influential sound', listeners: 100000},
];



const Main: React.FC = () => {
  return (
    <div className="album-container">
    <div
      className="album-picture"
      style={{
        backgroundImage:
          "url('https://post-punk.com/wp-content/uploads/2023/08/Death-Cult-official-Publicity-Photo063crop.jpg')",
      }}
    >
      <div className="info" >
        <div className='statistics'>
          {info[0].is_verified && <div style={{display: 'flex'}}>
            <MdVerified className='verified-icon'/>
            <div className="verified-style">Verified Artist</div> 
            </div>}
          <div className='artist-name'>{info[0].artist}</div>
          <div className='listeners'>{info[0].listeners} listeners</div>
          
        </div>
        <div className='about'>
          <p className='about-text'>{info[0].about}
          </p>
          <div className='about-text-mini'>About...</div>
        </div>
        
        
      </div>
      
    </div>
  </div>
  )
}

export default Main
