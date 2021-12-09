import { VehicleProps } from "components/types";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import initialState from "reducers/initial-state";

import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { RootVehicles } from "../RootVehicles";

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const store = mockStore(initialState);

const props: VehicleProps = {
  item: {
    name: "",
    model: "",
    manufacturer: "",
    cargo_capacity: "",
    consumables: "",
    cost_in_credits: "",
    crew: "",
    length: "",
    max_atmosphering_speed: "",
    passengers: "",
    vehicle_class: "",
    films: ["test"],
    pilots: ["test"],
    url: "",
  },
  isItemFavourite: false,
  setIsItemFavourite: (boolean: boolean) => null,
};

it("renders correctly when there are no items", () => {
  const wrapper = mount(
    <Provider store={store}>
      <RootVehicles {...props} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
