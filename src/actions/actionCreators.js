export function postPaste(retention, language, content) {
  return {
    type: "PASTE_POST_REQUESTED",
    retention,
    language,
    content
  };
}

export function getPaste(hash) {
  return {
    type: "PASTE_GET_REQUESTED",
    hash
  };
}

export function dismissAlert(index) {
  return {
    type: "DISMISS_ALERT",
    index
  };
}
