<template>
  <div class="meteo-search">
    <div class="meteo-search__input">
      <input
        type="search"
        v-model="typingText"
        :placeholder="t('meteo.search.placeholder')"
        @keyup.enter="search()"
      />
      <BaseIconButton @click="search()" :title="t('meteo.search.action')">
        <SearchIcon />
      </BaseIconButton>
    </div>
    <MeteoSearchVisualisation :location-name="locationName" />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import SearchIcon from "./icons/SearchIcon.vue";
import BaseIconButton from "./base/BaseIconButton.vue";
import MeteoSearchVisualisation from "./MeteoSearchVisualisation.vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const typingText = ref("");
const locationName = ref("");

// i18n
const { t } = useI18n();

// routing
const route = useRoute();
const router = useRouter();

function search() {
  router.push({
    name: "meteo-search",
    query: {
      location: typingText.value,
    },
  });
}

watch(
  route,
  () => {
    let queryLocation = route.query.location;
    typingText.value = queryLocation;
    locationName.value = queryLocation;
  },
  { deep: true, immediate: true }
);
</script>
<style scoped>
.meteo-search__input {
  display: flex;
  margin-bottom: 1rem;
}
.meteo-search__input input[type="search"] {
  flex: auto;
  background: transparent;
  border: 1px solid var(--color-border);
  padding: 0.5rem;
  color: inherit;
  font-size: 1.2rem;
}

.meteo-search__input input[type="search"]:focus {
  outline: none !important;
  border: 1px solid var(--color-main);
}

.meteo-search__input button {
  margin: 0 1rem;
}
</style>
