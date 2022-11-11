"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
function useStopwatch() {
  const [time, setTime] = (0, _react.useState)(0);
  const [isRunning, setIsRunning] = (0, _react.useState)(false);
  const [isPaused, setIsPaused] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    let timer;
    if (isRunning && isPaused === false) {
      timer = setInterval(() => {
        setTime(time => time + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, isPaused]);
  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };
  const handlePauseRestart = () => {
    setIsPaused(!isPaused);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };
  return {
    time,
    handlePauseRestart,
    handleReset,
    handleStart
  };
}
var _default = useStopwatch;
exports.default = _default;