import { getRoots } from './api';
import {
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,
} from './constants';

export const fetchRoots = () => dispatch => {
	dispatch({ type: FETCH_ROOTS });

	const request = getRoots();

	return request.then(
		resp => dispatch({ type: FETCH_ROOTS_SUCCESS, payload: resp }),
		error => dispatch({ type: FETCH_ROOTS_FAILURE, payload: error }),
	);
};
