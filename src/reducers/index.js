import { combineReducers } from 'redux';
import initialState from './initial-state';
import { FETCH_ROOTS, FETCH_ROOTS_FAILURE, FETCH_ROOTS_SUCCESS } from '../constants';

export default combineReducers({
	roots: (state = initialState.roots, action) => {
		switch (action.type) {
			case FETCH_ROOTS:
				return { isLoading: true };

			case FETCH_ROOTS_FAILURE:
				return {
					isLoading: false,
					error: action.payload,
				};
			
			case FETCH_ROOTS_SUCCESS:
				return {
					isLoading: false,
					payload: action.payload,
				};
			
			default:
				return state;
		}
	}
});
