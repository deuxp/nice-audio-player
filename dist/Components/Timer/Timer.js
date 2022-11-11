"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _helpers = require("../../helpers");
var _TimerModule = _interopRequireDefault(require("./Timer.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Timer(_ref) {
  let {
    duration,
    isPlaying,
    currentTime,
    isReady
  } = _ref;
  const {
    clock
  } = _TimerModule.default;
  const [elapsedTime, setElapsedTime] = (0, _react.useState)(0);
  const timeRemaining = (0, _helpers.displayTime)(duration);
  let elapse;
  (0, _react.useEffect)(() => {
    if (isPlaying) {
      elapse = setInterval(() => {
        let seconds = Math.round(currentTime());
        setElapsedTime((0, _helpers.displayTime)(seconds));
      }, 500);
    }
    if (isReady) {
      let seconds = Math.round(currentTime());
      setElapsedTime((0, _helpers.displayTime)(seconds));
    }
    return () => clearInterval(elapse);
  }, [isPlaying, isReady, currentTime]);
  return /*#__PURE__*/React.createElement("div", {
    className: clock
  }, /*#__PURE__*/React.createElement("div", null, elapsedTime), "/", /*#__PURE__*/React.createElement("div", null, timeRemaining));
}
var _default = Timer;
exports.default = _default;