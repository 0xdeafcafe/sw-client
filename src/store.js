import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

export default () => createStore(
	rootReducer,
	applyMiddleware(thunk),
);
