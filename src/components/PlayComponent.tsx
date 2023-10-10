
import { Player } from "./Player";
import '../styles/PlayComponent.css'
import { songs } from "../music/data";
import { useState } from "react";


const PlayComponent = ()=> {

  return (
      <div>
        <Player/>
      </div>
    
  );
}

export default PlayComponent;
