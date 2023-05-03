"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
function _default(duration, elapsedTime) {
  if (elapsedTime) {
    duration -= elapsedTime;
  }
  const sec = Math.floor(duration % 60);
  const min = Math.floor(duration / 60 % 60);
  const hour = Math.floor(duration / (60 * 60));
  const formatSec = sec.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  const formatMin = min.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  return "".concat(hour, ":").concat(formatMin, ":").concat(formatSec);
}