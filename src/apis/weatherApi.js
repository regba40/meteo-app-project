import { weatherHttpClient } from "./httpClients";

/**
 * fetch weather informations in a specific location
 * @param {Object} location - location latitude and longitude
 * @returns {Promise<Object>}
 */
export async function getWeatherInfos({ latitude, longitude }) {
  const response = await weatherHttpClient.get("", {
    params: {
      latitude,
      longitude,
      current_weather: true,
      timeformat: "unixtime",
      timezone: "GMT",
    },
  });
  return extractWeatherData(response.data);
}

/**
 * extract specific information from weather-api's response
 * @param {Object} responseData
 * @returns {Object}
 */
function extractWeatherData({ current_weather }) {
  return {
    today: {
      temperature: current_weather.temperature,
      weathercode: current_weather.weathercode,
      wind: {
        direction: current_weather.winddirection,
        speed: current_weather.windspeed,
      },
    },
  };
}
