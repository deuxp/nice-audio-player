import React from "react";
import Button from "../Button";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import VolumeSlider from "../VolumeSlider";
import style from "./ButtonBar.module.scss";

function ButtonBar({
  handlePlayPause,
  handleSkipForward,
  handleSkipBackward,
  isPlaying,
  setUVolume,
}) {
  return (
    <>
      <section className={style.container}>
        <Button onClick={handleSkipBackward} size="sm">
          <FastRewindIcon />
        </Button>
        <Button onClick={handlePlayPause} style={{ margin: "1rem" }} size="lg">
          {!isPlaying && <PlayCircleOutlineIcon fontSize="large" />}
          {isPlaying && <PauseCircleOutlineIcon fontSize="large" />}
        </Button>
        <Button onClick={handleSkipForward} size="sm">
          <FastForwardIcon />
        </Button>
      </section>
      <div className={style.slider__container}>
        <VolumeSlider setUVolume={setUVolume} />
      </div>
    </>
  );
}

export default ButtonBar;
