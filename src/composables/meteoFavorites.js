import { ref } from "vue";

const FAVORITES_STORAGE_ID = "meteo-app-favorites";
const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_ID);

const favorites = ref(storedFavorites ? parse(storedFavorites) : []);

function isFavorite(location) {
  return favorites.value.includes(location);
}

function toggleFavorite(location) {
  isFavorite(location) ? removeFavorite(location) : addFavorite(location);
}

function addFavorite(location) {
  if (!location || isFavorite(location)) return;
  favorites.value.push(location);
  localStorage.setItem(FAVORITES_STORAGE_ID, JSON.stringify(favorites.value));
}

function removeFavorite(location) {
  if (!location || !isFavorite(location)) return;
  let locationIndex = favorites.value.indexOf(location);
  favorites.value.splice(locationIndex, 1);
  localStorage.setItem(FAVORITES_STORAGE_ID, JSON.stringify(favorites.value));
}

function parse(storedFavorites) {
  try {
    return JSON.parse(storedFavorites);
  } catch (error) {
    return [];
  }
}

export function useMeteoFavorites() {
  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
}
