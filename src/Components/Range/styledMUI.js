import styled from "@emotion/styled";
import { Slider } from "@mui/material";
const $railColor = "rgb(80, 100, 255)";
const $darkBG = "#252a31";
const $confirmColor = "#1a8d72";
const $clickColor = "rgb(157, 240, 173)";

export const RangeStyled = styled(Slider)({
  width: "25px",
  color: $railColor,
  height: 300,
  borderRadius: "5px",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 34,
    borderRadius: "5px",
    backgroundColor: $darkBG,
    boxShadow: `0px 5px 10px 3px ${$confirmColor}`,
    border: "2px solid currentColor",
    "&:hover, &.Mui-focused": {
      boxShadow: `0px 5px 13px 4px ${$clickColor}`,
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: $clickColor,
    boxShadow: `1px -10px 10px 4px ${$darkBG}`,
    color: $darkBG,

    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export function valuetext(value) {
  return (value * 100).toFixed(0);
}

export function preventHorizontalKeyboardNavigation(event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
  }
}

/**deprecated */
export function marks() {
  let m = [{ value: 0, label: "min" }];
  for (let index = 0; index < 9; index++) {
    m.push({
      value: Number(`0.${index + 1}`),
      label: `${index === 4 ? "1/2" : "-"}`,
    });
  }
  return [...m, { value: 1, label: "max" }];
}
