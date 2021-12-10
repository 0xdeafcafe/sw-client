import {
  FETCH_ARRAY_ROOT,
  FETCH_ARRAY_ROOT_PENDING,
  FETCH_ARRAY_ROOT_SUCCESS,
  FETCH_ARRAY_ROOT_ERROR,
} from "../constants";
import { takeLatest, put, call } from "typed-redux-saga";
import { getRoot } from "api";

export function* watcherSaga() {
  yield takeLatest(FETCH_ARRAY_ROOT, fetchArrayRootAsync);
}

export async function getAllUrls(action: string[]) {
  return await Promise.all(action.map((url) => getRoot(url)));
}

export function* fetchArrayRootAsync(action: any) {
  try {
    const response = yield* call(getAllUrls as any, [...action.payload]);
    yield put({ type: FETCH_ARRAY_ROOT_PENDING, payload: response });
    yield put({ type: FETCH_ARRAY_ROOT_SUCCESS });
  } catch (e) {
    yield put({ type: FETCH_ARRAY_ROOT_ERROR });
  }
}
