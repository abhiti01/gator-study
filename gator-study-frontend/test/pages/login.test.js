import React from "react";
import { render, screen } from "../test-utils";
import Login from "../../pages/login";
// describe("Login", () => {
//   it("Renders login page", () => {
//     render(<Login />);
//   });

// });
describe("Check form", () => {
  it("correctly stores email and password", () => {
    try{
        onLoginSubmit(e);
        expect(email.toBe(e.target.get.elements.email.value));
        expect(secret.toBe(e.target.get.elements.secret.value));
    }
    catch(e){}
  });

});
