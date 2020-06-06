import {call, put, takeEvery} from 'redux-saga/effects'
import {FETCH_POSTS, REQUEST_POSTS} from "./types";
import {hideLoader, showAlert, showLoader} from "./actions";

export default function* sagaWatcher () {
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker () {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({type: FETCH_POSTS, payload})
    yield put(hideLoader())
  } catch (e) {
    yield put(showAlert('Something went wront'))
    yield put(hideLoader())
  }
}

async function fetchPosts () {
  const response = await fetch('https`s://jsonplaceholder.typicode.com/posts?_limit=10')
  return await response.json()
}
