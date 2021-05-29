import React, { useState } from "react";
import Clipboard from "react-clipboard.js"

const ColorPalette = (props) => {

    const [currentColor, setCurrentColor] = useState(props.colorName);
    const [currentClass, setCurrentClass] = useState("color-palette");
    const setCopyStatus = () => {
        setCurrentColor("Copied!");
        setCurrentClass("copied");
        setTimeout(() => {
            setCurrentColor(props.colorName);
            setCurrentClass("color-palette");
        }, 1000);
    };

    return (
        <Clipboard
            data-clipboard-text={props.hexCode}
            style={{ background: "none", border: "none", fontFamily: "inherit" }}
        >
            <div
                className={currentClass}
                id={props.hexCode}
                data-hover={props.hexCode}
                style={{ backgroundColor: props.hexCode }}
                onClick={setCopyStatus}
            >
                {currentColor}
            </div>
        </Clipboard>
    );
}
export default ColorPalette;