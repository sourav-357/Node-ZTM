'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _polished = require('polished');

var cornerLength = function cornerLength(corners) {
  switch (corners) {
    case 1:
      return 8;
    case 2:
      return 16;
    case 3:
      return 16;
    case 4:
      return 24;
    case 5:
      return 24;
    default:
      return 32;
  }
};

var cornerWidth = function cornerWidth(corners) {
  switch (corners) {
    case 1:
      return 1;
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 2;
    case 6:
      return 3;
    default:
      return 3;
  }
};

var getColor = function getColor(theme, props, level) {
  return theme.color[props.disabled ? 'disabled' : props.layer][level];
};

var getBg = function getBg(theme, props) {
  return theme.background[props.disabled ? 'disabled' : props.layer]['level' + props.level];
};

exports.default = function (theme) {
  return {
    root: {
      display: 'block',
      position: 'relative',
      padding: '1px',

      '&$exiting, &$exited': {
        '& $borderLeft, & $borderRight': {
          height: '0%'
        },
        '& $borderTop, & $borderBottom': {
          width: '0%'
        },
        '& $corner': {
          width: 0,
          height: 0,
          opacity: 0
        },
        '& $box': {
          backgroundColor: 'transparent'
        }
      },

      '&$hover:hover': {
        '& $border': {
          borderColor: function borderColor(props) {
            return getColor(theme, props, 'base');
          },
          boxShadow: function boxShadow(props) {
            return '0 0 ' + theme.shadowLength + 'px ' + (0, _polished.rgba)(getColor(theme, props, 'base'), theme.alpha);
          }
        },
        '& $corner': {
          borderColor: function borderColor(props) {
            return getColor(theme, props, 'light');
          },
          boxShadow: function boxShadow(props) {
            return '0 0 ' + theme.shadowLength + 'px -' + theme.shadowLength / 2 + 'px ' + (0, _polished.rgba)(getColor(theme, props, 'light'), theme.alpha);
          }
        }
      }
    },
    box: {
      zIndex: 3,
      position: 'relative',
      overflow: 'hidden',
      display: 'block',
      transition: 'background-color ' + theme.animTime + 'ms ease-in',
      backgroundColor: function backgroundColor(props) {
        return props.noBackground ? 'transparent' : props.active ? (0, _polished.rgba)((0, _polished.lighten)(theme.accent, getBg(theme, props)), theme.alpha) : (0, _polished.rgba)(getBg(theme, props), theme.alpha);
      }
    },
    children: {
      display: 'block'
    },

    // Borders

    border: {
      zIndex: 1,
      position: 'absolute',
      borderStyle: 'solid',
      transition: 'all ' + theme.animTime + 'ms ease-in',
      borderColor: function borderColor(props) {
        return getColor(theme, props, 'dark');
      },
      boxShadow: function boxShadow(props) {
        return '0 0 ' + theme.shadowLength + 'px ' + (0, _polished.rgba)(getColor(theme, props, 'dark'), theme.alpha);
      },
      opacity: 1
    },
    borderLeft: {
      left: 0,
      top: '50%',
      transform: 'translate(0, -50%)',
      borderWidth: '0 0 0 1px',
      height: '100%'
    },
    borderRight: {
      right: 0,
      top: '50%',
      transform: 'translate(0, -50%)',
      borderWidth: '0 0 0 1px',
      height: '100%'
    },
    borderTop: {
      top: 0,
      left: '50%',
      transform: 'translate(-50%, 0)',
      borderWidth: '1px 0 0 0',
      width: '100%'
    },
    borderBottom: {
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%, 0)',
      borderWidth: '1px 0 0 0',
      width: '100%'
    },

    // Corners

    corner: {
      zIndex: 2,
      position: 'absolute',
      width: function width(props) {
        return cornerLength(props.corners);
      },
      height: function height(props) {
        return cornerLength(props.corners);
      },
      transition: 'all ' + theme.animTime + 'ms ease-in',
      borderStyle: 'solid',
      borderColor: function borderColor(props) {
        return getColor(theme, props, 'base');
      },
      boxShadow: function boxShadow(props) {
        return '0 0 ' + theme.shadowLength + 'px -' + theme.shadowLength / 2 + 'px ' + (0, _polished.rgba)(getColor(theme, props, 'base'), theme.alpha);
      },
      opacity: 1
    },
    cornerLT: {
      left: function left(props) {
        return -cornerWidth(props.corners);
      },
      top: function top(props) {
        return -cornerWidth(props.corners);
      },
      borderWidth: function borderWidth(props) {
        return cornerWidth(props.corners) + 'px 0 0 ' + cornerWidth(props.corners) + 'px';
      }
    },
    cornerLB: {
      left: function left(props) {
        return -cornerWidth(props.corners);
      },
      bottom: function bottom(props) {
        return -cornerWidth(props.corners);
      },
      borderWidth: function borderWidth(props) {
        return '0 0 ' + cornerWidth(props.corners) + 'px ' + cornerWidth(props.corners) + 'px';
      }
    },
    cornerRT: {
      right: function right(props) {
        return -cornerWidth(props.corners);
      },
      top: function top(props) {
        return -cornerWidth(props.corners);
      },
      borderWidth: function borderWidth(props) {
        return cornerWidth(props.corners) + 'px ' + cornerWidth(props.corners) + 'px 0 0';
      }
    },
    cornerRB: {
      right: function right(props) {
        return -cornerWidth(props.corners);
      },
      bottom: function bottom(props) {
        return -cornerWidth(props.corners);
      },
      borderWidth: function borderWidth(props) {
        return '0 ' + cornerWidth(props.corners) + 'px ' + cornerWidth(props.corners) + 'px 0';
      }
    },

    hover: {},
    entering: {},
    entered: {},
    exiting: {},
    exited: {}
  };
};