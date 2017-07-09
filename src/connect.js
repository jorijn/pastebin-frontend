import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";

export function mapStateToProps(state) {
  return {
    paste: state.paste,
    alerts: state.alerts
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default function connectStore(component) {
  return connect(mapStateToProps, mapDispatchToProps)(component);
}
