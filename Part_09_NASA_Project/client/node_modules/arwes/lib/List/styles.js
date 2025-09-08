'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getListStyles = exports.getListStyles = function getListStyles(theme) {
  return {
    display: 'block',
    margin: [0, 0, theme.margin, theme.margin],
    padding: 0,

    '& dl, & ul, & ol': {
      marginBottom: 0
    }
  };
};

var getULStyles = exports.getULStyles = function getULStyles(theme) {
  return {
    marginLeft: theme.margin + theme.padding / 2,

    '& li': {
      display: 'block',
      listStyle: 'none',
      paddingLeft: theme.padding
    },
    '& li:before': {
      position: 'relative',
      left: -(theme.padding / 2),
      display: 'inline-block',
      marginLeft: -theme.padding,
      content: '">>"',
      color: theme.color.primary.light
    }
  };
};

var getOLStyles = exports.getOLStyles = function getOLStyles(theme) {
  return {
    marginLeft: theme.padding,
    paddingLeft: theme.typography.fontSize,

    '& ol': {
      marginLeft: 0
    }
  };
};

var getDLStyles = exports.getDLStyles = function getDLStyles(theme) {
  return {
    '& dt': {
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    '& dd': {
      marginLeft: theme.typography.fontSize
    }
  };
};

exports.default = function (theme) {
  return {
    root: _extends({}, getListStyles(theme), {
      'ul&': getULStyles(theme),
      'ol&': getOLStyles(theme),
      'dl&': getDLStyles(theme)
    })
  };
};