import { SpeciesProps } from "components/types";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import initialState from "reducers/initial-state";

import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { RootSpecies } from "../RootSpecies";

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore(initialState);

const props: SpeciesProps = {
  item: {
    name: "",
    average_height: "",
    average_lifespan: "",
    classification: "",
    designation: "",
    eye_colors: "",
    hair_colors: "",
    language: "",
    skin_colors: "",
    films: ["test"],
    people: ["test"],
    url: "",
  },
  isItemFavourite: false,
  setIsItemFavourite: (boolean: boolean) => null,
};

it("renders correctly when there are no items", () => {
  const wrapper = mount(
    <Provider store={store}>
      <RootSpecies {...props} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
