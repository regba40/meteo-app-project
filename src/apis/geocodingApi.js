import { geocodingHttpClient } from "./httpClients";

/**
 * Transform a location name to longitude and latitude
 * @param {string} name - location's name
 * @param {Object} options - geocoding options
 * @returns {Promise<Object>}
 */
export async function geocode(name, { language = "fr", count = 5 }) {
  let response = await geocodingHttpClient.get("", {
    params: {
      count,
      name,
      language,
      format: "json",
    },
  });
  return extractLocationData(response);
}

export function extractLocationData(response) {
  let latitude = response?.data?.results?.[0].latitude;
  let longitude = response?.data?.results?.[0].longitude;
  let name = response?.data?.results?.[0].name;
  return {
    latitude,
    longitude,
    name,
  };
}
