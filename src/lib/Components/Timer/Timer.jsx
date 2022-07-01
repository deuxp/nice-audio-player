import { useEffect, useState } from "react";
import { displayTime } from "../../helpers";
import style from "./Timer.module.scss";

function Timer({ duration, isPlaying, currentTime, isReady }) {
  const { clock } = style;
  const [elapsedTime, setElapsedTime] = useState(0);
  const timeRemaining = displayTime(duration);

  let elapse;

  useEffect(() => {
    if (isPlaying) {
      elapse = setInterval(() => {
        setElapsedTime(Math.round(currentTime()));
      }, 1000);
    }
    if (isReady) {
      setElapsedTime(Math.round(currentTime()));
    }
    return () => clearInterval(elapse);
  }, [isPlaying, isReady]);

  return (
    <div className={clock}>
      <div>{elapsedTime}</div>/<div>{timeRemaining}</div>
    </div>
  );
}

export default Timer;
