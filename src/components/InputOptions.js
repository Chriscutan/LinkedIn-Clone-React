import React from "react";
import "../css/InputOptions.css";

function InputOptions({ Icon, title, color }) {
  return (
    <div className="inputOptions">
      <Icon style={{ color: color }} />
      <h3>{title}</h3>
    </div>
  );
}

export default InputOptions;
