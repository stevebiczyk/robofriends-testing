import { shallow } from "enzyme";
import React from "react";
import App from "./App";

it("expect to render App component", () => {
  const mockStore = {
    robots: [],
    searchField: "",
    isPending: false,
  };
  expect(shallow(<App />)).toMatchSnapshot();
});
