import React, { useContext } from "react";
import { GridContext } from "../context/GridProvider";

const Cell = ({ index }) => {
  const { gridState, toggleCell } = useContext(GridContext);

  return (
    <div
      onClick={() => toggleCell(index)}
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid grey",
        backgroundColor: gridState[index] ? "black" : "white",
        display: "inline-block",
      }}
    ></div>
  );
};

export default Cell;
