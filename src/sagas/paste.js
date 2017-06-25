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
    }
  } catch (e) {
    yield put({ type: "PASTE_POST_FAILED", message: e.message });
  }
}

function* getPaste(action) {
  try {
    const response = yield call(get, action.hash);

    if (response.status === 200) {
      const { data: paste } = response;
      yield put({ type: "PASTE_GET_SUCCEEDED", paste });
    }
  } catch (e) {
    yield put({ type: "PASTE_GET_FAILED", message: e.message });
  }
}

function* postPasteSaga() {
  yield takeLatest("PASTE_POST_REQUESTED", postPaste);
  yield takeLatest("PASTE_GET_REQUESTED", getPaste);
}

export default postPasteSaga;
