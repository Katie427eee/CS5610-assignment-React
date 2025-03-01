import React, { createContext, useState } from "react";

export const GridContext = createContext();

const GridProvider = ({ children }) => {
  const [gridState, setGridState] = useState([false, false, false, false]);

  const toggleCell = (index) => {
    setGridState((prev) => {
      const newGrid = [...prev];
      newGrid[index] = !newGrid[index];
      return newGrid;
    });
  };

  const onCount = gridState.filter(Boolean).length;

  return (
    <GridContext.Provider value={{ gridState, toggleCell }}>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vh" 
      }}>
        <h2>Count: {onCount}</h2>
        {children}
      </div>
    </GridContext.Provider>
  );
};

export default GridProvider;
