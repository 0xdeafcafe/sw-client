import { PlanetProps } from "components/types";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import initialState from "reducers/initial-state";

import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { RootPlanets } from "../RootPlanets";

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore(initialState);

const props: PlanetProps = {
  item: {
    name: "",
    diameter: "",
    orbital_period: "",
    population: "",
    rotation_period: "",
    surface_water: "",
    gravity: "",
    terrain: "",
    climate: "",
    films: ["test"],
    residents: ["test"],
    url: "",
  },
  isItemFavourite: false,
  setIsItemFavourite: (boolean: boolean) => null,
};

it("renders correctly when there are no items", () => {
  const wrapper = mount(
    <Provider store={store}>
      <RootPlanets {...props} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
