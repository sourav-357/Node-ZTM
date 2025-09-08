'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _polished = require('polished');

exports.default = function (theme) {
  return {
    root: {
      display: 'block',
      position: 'relative',
      backgroundColor: (0, _polished.rgba)(theme.background.primary.level0, theme.alpha),

      '&$exiting, &$exited': {
        backgroundColor: 'transparent',

        '& $separator': {
          width: 0
        }
      }
    },
    separator: {
      position: 'absolute',
      top: 'auto',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'block',
      width: '100%',
      borderStyle: 'solid',
      borderColor: theme.color.primary.dark,
      borderWidth: '0 0 1px',
      transition: 'all ' + theme.animTime + 'ms ease-in'
    },
    children: {
      display: 'block'
    },

    entering: {},
    entered: {},
    exiting: {},
    exited: {}
  };
};