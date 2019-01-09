import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import sagas from './sagas';

const reduxSagaMiddleware = createSagaMiddleware();

export default () => {
	const store = createStore(
		rootReducer,
		typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(reduxSagaMiddleware),
		applyMiddleware(thunk),
	);

	[sagas].forEach(saga => {
		reduxSagaMiddleware.run(saga);
	});

	return store;
};