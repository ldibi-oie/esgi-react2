const axios = require("axios");

export const fetchURL = axios.create({
  baseURL: "http://localhost:3220" || "http://localhost:3220",
});
