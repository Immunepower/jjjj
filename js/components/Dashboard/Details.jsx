import React from "react";
import Typography from "@mui/material/Typography";
import DecodeAnimation from "react-decode-animation";
import classNames from "classnames";
import { SUBTITLE, USERNAME } from "./constants";
import DiscordActivity from "./Profile/DiscordActivity";

const Details = ({ darkMode }) => {
  const styles = classNames({
    "custom_font font-semibold duration-300 transition-all ease-in-out delay-150": true,
    "text-purple_lighter": darkMode,
    "text-purple_darker": !darkMode,
  });
  const subStyles = classNames({
    "custom_font duration-300 transition-all ease-in-out delay-150": true,
    "text-purple_lighter": darkMode,
    "text-purple_darker": !darkMode,
  });

  return (
    <div className="absolute -m-6 top-1/2 left-1/3">
      <Typography variant="h3">
        <span className={styles}>
          <DecodeAnimation
            autoplay
            text={USERNAME}
            interval={450}
            allowedCharacters={["numbers", "symbols"]}
          />
        </span>
      </Typography>
      <Typography variant="h6">
        <span className={subStyles}>
          <DecodeAnimation
            autoplay
            text={SUBTITLE}
            interval={100}
            allowedCharacters={["symbols"]}
          />
        </span>
      </Typography>
      <DiscordActivity darkMode={darkMode} />
    </div>
  );
};

export default Details;
