import React from "react";
import "./input.css";

export default function Input(props) {
  return (
    <div className="input-component">
      <input type="text" onChange={props.updateState} id="name" placeholder="name here" />
      <input type="number" onChange={props.updateState} id="weight" placeholder="weight here" />
      <input type="text" onChange={props.updateState} id="diet" placeholder="diet here" />
      <button onClick={props.createDino}>submit</button>
    </div>
  );
}
