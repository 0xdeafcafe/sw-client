
import { DisplayProps } from "components/types";
import React from "react";
import { RootDisplay } from "./RootDisplay";

import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


const props: DisplayProps = {
    currentRoot: "Vehicles",
    item: {
        characters: [],
        created: "",
        director: "",
        edited: "",
        episode_id: 0,
        opening_crawl: "",
        planets: [],
        producer: "",
        release_date: "",
        species: [],
        starships: [],
        title: "",
        url: "",
        vehicles: []
      }
};

it("renders correctly when there are no items", () => {
  const wrapper = mount(<RootDisplay {...props} />)
  expect(wrapper).toMatchSnapshot();
});
