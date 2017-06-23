export function postPaste(retention, language, content) {
  return {
    type: "PASTE_POST_REQUESTED",
    retention,
    language,
    content
  };
}

export function getPaste(pasteId) {
  return {
    type: "PASTE_GET_REQUESTED",
    pasteId
  };
}
