import { useWaveSurfer } from "../../Hooks/useWaveSurfer";
import AlbumArt from "../AlbumArt";
import ButtonBar from "../ButtonBar";
import style from "./WavePlayer.module.scss";
const { container } = style;
const img = "img/headshot.jpg";

function WavePlayer({ url }) {
  const {
    waveFormRef,
    handlePlayPause,
    isPlaying,
    handleSkipBackward,
    handleSkipForward,
    setUVolume,
  } = useWaveSurfer(url);

  return (
    <div className={container}>
      <AlbumArt img={img} />
      <div id="waveform" ref={waveFormRef} />
      <ButtonBar
        setUVolume={setUVolume}
        handlePlayPause={handlePlayPause}
        isPlaying={isPlaying}
        handleSkipForward={handleSkipForward}
        handleSkipBackward={handleSkipBackward}
      />
    </div>
  );
}

export default WavePlayer;
