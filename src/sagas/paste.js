import { put, takeLatest } from "redux-saga/effects";

function* postPaste(action) {
  try {
    // const user = yield call(Api.fetchUser, action.payload.userId);
    const paste = {
      language: action.language,
      content: action.content,
      id: "2d9d6f7"
    }; // stub
    yield put({ type: "PASTE_POST_SUCCEEDED", paste });
  } catch (e) {
    yield put({ type: "PASTE_POST_FAILED", message: e.message });
  }
}

function* postPasteSaga() {
  yield takeLatest("PASTE_POST_REQUESTED", postPaste);
}

export default postPasteSaga;
