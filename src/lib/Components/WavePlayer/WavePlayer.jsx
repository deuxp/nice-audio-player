import { useWaveSurfer } from "../../hooks/useWaveSurfer";
import AlbumArt from "../AlbumArt";
import ButtonBar from "../ButtonBar";
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
      <AlbumArt
        {...track}
        isReady={isReady}
        currentTime={currentTime}
        duration={duration}
        isPlaying={isPlaying}
      />
      <div id="waveform" ref={waveFormRef} />

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
