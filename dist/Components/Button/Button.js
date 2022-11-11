"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const {
  button
} = _ButtonModule.default;
function Button(props) {
  if (props.href) return /*#__PURE__*/_react.default.createElement("a", _extends({}, props, {
    className: "".concat([button, _ButtonModule.default[props.size]].join(" "))
  }), props.children);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button"
  }, props, {
    className: "".concat([button, _ButtonModule.default[props.size]].join(" "))
  }), props.children));
}
var _default = Button;
exports.default = _default;