import { combineReducers } from "redux";
import initialState from "./initial-state";
import {
  FETCH_INVIDVIDUAL_ROOT,
  FETCH_INVIDVIDUAL_ROOT_FAILURE,
  FETCH_INVIDVIDUAL_ROOT_SUCCESS,
  FETCH_ROOTS,
  FETCH_ROOTS_FAILURE,
  FETCH_ROOTS_SUCCESS,
  FETCH_ARRAY_ROOT,
  FETCH_ARRAY_ROOT_PENDING,
  FETCH_ARRAY_ROOT_SUCCESS,
} from "../constants";
import { State } from "components/types";

export default combineReducers({
  roots: (state = initialState.roots, action) => {
    switch (action.type) {
      case FETCH_ROOTS:
        return { ...state as State, isLoading: true };

      case FETCH_ROOTS_FAILURE:
        return {
          isLoading: false,
          error: action.payload,
        };

      case FETCH_ROOTS_SUCCESS:
        return {
          ...state as State,
          isLoading: false,
          payload: action.payload,
        };

      case FETCH_INVIDVIDUAL_ROOT:
        return { ...state as State, isLoading: true };

      case FETCH_INVIDVIDUAL_ROOT_SUCCESS:
        return {
          ...state as State,
          isLoading: false,
          currentRoot: action.payload,
        };

      case FETCH_INVIDVIDUAL_ROOT_FAILURE:
        return {
          ...state as State,
          isLoading: false,
          error: action.payload,
          currentRoot: {},
        };

      case FETCH_ARRAY_ROOT: {
        return {
          ...state as State,
          branchedRoot: [],
        };
      }

      case FETCH_ARRAY_ROOT_PENDING: {
        return {
          ...state as State,
          isBranchedRootLoading: true,
          branchedRoot: action.payload,
        };
      }

      case FETCH_ARRAY_ROOT_SUCCESS: {
        return {
          ...state as State,
          isBranchedRootLoading: false,
        };
      }

      default:
        return state;
    }
  },
});
