
import { useRef, useState, useEffect, useMemo } from "react";
import {AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import svgComponents from "../svgs/svgs";
import '../styles/Controls.css'

type Props = {
  playerRef: any;
  playing: boolean;
  loop: boolean;
  progress: number;
  handlePlay: () => void;
  toggleLoop: () => void;
  handlePause: () => void;
  nextSong: () =>  void;
  prevSong: () =>  void;
  playSong: (index: number) => void;
};
export const Controls = ({
  playing,
  progress,
  handlePlay,
  toggleLoop,
  handlePause, 
  prevSong,
  nextSong,
  playSong
}: Props) => {
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);
  const playPauseButtonRef = useRef<HTMLButtonElement>(null);

  const togglePlayAndPause = () => {
    if (playing) {
      handlePause();
    } else {
      handlePlay();
    }
  };

   useMemo(() => {
    setPlayed((prevPlayed) => {
      if (!seeking && prevPlayed !== progress) {
        return progress;
      }
      return prevPlayed;
    });
  }, [progress, seeking]);


  useEffect(() => {
    playPauseButtonRef.current?.focus();
  }, []);
  
  return (
 <div className="controls-area">
  <button><img src={svgComponents.shuffle} /></button>
    <button
    onClick={() => prevSong()}
    >
      <img src={svgComponents.backward} />
    </button>
     <button
       ref={playPauseButtonRef}
       className=""
       onClick={togglePlayAndPause}
     >
       {playing ? <AiFillPauseCircle style={{color:'white'}} size = "3rem" />: <AiFillPlayCircle style={{color:'white'}} size = "3rem" />}
       </button>
      
      
        <button
        onClick={nextSong}
        ><img src={svgComponents.forward} /></button>
        <button
          className={''}
          onClick={toggleLoop}
        >
       <img src={svgComponents.repeat} />
     </button>
    
   
 </div>

  );
};
