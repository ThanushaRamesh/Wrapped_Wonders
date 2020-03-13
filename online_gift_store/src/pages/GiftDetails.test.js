import React from "react";
import { render } from "@testing-library/react";
import GiftDetails from "./GiftDetails";
import About from "./About";

describe("<GiftDetails/>", () => {
  it("Renders without crashing", () => {
    const { getByText } = render(<GiftDetails />);
    expect(getByText("Special Black Forest Cake")).toBeInTheDocument();
  });

  describe("The default UI", () => {
    it("Renders GiftDetails Page", () => {
      const { getByText } = render(<GiftDetails />);
      expect(getByText("15 Euros")).toBeInTheDocument();
      //expect(getByText("Life is full")).toBeInTheDocument();
    });

    it("Has an add to cart button", () => {
      const { getByTestId } = render(<GiftDetails />);
      expect(getByTestId("addToCart").textContent).toBe("Add to cart");
    });
    it("Renders About Page", () => {
      const { getByText } = render(<About />);
      expect(getByText("About Us")).toBeInTheDocument();
      //expect(getByText("Life is full")).toBeInTheDocument();
    });
  });
});
