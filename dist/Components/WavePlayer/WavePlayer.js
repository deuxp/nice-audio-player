"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.object.assign.js");
var _useWaveSurfer = require("../../hooks/useWaveSurfer");
var _AlbumArt = _interopRequireDefault(require("../AlbumArt"));
var _ButtonBar = _interopRequireDefault(require("../ButtonBar"));
var _WavePlayerModule = _interopRequireDefault(require("./WavePlayer.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const {
  container
} = _WavePlayerModule.default;
function WavePlayer(_ref) {
  let {
    track,
    handleSkipPrevious,
    handleSkipNext
  } = _ref;
  const {
    url
  } = track;
  const {
    waveFormRef,
    isPlaying,
    setUVolume,
    handlePlayPause,
    handleRewind,
    handleFastForward,
    duration,
    currentTime,
    isReady
  } = (0, _useWaveSurfer.useWaveSurfer)(url);
  return /*#__PURE__*/React.createElement("div", {
    className: container
  }, /*#__PURE__*/React.createElement(_AlbumArt.default, _extends({}, track, {
    isReady: isReady,
    currentTime: currentTime,
    duration: duration,
    isPlaying: isPlaying
  })), /*#__PURE__*/React.createElement("div", {
    id: "waveform",
    ref: waveFormRef
  }), /*#__PURE__*/React.createElement(_ButtonBar.default, {
    setUVolume: setUVolume,
    handlePlayPause: handlePlayPause,
    isPlaying: isPlaying,
    handleFastForward: handleFastForward,
    handleSkipPrevious: handleSkipPrevious,
    handleSkipNext: handleSkipNext,
    handleRewind: handleRewind
  }));
}
var _default = WavePlayer;
exports.default = _default;