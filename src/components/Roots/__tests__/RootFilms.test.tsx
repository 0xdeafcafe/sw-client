import { FilmProps } from "components/types";
import React from "react";
import { RootFilms } from "../RootFilms";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
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
        name: "Jabba Desilijic Tiure",
        height: "175",
        mass: "1,358",
        hair_color: "n/a",
        skin_color: "green-tan, brown",
        eye_color: "orange",
        birth_year: "600BBY",
        gender: "hermaphrodite",
        homeworld: "https://swapi.dev/api/planets/24/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/4/",
        ],
        species: ["https://swapi.dev/api/species/5/"],
        vehicles: [],
        starships: [],
        created: "2014-12-10T17:11:31.638000Z",
        edited: "2014-12-20T21:17:50.338000Z",
        url: "https://swapi.dev/api/people/16/",
      },
    ],
  },
};
const store = mockStore(initialState);

const props: FilmProps = {
  item: {
    characters: ["test"],
    created: "01-01-1976",
    director: "George Lucas",
    edited: "01-01-1976",
    episode_id: 0,
    opening_crawl: "far far away...",
    planets: [],
    producer: "Gary Kurtz",
    release_date: "01-01-1976",
    species: ["test"],
    starships: ["test"],
    title: "A new hope",
    url: "",
    vehicles: ["test"],
  },
  setIsItemFavourite: () => null,
  isItemFavourite: true,
};

it("renders correctly when there are no items", () => {
  const wrapper = mount(
    <Provider store={store}>
      <RootFilms {...props} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
