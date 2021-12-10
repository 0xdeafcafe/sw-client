import App from "./components/App";
import Home from "./components/Home";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import createStore from "./store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { sagaMiddleware } from './store';
import { watcherSaga } from './sagas/saga'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
`;

const routes = (
  <Provider store={createStore()}>
    <Router>
      <GlobalStyle />
      <App>
        <Switch>
          <Route component={Home} exact path={"/"} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(routes, document.getElementById("root"));
