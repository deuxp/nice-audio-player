import style from "./App.module.scss";
// import WavePlayer from "./nice-audio-player/Components/WavePlayer";
import WavePlayer from "./nice-audio-player";
const { layout } = style;

const track = "/drubs.mp3";

function App() {
  return (
    <>
      <WavePlayer url={track} />
    </>
  );
}

export default App;
