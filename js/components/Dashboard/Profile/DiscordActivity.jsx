import React, { useEffect, useState } from "react";
import { useLanyardWS } from "use-lanyard";
import { DISCORD_USER_ID, INITIAL_USER_DATA } from "./constants";
import Game from "./Game";
import Spotify from "./Spotify";

const DiscordActivity = ({ darkMode }) => {
  const [game, setGame] = useState(null);

  const discordData = useLanyardWS(DISCORD_USER_ID, {
    initialData: INITIAL_USER_DATA,
  });
  const { spotify, activities } = discordData;

  useEffect(() => {
    const gameData = activities.find((activity) => activity.type === 0);
    setGame(gameData);
  }, [activities]);

  const isActive = spotify || game;
  if (activities.length === 0 || !isActive) return <></>;

  return spotify ? (
    <Spotify spotify={spotify} darkMode={darkMode} />
  ) : (
    game && <Game game={game} darkMode={darkMode} />
  );
};

export default DiscordActivity;
