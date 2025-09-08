"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getParagraphStyles = exports.getParagraphStyles = function getParagraphStyles(theme) {
  return {
    margin: [0, 0, theme.margin]
  };
};

exports.default = function (theme) {
  return {
    root: getParagraphStyles(theme)
  };
};