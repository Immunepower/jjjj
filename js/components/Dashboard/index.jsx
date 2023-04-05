import React, { useEffect, useState } from "react";
import Canvas from "./Canvas";
import Details from "./Details";
import { DARK_MODE_STORAGE_KEY } from "./constants";
import Footer from "./Footer";
import Contacts from "./Contacts";
import Profile from "./Profile";
import classNames from "classnames";

const setToLocalStorage = (darkMode) =>
  localStorage.setItem(DARK_MODE_STORAGE_KEY, darkMode);

const getFromLocalStorage = () => localStorage.getItem(DARK_MODE_STORAGE_KEY);

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
  const handleDarkMode = () => {
    setToLocalStorage(!darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const darkMode = getFromLocalStorage();
    if (darkMode) {
      setDarkMode(darkMode === "true");
    }
  }, []);

  const darkModeStyle = classNames({
    "duration-1000 transition-all ease-in-out delay-50 absolute top-0 left-0 w-full h-full pointer-events-none -z-10": true,
    "bg-black opacity-50": darkMode,
  });

  const backGroundStyle = classNames({
    "absolute top-0 left-0 -z-10 duration-1000 transition-all ease-in-out delay-50": true,
    "bg-purple_darker": darkMode,
    "bg-purple_lighter": !darkMode,
  });

  return (
    <div className="relative h-screen">
      <div className={backGroundStyle}>
        <Canvas />
      </div>
      {darkMode && <div className={darkModeStyle} />}
      <div className="z-50 mx-5">
        <Profile darkMode={darkMode} />
        <Details darkMode={darkMode} />
        <Contacts darkMode={darkMode} />
        <div className="absolute bottom-0 w-full">
          <Footer darkMode={darkMode} handleDarkMode={handleDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
