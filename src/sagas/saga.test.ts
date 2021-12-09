import React from "react";

import { takeLatest, all, put } from "typed-redux-saga";
import { watcherSaga, fetchArrayRootAsync, getAllUrls } from "./saga";
import {
  FETCH_ARRAY_ROOT,
  FETCH_ARRAY_ROOT_ERROR,
  FETCH_ARRAY_ROOT_PENDING,
} from "../constants";
import { runSaga } from "redux-saga";

const promiseResponse = describe("saga", () => {
  beforeAll(() => {
    jest.mock("./saga", () => ({
      getRoot: jest.fn().mockImplementation(() => ({ type: "test" })),
    }));
  });
  const generator = watcherSaga();

  it("should wait for every FETCH_ARRAY_ROOT action and call fetchArrayRootAsync", () => {
    expect(generator.next().value).toEqual(
      takeLatest(FETCH_ARRAY_ROOT, fetchArrayRootAsync)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it("should be done on next iteration", () => {
    expect(generator.next().done).toBeTruthy();
  });

  it("should test the whole saga and return an error action", async () => {
    const dispatched: unknown[] = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchArrayRootAsync,
      {}
    );
    expect(dispatched).toEqual([{ type: FETCH_ARRAY_ROOT_ERROR }]);
  });
});
