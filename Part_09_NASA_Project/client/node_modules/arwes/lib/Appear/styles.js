'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return {
    root: {
      display: 'inline-block',
      opacity: 1,
      transition: 'opacity ' + theme.animTime + 'ms ease-out',

      '&$exiting, &$exited': {
        opacity: 0
      }
    },

    entering: {},
    entered: {},
    exiting: {},
    exited: {}
  };
};