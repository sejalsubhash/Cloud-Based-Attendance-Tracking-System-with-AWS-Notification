import axios from "axios";

const API = "";

export const punchAction = (data) =>
  axios.post(`${API}/api/punch`, data);

export const getHistory = () =>
  axios.get(`${API}/api/history`);