import React from "react";
import ColorPalette from "./ColorPalette";

const ColorContainer = (props) => {
  return (
    <div className="color-container">
      {props.colors.map((color, index) => {
        return (
          <ColorPalette
            key={index}
            hexCode={color.colorCode}
            colorName={color.colorName}
          />
        );
      })}
    </div>
  );
};

export default ColorContainer;
