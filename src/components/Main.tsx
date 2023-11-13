import React from "react";
import "../styles/Main.css";
import { MdVerified } from "react-icons/md";

type About = {
  isVerified: boolean;
  artist: string;
  about: string;
  listeners: number;
};

const info: About[] = [
  {
    isVerified: true,
    artist: "Postpank",
    about:
      "Post-punk, an innovative genre born from punk rock, drew influences from various bands. The Cure added a dark and melodic dimension, Tears for Fears blended synth-pop with emotional depth, Depeche Mode brought electronica and darkness, and Joy Division pioneered gloom and atmosphere. Together, these bands shaped post-punk diverse and influential sound",
    listeners: 100000,
  },
];

const Main: React.FC = () => {
  return (
    <div className="album-container">
      <div className="album-picture">
        <div className="info">
          <div className="statistics">
            <h1 className="artist-name">{info[0].artist}</h1>
            {info[0].isVerified && (
              <div className="verified-div">
                <MdVerified className="verified-icon" />
                <div className="verified-style">Verified Artist</div>
              </div>
            )}
            <p className="listeners">{info[0].listeners} listeners</p>
          </div>
          <div className="about">
            <p className="about-text">{info[0].about}</p>
            <div className="about-text-mini">About...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
