'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollbar = exports.selection = exports.placeholder = undefined;

var _polished = require('polished');

var placeholder = exports.placeholder = function placeholder(theme, color) {
  return {
    /* Chrome/Opera/Safari */
    '::-webkit-input-placeholder': {
      color: color
    },
    /* Firefox 19+ */
    '::-moz-placeholder': {
      color: color
    },
    /* IE 10+ */
    ':-ms-input-placeholder': {
      color: color
    },
    /* Firefox 18- */
    ':-moz-placeholder': {
      color: color
    }
  };
};

var selection = exports.selection = function selection(theme, backgroundColor, color) {
  return {
    /* WebKit/Blink Browsers */
    '::selection': {
      backgroundColor: backgroundColor,
      color: color,
      textShadow: 'none'
    },
    /* Gecko Browsers */
    '::-moz-selection': {
      backgroundColor: backgroundColor,
      color: color,
      textShadow: 'none'
    }
  };
};

var scrollbar = exports.scrollbar = function scrollbar(theme, backgroundColor, borderColor) {
  return {
    '::-webkit-scrollbar': {
      width: 10,
      height: 10,
      backgroundColor: backgroundColor
    },
    '::-webkit-scrollbar-thumb': {
      border: '1px solid ' + borderColor,
      cursor: 'pointer',

      '&:hover': {
        borderColor: (0, _polished.lighten)(theme.accent, borderColor)
      }
    }
  };
};