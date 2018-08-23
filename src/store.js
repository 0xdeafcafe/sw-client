import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default () => {
	return createStore(
		rootReducer,
		applyMiddleware(thunk),
	);
};
