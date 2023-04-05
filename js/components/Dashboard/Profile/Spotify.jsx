import { Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";

const Spotify = ({ spotify, darkMode }) => {
  const styles = classNames({
    "duration-300 transition-all ease-in-out delay-150 trackInfo": true,
    "text-purple_lighter": darkMode,
    "text-purple_darker": !darkMode,
  });
  const subStyles = classNames({
    "custom_font duration-300 transition-all ease-in-out delay-150 tracking-widest font-semibold leading-3": true,
    "text-purple_lighter": darkMode,
    "text-purple_darker": !darkMode,
  });

  return (
    <>
      <Typography variant="caption">
        <span className={subStyles}>NOW PLAYING:</span>
      </Typography>
      <div className="now_playing_card">
        <div className="now_playing_container-inner">
          <img id="track_art" src={spotify.album_art_url} alt={spotify.title} />
          <div className={styles}>
            <p
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  `https://open.spotify.com/track/${spotify?.track_id}`,
                  "_blank"
                )
              }
            >
              {spotify.song}
            </p>
            <p>by {spotify.artist}</p>
            <p className="album">on {spotify.album}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spotify;
