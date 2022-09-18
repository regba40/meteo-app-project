<template>
  <nav class="nav">
    <router-link class="nav__brand" to="/"> Météo APP </router-link>
    <div class="nav__menu">
      <router-link :to="{ name: 'meteo-favorites' }">
        {{ t("nav.menu.favorites") }}
      </router-link>
      <BaseIconButton @click="toggleDark()" :title="t('nav.menu.dark_mode')">
        <DarkModeIcon data-testid="dark-mode-icon" v-if="!isDark" />
        <LightModeIcon data-testid="light-mode-icon" v-else />
      </BaseIconButton>
    </div>
  </nav>
</template>

<script setup>
import DarkModeIcon from "@/components/icons/DarkModeIcon.vue";
import LightModeIcon from "@/components/icons/LightModeIcon.vue";
import BaseIconButton from "./base/BaseIconButton.vue";
import { useDark, useToggle } from "@vueuse/core";
import { useI18n } from "vue-i18n";

// dark mode
const isDark = useDark({
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);

// i18n
const { t } = useI18n();
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.nav__brand {
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;
}

.nav__menu {
  display: flex;
  align-items: center;
}

.nav__menu > a {
  text-decoration: none;
  color: inherit;
  margin-right: 1rem;
}

.nav__menu > a:hover {
  text-decoration: underline;
  color: var(--color-main);
}
</style>
