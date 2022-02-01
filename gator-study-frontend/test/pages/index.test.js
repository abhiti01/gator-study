import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../test-utils";
import Home from "../../pages/index";
describe("Home", () => {
  it("Renders home page", () => {
    render(<Home />);
  

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    
  });
describe("check timer",() => {
  it("sets stage correctly",() =>{
    try {
      expect(switchState(0)[0]).toBe(0);
      done();
    } catch (error) {
      print(error);
    }
  });
});
});
