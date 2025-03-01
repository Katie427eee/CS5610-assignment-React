import React, { useContext } from "react";
import { GridContext } from "../context/GridProvider";
import Cell from "./Cell";

const Grid = () => {
  const { gridState } = useContext(GridContext);
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(2, 100px)", 
      gap: "2px", 
      justifyContent: "center", 
      alignItems: "center" 
    }}>
      {gridState.map((_, index) => (
        <Cell key={index} index={index} />
      ))}
    </div>
  );
};

export default Grid;
