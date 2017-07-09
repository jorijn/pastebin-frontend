import { put, takeLatest, call } from "redux-saga/effects";
import { create, get } from "../api";

function* postPaste(action) {
  try {
    const response = yield call(
      create,
      action.content,
      action.language,
      action.retention
    );

    if (response.status === 200) {
      const { data: paste } = response;
      yield put({ type: "PASTE_POST_SUCCEEDED", paste });
    } else {
      throw new Error(
        `Post failed with status code ${response.status} (${response.statusText})`
      );
    }
  } catch (e) {
    const reasons = e.response.data && e.response.status === 422
      ? Object.keys(e.response.data).reduce(
          (messages, key) => messages.concat(e.response.data[key]),
          []
        )
      : [];

    yield put({ type: "PASTE_POST_FAILED", message: e.message, reasons });
  }
}

function* getPaste(action) {
  try {
    const response = yield call(get, action.hash);

    if (response.status === 200) {
      const { data: paste } = response;
      yield put({ type: "PASTE_GET_SUCCEEDED", paste });
    } else {
      throw new Error(
        `Request failed with status code ${response.status} (${response.statusText})`
      );
    }
  } catch (e) {
    yield put({
      type: "PASTE_GET_FAILED",
      message: e.message,
      hash: action.hash
    });
  }
}

function* postPasteSaga() {
  yield takeLatest("PASTE_POST_REQUESTED", postPaste);
  yield takeLatest("PASTE_GET_REQUESTED", getPaste);
}

export default postPasteSaga;
