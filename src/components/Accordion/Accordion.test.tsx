
import { AccordionProps } from "components/types";
import React from "react";


import { ItemAccordion } from "./Accordion";

import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


const props: AccordionProps = {
  currentRoot: "",
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
}

it("renders correctly when there are no items", () => {
  const wrapper = mount(<ItemAccordion {...props} />)
  expect(wrapper).toMatchSnapshot();
});
