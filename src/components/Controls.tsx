import { useRef, useState, useEffect, useMemo } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import svgComponents from "../assets/svgs/svgs";
import "../styles/Controls.css";

type Props = {
  // eslint-disable-next-line
  
  isPlaying: boolean;
  loop: boolean;
  progress: number;
  handlePlay: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  handlePause: () => void;
  onPlayNextSong: () => void;
  onPlayPrevSong: () => void;
  playSong: (index: number) => void;
};
const Controls = ({
  isPlaying,
  handlePlay,
  toggleLoop,
  toggleShuffle,
  handlePause,
  onPlayPrevSong,
  onPlayNextSong,
}: Props) => {

  const playPauseButtonRef = useRef<HTMLButtonElement>(null);

  const togglePlayAndPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };


  useEffect(() => {
    playPauseButtonRef.current?.focus();
  }, []);

  return (
    <div className="controls-area">
      <button onClick={toggleLoop}>
        <img src={svgComponents.repeat} />
      </button>
      <button onClick={onPlayPrevSong}>
        <img src={svgComponents.backward} />
      </button>
      <button ref={playPauseButtonRef} onClick={togglePlayAndPause}>
        {isPlaying ? (
          <AiFillPauseCircle className="button-icon" />
        ) : (
          <AiFillPlayCircle className="button-icon" />
        )}
      </button>

      <button onClick={onPlayNextSong}>
        <img src={svgComponents.forward} />
      </button>
      <button onClick={toggleShuffle}>
        <img src={svgComponents.shuffle} />
      </button>
    </div>
  );
};

export default Controls