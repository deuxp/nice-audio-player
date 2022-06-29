// import Slider from "@mui/material/Slider";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import style from "./VolumeSlider.module.scss";

import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

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
            color: "rgba(0,0,0, 1)",
            "&:hover": {
              boxShadow: "0 0 3px 0px rgba(0,0,0,0.7)",
            },
          },
          "& .MuiSlider-track": {
            color: "rgba(0,0,0, 1)",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "rgba(0,0,0, 1)",
          },
        }}
      />
      <VolumeUpIcon fontSize="small" className={style.volumeIcon} />
    </div>
  );
}

export default VolumeSlider;
