import React from "react";
import { useState } from "react";
import "../styles/SongsList.css";
import { songs } from "../music/data";

type Props = {
  playSong: (index: number) => void;
};

const SongsList: React.FC<Props> = ({ playSong }) => {
  const [activeSongIndex, setActiveSongIndex] = useState(-1);

  const SetActive = (index: number) => {
    setActiveSongIndex(index);
    playSong(index);
  };

  return (
    <div className="songs-name">
      <div className="popular-area">
        <h2 className="popular-heading">Popular</h2>
        <button className="play" onClick={() => SetActive(0)}>
          Play all
        </button>
      </div>
      <table className="table-style">
        <thead>
          <tr className="tr-style">
            <th>#</th>
            <th></th>
            <th>Title</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr
              key={song.id}
              className={
                activeSongIndex === song.id - 1 ? "active-song" : "columns"
              }
              onClick={() => SetActive(song.id - 1)}
            >
              <td className="td-num">{song.id}</td>
              <td>
                <img
                  src={song.image}
                  style={{ width: "2rem", height: "2rem" }}
                />
              </td>
              <td>{song.title}</td>
              <td>{song.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="spacer"></div>
    </div>
  );
};

export default SongsList;
