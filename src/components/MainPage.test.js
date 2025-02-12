import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters Robots", () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "a",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

it("filters Robots correctly", () => {
  const filteredRobots = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
  ];
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ],
    searchField: "Leanne",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
});

it("fileters Robots correctly 2", () => {
  const filteredRobots = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
  ];
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ],
    searchField: "Xavier",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterRobots()).toEqual([]);
});
