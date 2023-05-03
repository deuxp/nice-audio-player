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
        let seconds = Math.round(currentTime());
        setElapsedTime(displayTime(seconds));
      }, 500);
    }
    if (isReady) {
      let seconds = Math.round(currentTime());
      setElapsedTime(displayTime(seconds));
    }
    return () => clearInterval(elapse);
  }, [isPlaying, isReady, currentTime]);

  return (
    <div className={clock}>
      <div>{elapsedTime}</div>/<div>{timeRemaining}</div>
    </div>
  );
}

export default Timer;
