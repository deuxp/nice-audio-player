"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Forward = _interopRequireDefault(require("@mui/icons-material/Forward10"));
var _PauseCircleOutline = _interopRequireDefault(require("@mui/icons-material/PauseCircleOutline"));
var _PlayCircleOutline = _interopRequireDefault(require("@mui/icons-material/PlayCircleOutline"));
var _Replay = _interopRequireDefault(require("@mui/icons-material/Replay10"));
var _SkipNext = _interopRequireDefault(require("@mui/icons-material/SkipNext"));
var _SkipPrevious = _interopRequireDefault(require("@mui/icons-material/SkipPrevious"));
var _Button = _interopRequireDefault(require("../Button"));
var _VolumeSlider = _interopRequireDefault(require("../VolumeSlider"));
var _ButtonBarModule = _interopRequireDefault(require("./ButtonBar.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ButtonBar(_ref) {
  let {
    handlePlayPause,
    handleFastForward,
    handleSkipPrevious,
    handleRewind,
    handleSkipNext,
    isPlaying,
    setUVolume
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: _ButtonBarModule.default.container
  }, /*#__PURE__*/React.createElement(_Button.default, {
    onClick: handleSkipPrevious,
    size: "sm"
  }, /*#__PURE__*/React.createElement(_SkipPrevious.default, null)), /*#__PURE__*/React.createElement(_Button.default, {
    onClick: handleRewind,
    size: "sm"
  }, /*#__PURE__*/React.createElement(_Replay.default, null)), /*#__PURE__*/React.createElement(_Button.default, {
    onClick: handlePlayPause,
    style: {
      margin: ".5rem"
    },
    size: ""
  }, !isPlaying && /*#__PURE__*/React.createElement(_PlayCircleOutline.default, {
    fontSize: "large"
  }), isPlaying && /*#__PURE__*/React.createElement(_PauseCircleOutline.default, {
    fontSize: "large"
  })), /*#__PURE__*/React.createElement(_Button.default, {
    onClick: handleFastForward,
    size: "sm"
  }, /*#__PURE__*/React.createElement(_Forward.default, null)), /*#__PURE__*/React.createElement(_Button.default, {
    onClick: handleSkipNext,
    size: "sm"
  }, /*#__PURE__*/React.createElement(_SkipNext.default, null))), /*#__PURE__*/React.createElement("div", {
    className: _ButtonBarModule.default.slider__container
  }, /*#__PURE__*/React.createElement(_VolumeSlider.default, {
    setUVolume: setUVolume
  })));
}
var _default = ButtonBar;
exports.default = _default;