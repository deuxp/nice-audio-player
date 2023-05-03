"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Timer = _interopRequireDefault(require("../Timer/Timer"));
var _AlbumArtModule = _interopRequireDefault(require("./AlbumArt.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AlbumArt = /*#__PURE__*/(0, _react.memo)(_ref => {
  let {
    albumCover,
    artist,
    trackTitle,
    album,
    isReady,
    currentTime,
    duration,
    isPlaying
  } = _ref;
  const {
    album__cover,
    image,
    titles,
    container
  } = _AlbumArtModule.default;
  return /*#__PURE__*/React.createElement("section", {
    className: container
  }, /*#__PURE__*/React.createElement("div", {
    className: album__cover
  }, /*#__PURE__*/React.createElement("img", {
    alt: "album cover",
    className: image,
    src: albumCover
  })), /*#__PURE__*/React.createElement("div", {
    className: titles
  }, /*#__PURE__*/React.createElement("h5", {
    datatoggle: "tooltip",
    dataplacement: "top",
    title: artist
  }, artist), /*#__PURE__*/React.createElement("h3", {
    datatoggle: "tooltip",
    dataplacement: "top",
    title: trackTitle
  }, /*#__PURE__*/React.createElement("strong", null, trackTitle)), /*#__PURE__*/React.createElement("h4", {
    datatoggle: "tooltip",
    dataplacement: "top",
    title: album
  }, album), /*#__PURE__*/React.createElement(_Timer.default, {
    isReady: isReady,
    currentTime: currentTime,
    duration: duration,
    isPlaying: isPlaying
  })));
});
var _default = AlbumArt;
exports.default = _default;