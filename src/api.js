import axios from "axios";

const endpoint = process.env.REACT_APP_PASTE_API_ENDPOINT;

export function create(content, language, retention) {
  return axios.post(`${endpoint}/store`, {
    content,
    language,
    retention
  });
}

export function get(hash) {
  return axios.get(`${endpoint}/${hash}`);
}
