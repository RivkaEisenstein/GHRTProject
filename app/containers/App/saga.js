import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import request from 'utils/request';

import {
  LAOD_EVENT,
  GET_EVENT,
  DELETE_EVENT
} from './constants';

import { ADD_EVENT } from '../AddEvent/constants';
import { EDIT_EVENT } from '../EditEvent/constants';
import {
  eventsLoaded,
  eventLoadingError,
  getEventSuccess,
  getEventError,
  addEventSuccess,
  addEventError,
  updateEventError,
  updateEventSuccess,
  deleteEventError,
  deleteEventSuccess,
} from './actions';


const baseUrl = '/api';

export function* getList() {
  const requestURL = `${baseUrl}/list`;
  try {
    const list = yield call(request, requestURL);
    yield put(eventsLoaded(list));
  } catch (err) {
    yield put(eventLoadingError(err));
  }
}

export function* get(action) {
  const requestURL = `${baseUrl}/get/${action.orderId}`;
  try {
    const order = yield call(request, requestURL);
    yield put(getEventSuccess(order));
  } catch (err) {
    yield put(getEventError(err));
  }
}

export function* update(action) {
  const requestURL = `${baseUrl}/update`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.event),
  };

  try {
    const list = yield call(request, requestURL, options);
    yield put(updateEventSuccess(action.event, list));
  } catch (err) {
    yield put(updateEventError(err));
  }
}

export function* add(action) {
  alert("i come here aaaaaaaaaa");
  const requestURL = `${baseUrl}/add`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.event),
  };

  try {
    const list = yield call(request, requestURL, options);
    alert("i come here");
    yield put(addEventSuccess(action.event, list));
  } catch (err) {
    yield put(addEventError(err));
  }
}

export function* remove(action) {
  const requestURL = `${baseUrl}/delete/${action.orderId}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const list = yield call(request, requestURL, options);
    yield put(deleteEventSuccess(list));
  } catch (err) {
    yield put(deleteEventError(err));
  }
}

export default function* loadData() {
  yield takeLatest(LAOD_EVENT, getList);
  yield takeEvery(GET_EVENT, get);
  yield takeEvery(EDIT_EVENT, update);
  yield takeEvery(DELETE_EVENT, remove);
  yield takeEvery(ADD_EVENT, add);
}
