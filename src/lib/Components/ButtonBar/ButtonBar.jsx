import Forward10Icon from "@mui/icons-material/Forward10";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Replay10Icon from "@mui/icons-material/Replay10";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Button from "../Button";
import VolumeSlider from "../VolumeSlider";
import style from "./ButtonBar.module.scss";

function ButtonBar({
  handlePlayPause,
  handleFastForward,
  handleSkipPrevious,
  handleRewind,
  handleSkipNext,
  isPlaying,
  setUVolume,
}) {
  return (
    <>
      <section className={style.container}>
        <Button onClick={handleSkipPrevious} size="sm">
          <SkipPreviousIcon />
        </Button>
        <Button onClick={handleRewind} size="sm">
          <Replay10Icon />
        </Button>
        <Button onClick={handlePlayPause} style={{ margin: ".5rem" }} size="">
          {!isPlaying && <PlayCircleOutlineIcon fontSize="large" />}
          {isPlaying && <PauseCircleOutlineIcon fontSize="large" />}
        </Button>
        <Button onClick={handleFastForward} size="sm">
          <Forward10Icon />
        </Button>
        <Button onClick={handleSkipNext} size="sm">
          <SkipNextIcon />
        </Button>
      </section>
      <div className={style.slider__container}>
        <VolumeSlider setUVolume={setUVolume} />
      </div>
    </>
  );
}

export default ButtonBar;
