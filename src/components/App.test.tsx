import React from "react";
import { Provider } from "react-redux";
import { configure, mount } from "enzyme";
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import initialState from "../reducers/initial-state";
import thunk from "redux-thunk";
import App from "./App";

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

configure({ adapter: new Adapter() });

const store = mockStore(initialState);

it("renders correctly when there are no items", () => {
  const wrapper = mount(
    <Provider store={store}>
      <App children={undefined} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
