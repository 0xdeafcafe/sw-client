import App from './Components/App';
import Home from './Components/Home';
import createStore from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = (
	<Provider store={createStore()}>
		<Router>
			<App>
				<Switch>
					<Route
						component={Home}
						exact
						path={'/'}
					/>
				</Switch>
			</App>
		</Router>
	</Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
