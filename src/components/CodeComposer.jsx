import React from "react";
import "./CodeComposer.css";

export default class CodeComposer extends React.Component {
  componentDidMount() {
    this.textarea.focus();
  }

  render() {
    return (
      <textarea ref={ref => (this.textarea = ref)} className="CodeComposer" />
    );
  }
}
