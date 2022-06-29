import Forward10Icon from "@mui/icons-material/Forward10";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Replay10Icon from "@mui/icons-material/Replay10";
import Button from "../Button";
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
          <Replay10Icon />
        </Button>
        <Button onClick={handlePlayPause} style={{ margin: "1rem" }} size="">
          {!isPlaying && <PlayCircleOutlineIcon fontSize="large" />}
          {isPlaying && <PauseCircleOutlineIcon fontSize="large" />}
        </Button>
        <Button onClick={handleSkipForward} size="sm">
          <Forward10Icon />
        </Button>
      </section>
      <div className={style.slider__container}>
        <VolumeSlider setUVolume={setUVolume} />
      </div>
    </>
  );
}

export default ButtonBar;
