import React from 'react'
import {AiFillBell} from 'react-icons/ai'
import '../styles/Navigation.css'
import Searchbar from './Searchbar'

type LK = {
  name: string;
  type: string;

};

const myLK: LK = {
  name: 'somename', 
  type: 'sometype',
};

const Navigation =() => {
  return (
    <div className='navbar' >
        <Searchbar/>
        <AiFillBell className='bell-icon'/>
        <div className ='personal-area'>
          <img className='image' src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'/>
          <div className='information'>
            <div className='information-name'>{myLK.name}</div>
            <div className='information-type'>{myLK.type}</div>
          </div>
        </div>
      
    </div>
  )
}

export default Navigation
