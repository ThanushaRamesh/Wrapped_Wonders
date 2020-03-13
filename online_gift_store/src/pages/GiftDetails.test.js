import React from "react";
import { render } from "@testing-library/react";
import GiftDetails from "./GiftDetails";

describe("<ToDo/>", () => {
  it("Renders without crashing", () => {
    const { getByText } = render(<GiftDetails />);
    expect(getByText("Special Black Forest Cake")).toBeInTheDocument();
  });

  describe("The default UI", () => {
    it("Renders two default todo items", () => {
      const { getByText } = render(<GiftDetails />);
      expect(getByText("15 Euros")).toBeInTheDocument();
      //expect(getByText("Life is full")).toBeInTheDocument();
    });

    it("Has an add to cart button", () => {
      const { getByTestId } = render(<GiftDetails />);
      expect(getByTestId("addToCart").textContent).toBe("Add to cart");
    });
  });
});
