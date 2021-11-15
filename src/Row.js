import React from "react";
import "./Row.css";
import Col from "./Col";

const Row = (props) => {
  const { width, color } = props;

  let col = [];
  for (let i = 0; i < width; i++) {
    col.push(
      <Col
        key={`col${i}`}
        width={width}
        color={color}
        randomColorIsOn={props.randomColorIsOn}
      />
    );
  }

  return <div className="row">{col}</div>;
};
export default Row;
