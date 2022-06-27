import { Typography } from "@mui/material";
import { useState } from "react";
import style from "./Range.module.scss";
import {
  marks,
  preventHorizontalKeyboardNavigation,
  RangeStyled,
  valuetext,
} from "./styledMUI";
const { container, label } = style;

function Range({ onChange, children, marks }) {
  const [range, setRange] = useState(0.7);
  const handleChange = e => {
    if (typeof onChange === "function") {
      onChange(e.target.value);
    }
    setRange(e.target.value);
  };

  return (
    <div className={container}>
      <Typography className={label}>{children || ""}</Typography>
      <RangeStyled
        orientation="vertical"
        value={range}
        onChange={e => handleChange(e)}
        min={0}
        max={1}
        step={0.01}
        onKeyDown={preventHorizontalKeyboardNavigation}
        valueLabelFormat={valuetext}
        aria-label={children || ""}
        valueLabelDisplay="auto"
        rail={{ color: "#ff0000" }}
        marks={marks || null}
      />
    </div>
  );
}

export default Range;
