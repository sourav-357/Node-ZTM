'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _styling = require('../tools/styling');

var _utils = require('../tools/utils');

var mapPropsDescName = function mapPropsDescName(props) {
  return (0, _utils.mapProps)(props, function (name, value) {
    return {
      name: '& ' + name,
      value: value
    };
  });
};

var position0000 = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

exports.default = function (theme) {
  return {
    root: _extends({}, position0000, {
      position: 'fixed',
      overflow: 'hidden',
      display: 'block',
      boxSizing: 'border-box',
      lineHeight: theme.typography.lineHeight,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      color: theme.color.primary.base,
      transition: 'all ' + theme.animTime + 'ms ease-out',
      opacity: 1,

      '&$exiting, &$exited': {
        opacity: 0
      },
      '& *, & *:before, & *:after': {
        boxSizing: 'inherit'
      }
    }, mapPropsDescName((0, _styling.placeholder)(theme, theme.color.primary.base)), mapPropsDescName((0, _styling.scrollbar)(theme, theme.background.primary.level0, theme.color.primary.base)), mapPropsDescName((0, _styling.selection)(theme, theme.color.primary.base, theme.background.primary.level0))),
    background: _extends({}, position0000, {
      zIndex: 1,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: theme.background.primary.level0,
      transition: 'all ' + theme.animTime + 'ms ease-in',
      opacity: 0
    }),
    pattern: _extends({}, position0000, {
      zIndex: 2,
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center top',
      backgroundAttachment: 'fixed',
      transition: 'all ' + theme.animTime + 'ms ease-in',
      opacity: 0
    }),
    puffs: _extends({}, position0000, {
      zIndex: 3
    }),
    main: _extends({}, position0000, {
      zIndex: 4,
      display: 'block',
      overflowY: 'auto'
    }),
    resourcesReadyToShow: {
      '& $background, & $pattern': {
        opacity: 1
      }
    },

    entering: {},
    entered: {},
    exiting: {},
    exited: {}
  };
};