import axios from "axios";

/* 
Using relative paths.
When deployed on Render, frontend and backend run on same domain.
Example:
https://team-punch-system.onrender.com/punch
*/

export const punchAction = (data) => {
  return axios.post("/punch", data);
};

export const getHistory = () => {
  return axios.get("/history");
};