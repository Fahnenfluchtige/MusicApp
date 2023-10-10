import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import '../styles/Searchbar.css';


const Searchbar = () => {
  return (
    <div className="searchbar">
        <input type="text" placeholder="Search music" />
        <AiOutlineSearch className="search-icon" />
    </div>
  )
}

export default Searchbar
