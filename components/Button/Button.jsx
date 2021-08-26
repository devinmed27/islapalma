import React from "react";
import s from "./Button.module.scss";

const Button = ({
  secondary = false,
  text,
  disabled = false,
  width = "",
  height = "",
  fontSize = "",
  onClick = ()=>{console.log('pressed')}
}) => {
  let size = {
    width: width,
    height: height,
    fontSize: fontSize,
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={secondary ? s.button2 : s.button}
      style={size}
    >
      {text}
    </button>
  );
};

export default Button;
