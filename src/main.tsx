import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navigation from './components/Navigation.tsx'
import Main from './components/Main.tsx'
import "@fontsource/montserrat";
import "@fontsource/ubuntu";
import SongsList from './components/SongsList.tsx'
import { Player } from './components/Player.tsx'
import PlayComponent from './components/PlayComponent.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Navigation/>
    <Main/>
    
    <PlayComponent/>
    
  </React.StrictMode>,
)
