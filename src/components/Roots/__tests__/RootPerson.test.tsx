import { PersonProps } from "components/types";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { RootPerson } from "../RootPerson";
configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  roots: {
    isLoading: true,
    isBranchedRootLoading: false,
    payload: void 0,
    error: void 0,
    currentRoot: {},
    branchedRoot: [
      {
        name: "Hutt",
        classification: "gastropod",
        designation: "sentient",
        average_height: "300",
        skin_colors: "green, brown, tan",
        hair_colors: "n/a",
        eye_colors: "yellow, red",
        average_lifespan: "1000",
        homeworld: "https://swapi.dev/api/planets/24/",
        language: "Huttese",
        people: ["https://swapi.dev/api/people/16/"],
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/3/",
        ],
        created: "2014-12-10T17:12:50.410000Z",
        edited: "2014-12-20T21:36:42.146000Z",
        url: "https://swapi.dev/api/species/5/",
      },
    ],
  },
};

const store = mockStore(initialState);

const props: PersonProps = {
  item: {
    created: "",
    edited: "",
    birth_year: "",
    eye_color: "",
    films: ["test"],
    gender: "",
    hair_color: "",
    height: "",
    homeworld: "",
    name: "",
    skin_color: "",
    species: ["test"],
    starships: ["test"],
    url: "",
    vehicles: ["test"],
    mass: "",
  },
  isItemFavourite: false,
  setIsItemFavourite: (boolean: boolean) => null,
};

it("renders correctly when there are no items", () => {
  const wrapper = mount(
    <Provider store={store}>
      <RootPerson {...props} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
