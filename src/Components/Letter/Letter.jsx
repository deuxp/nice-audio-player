import { Typography } from "@mui/material";
import style from "./Letter.module.scss";
const { container } = style;

function Letter({ children }) {
  return <div className={container}>{children}</div>;
}

export default Letter;
