import {effects} from 'redux-saga';
import * as consts from './../constants';
import * as api from './../api';

export default function* () {
  yield effects.all([
    effects.fork(fetch),
  ]);
}

function* fetch() {
  while(true) {
    const action = yield effects.take(consts.FETCH_ROOTS);

    yield effects.put({
      type: consts.FETCH_LOADING,
      loading: true,
    });

    const results = yield effects.call(api.getRoot, action.root);

    yield effects.put({
      type: consts.FETCH_LOADING,
      loading: false,
    });

    if (results) {
      yield effects.put({
        type: action.returnAction,
        payload: results,
      });
    } else {
      yield effects.put({
        type: consts.FETCH_ROOTS_FAILURE,
        error: results,
      });
    }
  }
}