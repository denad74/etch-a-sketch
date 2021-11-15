import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./Col.css";

export default function Col(props) {
  const [newColor, setNewColor] = useState("#fff");

  const createRandomColor = () => {
    setNewColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  function changeColorOnEnter() {
    props.randomColorIsOn ? createRandomColor() : setNewColor(props.color);
  }

  return (
    <div
      onMouseEnter={changeColorOnEnter}
      className="col"
      style={{
        backgroundColor: newColor,
        width: 960 / props.width,
        height: 960 / props.width,
      }}
    ></div>
  );
}
