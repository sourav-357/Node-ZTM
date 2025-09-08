'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinkStyles = undefined;

var _polished = require('polished');

var getLinkStyles = exports.getLinkStyles = function getLinkStyles(theme) {
  return {
    color: theme.color.control.base,
    textShadow: '0 0 ' + theme.shadowLength + 'px ' + (0, _polished.rgba)(theme.color.control.base, theme.alpha),
    transition: 'color ' + theme.animTime + 'ms ease-out',
    textDecoration: 'none',
    cursor: 'pointer',

    '&:hover': {
      color: theme.color.control.light
    }
  };
};

exports.default = function (theme) {
  return {
    root: getLinkStyles(theme)
  };
};