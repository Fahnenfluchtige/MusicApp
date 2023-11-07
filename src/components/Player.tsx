import ReactPlayer, { ReactPlayerProps } from "react-player";
import { SetStateAction, useRef, useState } from "react";
import Details from "./Details";
import { Controls } from "./Controls";
import { songs } from "../music/data";
import SongsList from "./SongsList";
import DurationBar from "./DurationBar";
import "../styles/Player.css";


export const Player = () => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleProgress = (state: ReactPlayerProps) => {
    setProgress(state.played);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const toggleLoop = () => {
    setLoop((prevLoop) => !prevLoop);
  };

  const nextSong = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    if (playing) {
      handlePlay();
    }
  };

  const prevSong = () => {
    if (currentSongIndex === 0) {
      setCurrentSongIndex(songs.length - 1);
    } else {
      setCurrentSongIndex((prevIndex) => prevIndex - 1);
    }
    handlePlay();
  };

  const playSong = (index: SetStateAction<number>) => {
    setCurrentSongIndex(index);
    handlePlay();
  };

  return (
    <div>
      <SongsList playSong={playSong} />
      <div className="player">
      <div className="music-container">
        <div className="details">
          <Details
            title={songs[currentSongIndex].title}
            author={songs[currentSongIndex].author}
            thumbnail={songs[currentSongIndex].image}
          />
          <Controls
            playing={playing}
            progress={progress}
            loop={loop}
            handlePlay={handlePlay}
            toggleLoop={toggleLoop}
            handlePause={handlePause}
            nextSong={nextSong}
            prevSong={prevSong}
            playSong={playSong}
          />
        </div>
        <DurationBar
          playerRef={playerRef}
          progress={progress}
          loop={loop}
          duration={duration}
          playing={playing}
        />
        <div>
          <ReactPlayer
            width="0px"
            height="0px"
            className="react-player"
            ref={playerRef}
            url={songs[currentSongIndex].audio}
            playing={playing}
            loop={loop}
            onPlay={handlePlay}
            onPause={handlePause}
            onProgress={handleProgress}
            onDuration={handleDuration}
          />
        </div>
      </div>
      </div>
    </div>
  );
};
