'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Line;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Animation = require('../Animation');

var _Animation2 = _interopRequireDefault(_Animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Line(props) {
  var theme = props.theme,
      classes = props.classes,
      Animation = props.Animation,
      animation = props.animation,
      animate = props.animate,
      show = props.show,
      layer = props.layer,
      className = props.className,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'Animation', 'animation', 'animate', 'show', 'layer', 'className']);

  var cls = (0, _classnames2.default)(classes.root, className);

  return _react2.default.createElement(
    Animation,
    _extends({
      animate: animate,
      show: show,
      timeout: theme.animTime
    }, animation),
    function (anim) {
      return _react2.default.createElement(
        'div',
        _extends({ className: (0, _classnames2.default)(cls, classes[anim.status]) }, etc),
        _react2.default.createElement('div', { className: classes.line }),
        _react2.default.createElement('div', { className: classes.left }),
        _react2.default.createElement('div', { className: classes.right })
      );
    }
  );
}

Line.propTypes = {
  Animation: _propTypes2.default.any.isRequired,

  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  animation: _propTypes2.default.object,

  layer: _propTypes2.default.oneOf(['primary', 'secondary', 'header', 'control', 'success', 'alert', 'disabled'])
};

Line.defaultProps = {
  Animation: _Animation2.default,
  show: true,
  layer: 'primary'
};