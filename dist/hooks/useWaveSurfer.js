"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWaveSurfer = useWaveSurfer;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _wavesurfer = _interopRequireDefault(require("wavesurfer.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function useWaveSurfer(url) {
  const waveFormRef = (0, _react.useRef)(null);
  const wavesurfer = (0, _react.useRef)(null);
  const [isReady, setIsReady] = (0, _react.useState)(false);
  const [isPlaying, setIsPlaying] = (0, _react.useState)(false);
  const [uVolume, setUVolume] = (0, _react.useState)(0.5);
  const [duration, setDuration] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    const formWaveSurferOptions = ref => ({
      container: ref,
      waveColor: "rgba(0, 0, 0, .2)",
      progressColor: "rgb(0, 0, 0)",
      cursorColor: "rgb(63, 17, 91)",
      responsive: true,
      height: 50,
      normalize: true,
      partialRender: true
      // pixelRatio: 1,
    });

    wavesurfer.current = _wavesurfer.default.create(formWaveSurferOptions(waveFormRef.current));
    wavesurfer.current.load(url);
    wavesurfer.current.on("ready", () => {
      console.log("everything is ready");
      setDuration(wavesurfer.current.getDuration());
      setIsReady(ready => !ready);
    });
    wavesurfer.current.on("finish", () => {
      setIsPlaying(prev => !prev);
      wavesurfer.current.seekTo(0);
    });
    return () => wavesurfer.current.destroy();
  }, [url]);

  // handle volume change coming from slider
  (0, _react.useEffect)(() => {
    var _wavesurfer$current;
    (_wavesurfer$current = wavesurfer.current) === null || _wavesurfer$current === void 0 ? void 0 : _wavesurfer$current.setVolume(uVolume);
  }, [uVolume]);
  const handlePlayPause = () => {
    wavesurfer.current.playPause();
    setIsPlaying(prev => !prev);
  };
  const handleFastForward = () => {
    wavesurfer.current.skipForward(10);
  };
  const handleRewind = () => {
    wavesurfer.current.skipBackward(10);
  };
  const currentTime = () => {
    if (wavesurfer.current) {
      var _wavesurfer$current2;
      return (_wavesurfer$current2 = wavesurfer.current) === null || _wavesurfer$current2 === void 0 ? void 0 : _wavesurfer$current2.getCurrentTime();
    }
    return 0;
  };
  return {
    currentTime,
    waveFormRef,
    isPlaying,
    handlePlayPause,
    handleRewind,
    handleFastForward,
    setUVolume,
    duration,
    isReady
  };
}