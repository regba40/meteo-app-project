import TheNavbar from "@/components/TheNavbar.vue";
import { render, fireEvent, cleanup } from "@testing-library/vue";
import { afterEach, describe, it } from "vitest";
import { initI18n } from "../../locales";

describe("Testing TheNavbar.vue", () => {
  afterEach(cleanup);
  it("should render a nav", () => {
    const i18n = initI18n();
    const { getByRole } = render(TheNavbar, {
      global: {
        plugins: [i18n],
      },
    });
    getByRole("navigation");
  });
  it("should switch to dark mode", async () => {
    const i18n = initI18n();
    const { getByRole, getByTestId } = render(TheNavbar, {
      global: {
        plugins: [i18n],
      },
    });

    getByTestId("dark-mode-icon");

    const button = getByRole("button");
    await fireEvent.click(button);

    getByTestId("light-mode-icon");
  });
});
