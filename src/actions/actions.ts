import { getRoot, getRoots } from "../api";
import {
  FETCH_ARRAY_ROOT,
  FETCH_INVIDVIDUAL_ROOT,
  FETCH_INVIDVIDUAL_ROOT_FAILURE,
  FETCH_INVIDVIDUAL_ROOT_SUCCESS,
  FETCH_ROOTS,
  FETCH_ROOTS_FAILURE,
  FETCH_ROOTS_SUCCESS,
} from "../constants";
import { Action as AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { State } from "components/types";

export const fetchRoots =
  () => (dispatch: ThunkDispatch<State, unknown, AnyAction>) => {
    dispatch({ type: FETCH_ROOTS });

    const request = getRoots();

    return request.then(
      (resp) => dispatch({ type: FETCH_ROOTS_SUCCESS, payload: resp }),
      (error) => dispatch({ type: FETCH_ROOTS_FAILURE, payload: error })
    );
  };

export const fetchIndividualRoot =
  (k: string) => (dispatch: ThunkDispatch<State, unknown, AnyAction>) => {
    dispatch({ type: FETCH_INVIDVIDUAL_ROOT });

    const request = getRoot(k);

    let currentTab = "";

    if (k.includes("people")) {
      currentTab = "people";
    } else if (k.includes("planets")) {
      currentTab = "planets";
    } else if (k.includes("films")) {
      currentTab = "films";
    } else if (k.includes("species")) {
      currentTab = "species";
    } else if (k.includes("vehicles")) {
      currentTab = "vehicles";
    } else if (k.includes("starships")) {
      currentTab = "starships";
    }

    return request.then(
      (resp) =>
        dispatch({
          type: FETCH_INVIDVIDUAL_ROOT_SUCCESS,
          payload: { ...resp, k: currentTab },
        }),
      (error) =>
        dispatch({ type: FETCH_INVIDVIDUAL_ROOT_FAILURE, payload: error })
    );
  };

export const fetchArrayOfItems =
  (array: string[]) => (dispatch: ThunkDispatch<State, unknown, AnyAction>) =>
    dispatch({ type: FETCH_ARRAY_ROOT, payload: array });
