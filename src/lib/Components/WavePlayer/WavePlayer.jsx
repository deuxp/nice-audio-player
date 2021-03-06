import { useWaveSurfer } from "../../hooks/useWaveSurfer";
import AlbumArt from "../AlbumArt";
import ButtonBar from "../ButtonBar";
import Timer from "../Timer";
import style from "./WavePlayer.module.scss";
const { container } = style;

function WavePlayer({ track, handleSkipPrevious, handleSkipNext }) {
  const { url } = track;

  const {
    waveFormRef,
    isPlaying,
    setUVolume,
    handlePlayPause,
    handleRewind,
    handleFastForward,
    duration,
    currentTime,
    isReady,
  } = useWaveSurfer(url);

  return (
    <div className={container}>
      <AlbumArt {...track} />
      <div id="waveform" ref={waveFormRef} />
      <Timer
        isReady={isReady}
        currentTime={currentTime}
        duration={duration}
        isPlaying={isPlaying}
      />
      <ButtonBar
        setUVolume={setUVolume}
        handlePlayPause={handlePlayPause}
        isPlaying={isPlaying}
        handleFastForward={handleFastForward}
        handleSkipPrevious={handleSkipPrevious}
        handleSkipNext={handleSkipNext}
        handleRewind={handleRewind}
      />
    </div>
  );
}

export default WavePlayer;
