import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://api.social-media.christopher-marie-angelique.fr/api",
  withCredentials: true,
});
