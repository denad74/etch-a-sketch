import React from "react";

import "./Grid.css";
import Row from "./Row";

const Grid = (props) => {
  let rows = [];

  for (let i = 0; i < props.width; i++) {
    rows.push(
      <Row
        key={`row${i}`}
        width={props.width}
        color={props.color}
        randomColorIsOn={props.randomColorIsOn}
      />
    );
  }

  return <div className="grid-content">{rows}</div>;
};
export default Grid;
