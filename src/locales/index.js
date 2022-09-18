import { createI18n } from "vue-i18n";
import fr from "./fr.json";

export function initI18n(locale = "fr") {
  return createI18n({
    legacy: false,
    locale,
    messages: {
      fr,
    },
  });
}
