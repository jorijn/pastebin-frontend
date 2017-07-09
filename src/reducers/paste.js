export default function paste(state = [], action) {
  switch (action.type) {
    case "PASTE_POST_SUCCEEDED":
    case "PASTE_GET_SUCCEEDED":
      return action.paste;

    case "PASTE_GET_FAILED":
      return {
        hash: action.hash,
        content: `throw new Error('Paste requesting failed: ${action.message}');`,
        language: "javascript"
      };

    default:
      return state;
  }
}
