import React from "react";
import "./dino.css";
// props: name, weight, diet
export default function(props) {
  return (
    <div className="dino-component">
      name: {props.name}
      <br />
      weight: {props.weight} <br />
      diet: {props.diet}
    </div>
  );
}
