// -------------------------------------

import dotenv from "dotenv";

// -------------------------------------

const env = ["WEB_PORT"];

export function env_var() {
  // Load Env
  dotenv.config().parsed;
  // Verify var
  const control_arr = env.filter((env_data) => !process.env[env_data]);
  if (control_arr.length !== 0)
    throw new Error(
      `Error/s on .env file: ${control_arr.map(
        (val) => `"${val}"`
      )} not provide...`
    );
  return {
    WEB_PORT: process.env.WEB_PORT!,
  };
}
