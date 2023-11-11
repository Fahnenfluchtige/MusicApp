import { useRef, useState, useEffect, useMemo } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import svgComponents from "../assets/svgs/svgs";
import "../styles/Controls.css";

type Props = {
  // eslint-disable-next-line
  
  playing: boolean;
  loop: boolean;
  progress: number;
  handlePlay: () => void;
  toggleLoop: () => void;
  shuffle: () => void;
  handlePause: () => void;
  nextSong: () => void;
  prevSong: () => void;
  playSong: (index: number) => void;
};
const Controls = ({
  playing,
  progress,
  handlePlay,
  toggleLoop,
  shuffle,
  handlePause,
  prevSong,
  nextSong,
}: Props) => {
  const [, setPlayed] = useState<number>(0);
  const [seeking, ] = useState<boolean>(false);
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
      <button onClick={toggleLoop}>
        <img src={svgComponents.shuffle} />
      </button>
      <button onClick={() => prevSong()}>
        <img src={svgComponents.backward} />
      </button>
      <button ref={playPauseButtonRef} onClick={togglePlayAndPause}>
        {playing ? (
          <AiFillPauseCircle className="button-icon" />
        ) : (
          <AiFillPlayCircle className="button-icon" />
        )}
      </button>

      <button onClick={nextSong}>
        <img src={svgComponents.forward} />
      </button>
      <button onClick={shuffle}>
        <img src={svgComponents.repeat} />
      </button>
    </div>
  );
};

export default Controls