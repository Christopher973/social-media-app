import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://api.social-media.christopher-marie-angelique.fr/api",
  withCredentials: true,
});
