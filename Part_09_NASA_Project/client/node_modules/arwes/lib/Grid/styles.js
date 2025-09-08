'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var columnStyles = function columnStyles(width) {
  return {
    width: width,
    marginLeft: 'auto',
    left: 'auto',
    right: 'auto'
  };
};

var columnBaseStyles = function columnBaseStyles(theme, size) {
  var styles = {};
  var width = void 0;

  for (var index = 1; index <= theme.columns; index++) {
    width = 100 / (theme.columns / index) + '%';
    styles = _extends({}, styles, _defineProperty({}, size + index, columnStyles(width)));
  }

  return styles;
};

var columnExtraStyles = function columnExtraStyles(theme, size) {
  var styles = {};
  var width = void 0;

  for (var index = 1; index <= theme.columns; index++) {
    width = 100 / (theme.columns / index) + '%';
    styles = _extends({}, styles, _defineProperty({}, 'offset-' + size + index, {
      marginLeft: width
    }));
  }

  return styles;
};

exports.default = function (theme) {
  var _extends4;

  return _extends({
    row: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.margin,

      // Clear floating children
      '&:after': {
        content: '""',
        display: 'table',
        clear: 'both'
      }
    },

    // When the row is nested inside a col
    nested: {
      marginLeft: -(theme.margin / 2),
      marginRight: -(theme.margin / 2)
    },

    noMargin: {
      marginBottom: 0
    },

    col: {
      float: 'left',
      boxSizing: 'border-box',
      padding: '0 ' + theme.margin / 2 + 'px',
      minHeight: 1
    },

    noGutter: {
      padding: 0
    }

  }, columnBaseStyles(theme, 's'), columnExtraStyles(theme, 's'), (_extends4 = {}, _defineProperty(_extends4, '@media screen and (min-width: ' + (theme.responsive.small + 1) + 'px)', _extends({}, columnBaseStyles(theme, 'm'), columnExtraStyles(theme, 'm'))), _defineProperty(_extends4, '@media screen and (min-width: ' + (theme.responsive.medium + 1) + 'px)', _extends({}, columnBaseStyles(theme, 'l'), columnExtraStyles(theme, 'l'))), _defineProperty(_extends4, '@media screen and (min-width: ' + (theme.responsive.large + 1) + 'px)', _extends({}, columnBaseStyles(theme, 'xl'), columnExtraStyles(theme, 'xl'))), _extends4));
};