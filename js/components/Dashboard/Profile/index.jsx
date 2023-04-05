import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import classNames from "classnames";
import {
  DISCORD_IMAGE_BASE_URL,
  DISCORD_USER_ID,
  INITIAL_USER_DATA,
  USERNAME,
} from "./constants";
import { useLanyardWS } from "use-lanyard";

const Profile = ({ darkMode }) => {
  const discordData = useLanyardWS(DISCORD_USER_ID, {
    initialData: INITIAL_USER_DATA,
  });

  const [showCustomStatus, setShowCustomStatus] = useState(false);
  const [customActivity, setCustomActivity] = useState("");

  const { discord_user, discord_status, activities } = discordData;
  const discordAvatarUrl = `${DISCORD_IMAGE_BASE_URL}${discord_user.avatar}`;

  useEffect(() => {
    const activity = activities.find((activity) => activity.type === 4);
    if (activity) {
      setCustomActivity(activity);
    }
  }, [activities]);

  const styles = {
    "border-purple_darker rounded-full border border-2 duration-1000 transition ease-in-out delay-50": true,
    "shadow-lg shadow-gray-700 hover:border-purple_light": !darkMode,
    "hover:border-red-500": discord_status === "dnd",
    "hover:border-yellow-500": discord_status === "idle",
    "hover:border-green-500": discord_status === "online",
  };
  const customActivityStyles = classNames({
    "duration-300 transition-all ease-in-out delay-150": true,
    "visible opacity-1": showCustomStatus,
    "invisible opacity-0": !showCustomStatus,
    "my-2": true,
    "text-purple_lighter": darkMode,
    "text-purple_darker": !darkMode,
  });

  return (
    <div
      className="absolute flex p-1 m-4 space-x-2 w-max hover:cursor-pointer"
      onMouseEnter={() => setShowCustomStatus(true)}
      onMouseLeave={() => setShowCustomStatus(false)}
    >
      <div className="space-x-6">
        <Avatar alt={USERNAME} src={discordAvatarUrl} className={styles} />
      </div>
      <div className={customActivityStyles}>{customActivity.state}</div>
    </div>
  );
};

export default Profile;
