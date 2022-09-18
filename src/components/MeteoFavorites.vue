<template>
  <div class="favorites">
    <div class="favorites__title">
      {{ t("meteo.favorites.list") }}
    </div>
    <div v-if="!hasFavorites" class="favorites__empty">
      {{ t("meteo.favorites.empty_list") }}
    </div>
    <div v-for="favorite in favorites" :key="favorite" class="favorites__item">
      <router-link
        :to="{ name: 'meteo-search', query: { location: favorite } }"
      >
        {{ favorite }}
      </router-link>
      <BaseIconButton
        :title="t('meteo.favorites.remove_location')"
        @click="toggleFavorite(favorite)"
      >
        <FavoriteIcon v-if="isFavorite(favorite)" />
        <FavoriteOutlineIcon v-else />
      </BaseIconButton>
    </div>
  </div>
</template>
<script setup>
import { useMeteoFavorites } from "@/composables/meteoFavorites";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import BaseIconButton from "./base/BaseIconButton.vue";
import FavoriteIcon from "./icons/FavoriteIcon.vue";
import FavoriteOutlineIcon from "./icons/FavoriteOutlineIcon.vue";

const { favorites, isFavorite, toggleFavorite } = useMeteoFavorites();
const hasFavorites = computed(() => favorites.value.length > 0);

// i18n
const { t } = useI18n();
</script>
<style scoped>
.favorites__title {
  font-weight: bold;
  margin-bottom: 1rem;
}

.favorites__empty {
  font-size: 0.9rem;
  font-style: italic;
}

.favorites__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  margin-bottom: 3px;
  padding: 0.5rem 1rem;
  font-weight: 400;
}
.favorites__item a {
  text-decoration: none;
  color: inherit;
}
.favorites__item button svg {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
