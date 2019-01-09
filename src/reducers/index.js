import { combineReducers } from 'redux';
import initialState from './initial-state';
import * as consts from '../constants';

export default combineReducers({
	roots: (state = initialState.roots, action) => {
		switch (action.type) {
			case consts.FETCH_LOADING:
				return {
					...state,
					isLoading: action.loading,
				};

			case consts.FETCH_ROOTS_FAILURE:
				return {
					...state,
					error: action.payload,
				};
			
			case consts.FETCH_ROOTS_SUCCESS:
				return {
					...state,
					payload: action.payload,
				};

			case consts.FETCH_CONTENT_SUCCESS:
				return {
					...state,
					[action.tab]: action.payload,
				};
			
			default:
				return state;
		}
	}
});
