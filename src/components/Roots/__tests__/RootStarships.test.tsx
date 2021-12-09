import { StarhsipProps } from "components/types";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import initialState from "reducers/initial-state";

import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { RootStarships } from "../RootStarships";

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore(initialState);

const props: StarhsipProps = {
  item: {
    name: "",
    model: "",
    manufacturer: "",
    cargo_capacity: "",
    hyperdrive_rating: "",
    consumables: "",
    cost_in_credits: "",
    crew: "",
    length: "",
    max_atmosphering_speed: "",
    passengers: "",
    starship_class: "",
    films: ["test"],
    pilots: ["test"],
    url: "",
  },
  setIsItemFavourite: (boolean: boolean) => null,
  isItemFavourite: false,
};

it("renders correctly when there are no items", () => {
  const wrapper = mount(
    <Provider store={store}>
      <RootStarships {...props} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
