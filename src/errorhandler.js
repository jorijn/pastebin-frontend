/* eslint-disable no-console */
import Raven from "raven-js";

export default function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });

  if (window.console && console.error) {
    console.error(ex);
  }
}
