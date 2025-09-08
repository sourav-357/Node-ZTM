'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Logo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = require('d3-shape');

var _Animation = require('../Animation');

var _Animation2 = _interopRequireDefault(_Animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var radians = function radians(degress) {
  return degress * Math.PI / 180;
};
var createArc = (0, _d3Shape.arc)();

var Aux = function Aux(_ref) {
  var children = _ref.children;
  return children;
};
var createArcLight = function createArcLight(details, classes) {
  for (var _len = arguments.length, props = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    props[_key - 2] = arguments[_key];
  }

  return _react2.default.createElement(
    Aux,
    null,
    _react2.default.createElement('path', _extends({}, props, {
      className: (0, _classnames2.default)(classes.light, classes.elementFilter, props.className),
      d: createArc(details)
    })),
    _react2.default.createElement('path', _extends({}, props, {
      className: (0, _classnames2.default)(classes.light, props.className),
      d: createArc(details)
    }))
  );
};

function Logo(props) {
  var theme = props.theme,
      classes = props.classes,
      Animation = props.Animation,
      animation = props.animation,
      animate = props.animate,
      show = props.show,
      size = props.size,
      className = props.className,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'Animation', 'animation', 'animate', 'show', 'size', 'className']);

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
        'svg',
        _extends({
          className: (0, _classnames2.default)(cls, classes[anim.status]),
          width: size,
          height: size,
          viewBox: '0 0 1000 1000',
          version: '1.1'
        }, etc),
        _react2.default.createElement(
          'filter',
          { id: 'arwes-logo-filter-blur' },
          _react2.default.createElement('feGaussianBlur', { 'in': 'SourceGraphic', stdDeviation: '20' })
        ),
        _react2.default.createElement(
          'g',
          { style: { transform: 'translate(500px,500px)' } },
          _react2.default.createElement('circle', {
            className: (0, _classnames2.default)(classes.light, classes.elementFilter),
            cx: '0',
            cy: '0',
            r: '85'
          }),
          _react2.default.createElement('circle', {
            className: classes.light,
            cx: '0',
            cy: '0',
            r: '85'
          }),
          _react2.default.createElement('path', {
            className: classes.center,
            d: createArc({
              innerRadius: 200,
              outerRadius: 275,
              startAngle: 0,
              endAngle: radians(360)
            })
          }),
          _react2.default.createElement('path', {
            className: classes.outer,
            d: createArc({
              innerRadius: 375,
              outerRadius: 475,
              startAngle: 0,
              endAngle: radians(360)
            })
          }),
          createArcLight({
            innerRadius: 375,
            outerRadius: 475,
            startAngle: radians(0 + 15),
            endAngle: radians(90 + 15)
          }, classes),
          createArcLight({
            innerRadius: 375,
            outerRadius: 475,
            startAngle: radians(90 + 30 + 15),
            endAngle: radians(90 * 2 + 30 + 15)
          }, classes),
          createArcLight({
            innerRadius: 375,
            outerRadius: 475,
            startAngle: radians(90 * 2 + 30 * 2 + 15),
            endAngle: radians(90 * 3 + 30 * 2 + 15)
          }, classes)
        )
      );
    }
  );
}

Logo.propTypes = {
  Animation: _propTypes2.default.any.isRequired,

  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  animation: _propTypes2.default.object,

  layer: _propTypes2.default.oneOf(['primary', 'secondary', 'header', 'control', 'success', 'alert', 'disabled']),

  /**
   * Since it is a square, the width and height of the container.
   */
  size: _propTypes2.default.number
};

Logo.defaultProps = {
  Animation: _Animation2.default,
  show: true,
  layer: 'primary',
  size: 100
};