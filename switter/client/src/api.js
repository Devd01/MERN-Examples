import axios from "axios";
import { getToken } from "./helper";
const SERVER_URL = "https://switter-server-3850.herokuapp.com";
axios.defaults.headers.common["authorization"] = `Bearer ${getToken()}`;

export const getFeedSweets = () => axios.get(`${SERVER_URL}/sweets/feed`);
export const getUser = uid => axios.get(`${SERVER_URL}/users/${uid}`);
export const getUserSweets = uid =>
  axios.get(`${SERVER_URL}/sweets/users/${uid}`);
export const getSweet = sweetId =>
  axios.get(`${SERVER_URL}/sweets/comments/${sweetId}`);
export const postSweet = new_sweet =>
  axios.post(`${SERVER_URL}/sweets/add/`, new_sweet);
export const postToggleSweet = sweetId =>
  axios.post(`${SERVER_URL}/sweets/togglelike/`);
export const postComment = payload =>
  axios.post(`${SERVER_URL}/sweets/comment/`, payload);
