import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { Duration } from "./Duration";
import "../styles/Duration.css";
import ReactPlayer from "react-player";

type Props = {
  playerRef:  React.RefObject<ReactPlayer>;
  playing: boolean;
  loop: boolean;
  progress: number;
  duration: number;
};
export const DurationBar = ({ playerRef, progress, duration }: Props) => {
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);
  const playPauseButtonRef = useRef<HTMLButtonElement>(null);

  const handleSeekMouseDown = () => {
    //setSeeking(true);
  };

  const handleSeekChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp: React.MouseEventHandler<HTMLInputElement> = (e) => {
    playerRef!.current?.seekTo(parseFloat((e.target as HTMLInputElement).value));
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
    <div className="durationbar">
      <div>{<Duration seconds={duration * played} />}</div>
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
      <div className="time">
        -{<Duration seconds={duration * (1 - played)} />}
      </div>
    </div>
  );
};

export default DurationBar;
