import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS } from "../constants";
import classNames from "classnames";

const Social = ({ darkMode, social }) => {
  const styles = classNames({
    "rounded-full p-1 mr-10 cursor-pointer duration-300 transition-all ease-in-out delay-50 opacity-1": true,
    "shadow-lg shadow-gray-700  hover:bg-purple_light": !darkMode,
    "hover:bg-purple_dark": darkMode,
  });
  return (
    <a
      href={social.link}
      className={styles}
      type="button"
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        icon={social.icon}
        width="24"
        color={`${darkMode ? COLORS.light : COLORS.dark}`}
        className="transition-all duration-1000 ease-in-out delay-50"
      />
    </a>
  );
};
export default Social;
