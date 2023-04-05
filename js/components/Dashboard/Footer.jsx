import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { COLORS, GITHUB_SPONSOR_URL } from "./constants";
import classNames from "classnames";

const Footer = ({ darkMode, handleDarkMode }) => {
  const styles = classNames({
    "rounded-full p-1 mr-10 cursor-pointer duration-300 transition-all ease-in-out delay-50 opacity-1": true,
    "shadow-lg shadow-gray-700  hover:bg-purple_light": !darkMode,
    "hover:bg-purple_dark": darkMode,
  });

  const sponsorStyle = classNames({
    "cursor-pointer hover:text-red-500 duration-1000 transition-all ease-in-out delay-50 opacity-1": true,
    "text-purple_lighter": darkMode,
  });
  return (
    <div className="flex justify-between m-4 prevent_select">
      <a
        href={GITHUB_SPONSOR_URL}
        target="_blank"
        className={sponsorStyle}
        rel="noreferrer"
        type="button"
      >
        <FontAwesomeIcon icon={faHeart} color="pink" /> Sponsor Me
      </a>
      <div className={styles} type="button" onClick={handleDarkMode}>
        <FontAwesomeIcon
          icon={faSun}
          width="24"
          color={`${darkMode ? COLORS.light : COLORS.dark}`}
          className="transition-all duration-1000 ease-in-out delay-50"
        />
      </div>
    </div>
  );
};

export default Footer;
