export function postPaste(language, retention, content) {
  return {
    type: "PASTE_POST_REQUESTED",
    language,
    retention,
    content
  };
}

export function getPaste(pasteId) {
  return {
    type: "PASTE_GET_REQUESTED",
    pasteId
  };
}
