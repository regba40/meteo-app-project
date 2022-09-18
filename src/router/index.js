import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MeteoSearch from "@/components/MeteoSearch.vue";
import MeteoFavorites from "@/components/MeteoFavorites.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "",
          name: "meteo-search",
          component: MeteoSearch,
        },
        {
          path: "favorites",
          name: "meteo-favorites",
          component: MeteoFavorites,
        },
      ],
    },
  ],
});

export default router;
