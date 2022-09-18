<template>
  <div class="location">
    <div class="location__today">
      <div>{{ now }}</div>
    </div>
    <div v-if="weatherData" class="location__current">
      <component
        v-if="weatherIcon"
        :is="weatherIcon"
        class="location__current__icon"
      ></component>
      <span class="location__current__temperature">
        {{ temperature }}
        <sup>°C</sup>
      </span>
      <div class="location__current__details">
        <div>{{ windLabel }}</div>
        <div>{{ windDirectionLabel }}</div>
      </div>
      <BaseIconButton
        class="location__current__favorite"
        :title="t('meteo.favorites.toggle_location')"
        @click="toggleFavorite(location.name)"
      >
        <FavoriteIcon v-if="isFavorite(location.name)" />
        <FavoriteOutlineIcon v-else />
      </BaseIconButton>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, toRef, watch } from "vue";
import dayjs from "dayjs";
import { geocode } from "@/apis/geocodingApi";
import { getWeatherInfos } from "@/apis/weatherApi";
import FavoriteIcon from "./icons/FavoriteIcon.vue";
import FavoriteOutlineIcon from "./icons/FavoriteOutlineIcon.vue";
import BaseIconButton from "./base/BaseIconButton.vue";
import { useMeteoIcon } from "@/composables/meteoIcon.js";
import { useMeteoFavorites } from "@/composables/meteoFavorites.js";
import { useI18n } from "vue-i18n";

const props = defineProps({
  locationName: {
    type: String,
    required: false,
    default: "",
  },
  isFavorite: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// i18n
const { t } = useI18n();

const now = dayjs().format("dddd DD/MM/YYYY - HH:mm");

// weather data
const weatherData = ref(null);
const temperature = computed(() => weatherData.value?.today?.temperature);
const weathercode = computed(() => weatherData.value?.today?.weathercode);
const weatherIcon = computed(() => useMeteoIcon(weathercode.value));
const wind = computed(() => weatherData.value?.today?.wind);
const windLabel = computed(
  () => `${t("meteo.visualisation.wind")} : ${wind.value?.speed} km/h`
);
const windDirectionLabel = computed(
  () => `${t("meteo.visualisation.wind_direction")} : ${wind.value?.direction}`
);

// location and data fetching
const location = ref(null);
const locationName = toRef(props, "locationName");

watch(locationName, fetchLocationWeather, { immediate: true });

async function fetchLocationWeather() {
  if (!locationName.value) return;
  location.value = await geocode(props.locationName, {});
  let latitude = location.value?.latitude;
  let longitude = location.value?.longitude;
  if (latitude && longitude) {
    weatherData.value = await getWeatherInfos({
      latitude,
      longitude,
    });
  }
}

// favorite
const { isFavorite, toggleFavorite } = useMeteoFavorites();
</script>
<style>
.location__today {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

.location__current {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 100%;
  margin-bottom: 2rem;
}

.location__current__icon {
  height: 5rem;
  width: 5rem;
  margin-right: 1rem;
}

.location__current__temperature {
  font-size: 3rem;
  margin-right: 2rem;
}

.location__current__temperature sup {
  font-size: 1rem;
}

.location__current__details {
  font-size: 0.7rem;
}

.location__current__favorite {
  margin-left: auto !important;
}

@media (max-width: 940px) {
  .location__current__icon {
    height: 3rem;
    width: 3rem;
  }
  .location__current__temperature {
    font-size: 2rem;
  }
}
</style>
