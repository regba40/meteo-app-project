import axios from "axios";

const weatherApiBaseUrl = import.meta.env.VITE_WEATHER_API;
const geocodingApiBaseUrl = import.meta.env.VITE_GEOCODING_API;

export const weatherHttpClient = axios.create({
  baseURL: weatherApiBaseUrl,
});

export const geocodingHttpClient = axios.create({
  baseURL: geocodingApiBaseUrl,
});
