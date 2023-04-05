import { Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { getDiscordCDNUrl } from "./constants";

const Game = ({ game, darkMode }) => {
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

  const getGameImageUrl = () => {
    if (game.assets?.large_image) {
      return game.assets?.large_image.startsWith("mp:external")
        ? game.assets?.large_image.replace(
            /mp:external\/([^\/]*)\/(http[s])/g,
            "$2:/"
          )
        : getDiscordCDNUrl(game.application_id, game.assets?.large_image);
    } else {
      return `https://dcdn.dstn.to/app-icons/${game.application_id}`;
    }
  };

  const imgUrl = getGameImageUrl();

  return (
    <>
      <Typography variant="caption">
        <span className={subStyles}>NOW PLAYING:</span>
      </Typography>
      <div className="now_playing_card">
        <div className="now_playing_container-inner">
          <img id="track_art" src={imgUrl} alt={game.name} />
          <div className={styles}>
            <p>{game.name}</p>
            <p>{game.state}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
