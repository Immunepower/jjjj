export const USERNAME = "Red";
export const DISCORD_USER_ID = "428944701094363146";
export const DISCORD_IMAGE_BASE_URL = `https://cdn.discordapp.com/avatars/${DISCORD_USER_ID}/`;
export const INITIAL_USER_DATA = {
    discord_user: {
        avatar: "a_c3562a10551250a3f2220086d6af1545",
    },
    discord_status: "offline",
    activities: [],
};

export const getDiscordCDNUrl = (app_id, asset_id) =>
    `https://cdn.discordapp.com/app-assets/${app_id}/${asset_id}.png`;