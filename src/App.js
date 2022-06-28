import style from "./App.module.scss";
import WavePlayer from "./nice-audio-player";
const { layout } = style;

const track = "/drubs.mp3";

function App() {
  return (
    <div
      style={{
        // border: "solid red 3px",
        width: "300px",
        position: "absolute",
        top: "3em",
        left: "calc(50vw - 150px)",
      }}
    >
      <WavePlayer url={track} />
    </div>
  );
}

export default App;
