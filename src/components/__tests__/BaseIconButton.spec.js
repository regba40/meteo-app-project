import BaseIconButton from "@/components/base/BaseIconButton.vue";
import { render } from "@testing-library/vue";
import { describe, it } from "vitest";

describe("Testing BaseIconButton.vue", () => {
  it("should render a button with given slot", () => {
    const { getByRole, getByText } = render(BaseIconButton, {
      slots: {
        default: "Slot content",
      },
      mocks: {
        t: () => {},
      },
    });
    getByRole("button");
    getByText("Slot content");
  });
});
