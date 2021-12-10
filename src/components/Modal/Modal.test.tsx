import { ModalProps } from "components/types";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store'
import Modal from "./Modal";
import initialState from "reducers/initial-state";

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const mockStore = configureStore();
configure({ adapter: new Adapter() });

const props: ModalProps = {
    displayName: "Species",
    result: function (): ReactNode {
       return (<p>the species name...</p>)
    },
    item: ["https://swapi.dev/api/species/2/"]
}

const store = mockStore(initialState);

it("has the correct text displayed", () => {
    const wrapper = mount(<Provider store = {store}><Modal {...props} /></Provider>)
    expect(wrapper).toMatchSnapshot();
})