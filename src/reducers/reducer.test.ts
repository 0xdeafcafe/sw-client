import React from "react";
import { State } from "components/types";
import reducers from "reducers";

const state: State = {
  roots: {
    isLoading: false,
    isBranchedRootLoading: false,
    payload: [],
    error: [],
    currentRoot: {
      count: 0,
      next: "",
      previous: "",
      results: [],
      k: "",
    },
    branchedRoot: [],
  },
};

it("updates dataState on call of FETCH_ROOTS", () => {
  const newState: State = {
    roots: {
      isLoading: true,
      isBranchedRootLoading: false,
      payload: [],
      error: [],
      currentRoot: {
        count: 0,
        next: "",
        previous: "",
        results: [],
        k: "",
      },
      branchedRoot: [],
    },
  };

  const nextState = reducers(state, { type: "@@internal/FETCH_ROOTS" });

  expect(newState).toEqual(nextState);
});

it("updates dataState on call of FETCH_ROOTS", () => {
  const resp = {
    people: "https://swapi.dev/api/people/",
    planets: "https://swapi.dev/api/planets/",
    films: "https://swapi.dev/api/films/",
    species: "https://swapi.dev/api/species/",
    vehicles: "https://swapi.dev/api/vehicles/",
    starships: "https://swapi.dev/api/starships/",
  };

  const nextState = reducers(state, {
    type: "@@internal/FETCH_ROOTS_SUCCESS",
    payload: resp,
  });

  const newState: State = {
    roots: {
      isLoading: false,
      isBranchedRootLoading: false,
      payload: {
        people: "https://swapi.dev/api/people/",
        planets: "https://swapi.dev/api/planets/",
        films: "https://swapi.dev/api/films/",
        species: "https://swapi.dev/api/species/",
        vehicles: "https://swapi.dev/api/vehicles/",
        starships: "https://swapi.dev/api/starships/",
      },
      error: [],
      currentRoot: {
        count: 0,
        next: "",
        previous: "",
        results: [],
        k: "",
      },
      branchedRoot: [],
    },
  };

  expect(newState).toEqual(nextState);
});

it("updates dataState on call of FETCH_ROOTS", () => {
  const newState: State = {
    roots: {
      isLoading: true,
      isBranchedRootLoading: false,
      payload: [],
      error: [],
      currentRoot: {
        count: 0,
        next: "",
        previous: "",
        results: [],
        k: "",
      },
      branchedRoot: [],
    },
  };

  const nextState = reducers(state, {
    type: "@@internal/FETCH_INVIDVIDUAL_ROOT",
  });

  expect(newState).toEqual(nextState);
});

it("updates dataState on call of FETCH_ROOTS", () => {
  const newState: State = {
    roots: {
      isLoading: false,
      isBranchedRootLoading: false,
      payload: [],
      error: [],
      currentRoot: {
        count: 82,
        next: "https://swapi.dev/api/people/?page=2",
        previous: null,
        results: [
          {
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            films: [
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/2/",
              "https://swapi.dev/api/films/3/",
              "https://swapi.dev/api/films/6/",
            ],
            species: [],
            vehicles: [
              "https://swapi.dev/api/vehicles/14/",
              "https://swapi.dev/api/vehicles/30/",
            ],
            starships: [
              "https://swapi.dev/api/starships/12/",
              "https://swapi.dev/api/starships/22/",
            ],
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            url: "https://swapi.dev/api/people/1/",
          },
        ],
        k: "people",
      },
      branchedRoot: [],
    },
  };

  const resp = {
    count: 82,
    next: "https://swapi.dev/api/people/?page=2",
    previous: null,
    results: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.dev/api/planets/1/",
        films: [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/",
        ],
        species: [],
        vehicles: [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/",
        ],
        starships: [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/",
        ],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.dev/api/people/1/",
      },
    ],
  };

  const nextState = reducers(state, {
    type: "@@internal/FETCH_INVIDVIDUAL_ROOT_SUCCESS",
    payload: { ...resp, k: "people" },
  });

  expect(newState).toEqual(nextState);
});
