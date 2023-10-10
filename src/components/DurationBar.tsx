import React from 'react'
import { useEffect, useMemo, useRef, useState } from 'react';
import { Duration } from './Duration';
import '../styles/PlayComponent.css'

    type Props = {
        playerRef: any;
        playing: boolean;
        loop: boolean;
        progress: number;
        duration: number;
       
      
        //handlePlay: () => void;

        //toggleLoop: () => void;
       // handlePause: () => void;
        //handleVolumeChange: (newVolume: number) => void;
      };
      export const DurationBar = ({
        playerRef,
        progress,
        duration
      }: Props) => {
        const [played, setPlayed] = useState<number>(0);
        const [seeking, setSeeking] = useState<boolean>(false);
        const playPauseButtonRef = useRef<HTMLButtonElement>(null);
      
      
        const handleSeekMouseDown = (e: any) => {
          setSeeking(true);
        };
      
      const handleSeekChange = (e: any) => {
          setPlayed(parseFloat(e.target.value));
        };
      
      const handleSeekMouseUp = (e: any) => {
          playerRef.current?.seekTo(parseFloat(e.target.value));
          setSeeking(false);
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
    <div className='durationbar'>
      <div>
        {<Duration seconds={duration * played} />  }
      </div>
      <input 
      className="duration"
      type="range"
      min={0}
      max={0.999999}
      step="any"
      value={played}
      onMouseDown={handleSeekMouseDown}
      onChange={handleSeekChange}
      onMouseUp={handleSeekMouseUp} 
      />
     <div>
      -{<Duration seconds={duration * (1 - played)} /> }
     </div>
    </div>
  )
}

export default DurationBar
