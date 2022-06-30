import style from "./App.module.scss";
import WavePlayer from "./lib";
const { layout } = style;

const track = {
  url: "/drubs.mp3",
  albumCover: "img/darkside.png",
  album: "Darkside of the Moon",
  artist: "Pink Floyd",
  trackTitle: "Any Colour You Like",
};

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
      <WavePlayer
        track={track}
        handleSkipNext={() =>
          console.log("next, handled from the tippity toppity")
        }
        handleSkipPrevious={() =>
          console.log("previous, handled from the tippity toppity")
        }
      />
    </div>
  );
}

export default App;
