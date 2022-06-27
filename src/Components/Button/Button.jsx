import React from "react";
import style from "./Button.module.scss";
const { button } = style;

function Button(props) {
  if (props.href)
    return (
      <a {...props} className={`${[button, style[props.size]].join(" ")}`}>
        {props.children}
      </a>
    );

  return (
    <>
      <button
        type="button"
        {...props}
        className={`${[button, style[props.size]].join(" ")}`}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
