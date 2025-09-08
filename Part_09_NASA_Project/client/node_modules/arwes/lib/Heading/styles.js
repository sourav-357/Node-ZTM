'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeadingStyles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _polished = require('polished');

var getHeadingStyles = exports.getHeadingStyles = function getHeadingStyles(theme) {
  return {
    margin: [0, 0, theme.margin],
    fontFamily: theme.typography.headerFontFamily,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textShadow: '0 0 ' + theme.shadowLength + 'px ' + (0, _polished.rgba)(theme.color.header.base, theme.alpha),
    color: theme.color.header.base,
    transition: 'color ' + theme.animTime + 'ms ease-out'
  };
};

exports.default = function (theme) {
  return {
    root: _extends({}, getHeadingStyles(theme), {
      'h1&': { fontSize: theme.typography.headerSizes.h1 },
      'h2&': { fontSize: theme.typography.headerSizes.h2 },
      'h3&': { fontSize: theme.typography.headerSizes.h3 },
      'h4&': { fontSize: theme.typography.headerSizes.h4 },
      'h5&': { fontSize: theme.typography.headerSizes.h5 },
      'h6&': { fontSize: theme.typography.headerSizes.h6 }
    })
  };
};