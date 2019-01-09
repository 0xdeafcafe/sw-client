import { combineReducers } from 'redux';
import initialState from './initial-state';
import * as consts from '../constants';

export default combineReducers({
	roots: (state = initialState.roots, action) => {
		switch (action.type) {
			case consts.FETCH_LOADING:
				return { isLoading: action.loading };

			case consts.FETCH_ROOTS_FAILURE:
				return {
					error: action.payload,
				};
			
			case consts.FETCH_ROOTS_SUCCESS:
				return {
					payload: action.payload,
				};
			
			default:
				return state;
		}
	}
});
