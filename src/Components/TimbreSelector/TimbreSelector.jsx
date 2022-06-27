import { useState } from "react";
import WaveSelectorButton from "../WaveSelectorButton";
import style from "./TimbreSelector.module.scss";
const { container } = style;

function TimbreSelector() {
  const [selected, setSelected] = useState(`sine`);

  const wave = {
    SINE: "sine",
    TRIANGLE: "triangle",
    SQUARE: "square",
    SAW: "saw",
  };

  return (
    <div className={container}>
      <WaveSelectorButton
        onClick={setSelected}
        selected={wave.SINE === selected}
      >
        {wave.SINE}
      </WaveSelectorButton>
      <WaveSelectorButton
        onClick={setSelected}
        selected={wave.SQUARE === selected}
      >
        {wave.SQUARE}
      </WaveSelectorButton>
      <WaveSelectorButton
        onClick={setSelected}
        selected={wave.SAW === selected}
      >
        {wave.SAW}
      </WaveSelectorButton>
      <WaveSelectorButton
        onClick={setSelected}
        selected={wave.TRIANGLE === selected}
      >
        {wave.TRIANGLE}
      </WaveSelectorButton>
    </div>
  );
}

export default TimbreSelector;
