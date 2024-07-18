import React, { useState } from "react";
import "./ColorMatrix.css"; // Create a CSS file for styling

const ColorMatrix = () => {
  const [colors, setColors] = useState(Array(9).fill(""));
  const [clickOrder, setClickOrder] = useState([]);
  const [lastClicked, setLastClicked] = useState(false);

  const handleClick = (index) => {
    if (!colors[index] && !lastClicked) {
      const newColors = [...colors];
      newColors[index] = "green";
      setColors(newColors);
      setClickOrder([...clickOrder, index]);
      console.log(clickOrder);

      if (clickOrder.length === 8) {
        setLastClicked(true);
        console.log(clickOrder);
        console.log(clickOrder.concat(index));
        changeToOrange(newColors, clickOrder.concat(index));
      }
    }
  };

  const changeToOrange = (newColors, order) => {
    order.forEach((index, i) => {
      setTimeout(() => {
        newColors[index] = "orange";
        setColors([...newColors]);
      }, i * 500);
    });
  };

  return (
    <div className="matrix">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default ColorMatrix;
