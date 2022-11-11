"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _Slider = _interopRequireDefault(require("@mui/material/Slider"));
var _react = require("react");
var _VolumeSliderModule = _interopRequireDefault(require("./VolumeSlider.module.scss"));
var _VolumeDown = _interopRequireDefault(require("@mui/icons-material/VolumeDown"));
var _VolumeUp = _interopRequireDefault(require("@mui/icons-material/VolumeUp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Slider from "@mui/material/Slider";

function VolumeSlider(_ref) {
  let {
    setUVolume
  } = _ref;
  const [volume, setVolume] = (0, _react.useState)(0.7);
  (0, _react.useEffect)(() => {
    setUVolume(prevVolume => volume);
  }, [volume]);
  return /*#__PURE__*/React.createElement("div", {
    className: _VolumeSliderModule.default.container
  }, /*#__PURE__*/React.createElement(_VolumeDown.default, {
    fontSize: "small",
    className: _VolumeSliderModule.default.volumeIcon
  }), /*#__PURE__*/React.createElement(_Slider.default, {
    min: 0,
    max: 1,
    step: 0.01,
    "aria-label": "Volume",
    value: volume,
    defaultValue: 0.5,
    size: "small",
    onChange: e => setVolume(e.target.value),
    className: _VolumeSliderModule.default.slider,
    sx: {
      "& .MuiSlider-thumb": {
        color: "rgba(0,0,0, 1)",
        "&:hover": {
          boxShadow: "0 0 3px 0px rgba(0,0,0,0.7)"
        }
      },
      "& .MuiSlider-track": {
        color: "rgba(0,0,0, 1)"
      },
      "& .MuiSlider-rail": {
        backgroundColor: "rgba(0,0,0, 1)"
      }
    }
  }), /*#__PURE__*/React.createElement(_VolumeUp.default, {
    fontSize: "small",
    className: _VolumeSliderModule.default.volumeIcon
  }));
}
var _default = VolumeSlider;
exports.default = _default;