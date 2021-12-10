import rootReducer from "reducers";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";

export const sagaMiddleware = createSagaMiddleware();

export default () => {
  //@ts-ignore
  const Enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    Enhancers(applyMiddleware(thunk, sagaMiddleware))
  );
};
