import React, { useEffect, useState } from "react";
import style from "./VolumeSlider.module.scss";
import Slider from "@mui/material/Slider";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

function VolumeSlider({ setUVolume }) {
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    setUVolume(prevVolume => volume);
  }, [volume]);

  return (
    <div className={style.container}>
      <VolumeDownIcon fontSize="small" className={style.volumeIcon} />
      <Slider
        min={0}
        max={1}
        step={0.01}
        aria-label="Volume"
        value={volume}
        defaultValue={0.5}
        size="small"
        onChange={e => setVolume(e.target.value)}
        className={style.slider}
        sx={{
          "& .MuiSlider-thumb": {
            color: "rgb(45,56,6)",
            boxShadow: "0 0 15px 3px #10ac84",
            "&:hover": {
              boxShadow: "0 0 17px 5px #10ac84",
            },
          },
          "& .MuiSlider-track": {
            color: "rgba(63, 217, 91, .35)",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "rgba(80, 100, 255, 1)",
          },
        }}
      />
      <VolumeUpIcon fontSize="small" className={style.volumeIcon} />
    </div>
  );
}

export default VolumeSlider;
