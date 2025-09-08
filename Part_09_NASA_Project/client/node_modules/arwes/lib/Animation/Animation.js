'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Animation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStatuses = function getStatuses(status) {
  return {
    entering: status === 'entering',
    entered: status === 'entered',
    exiting: status === 'exiting',
    exited: status === 'exited'
  };
};

function Animation(props) {
  var animate = props.animate,
      show = props.show,
      appear = props.appear,
      timeout = props.timeout,
      children = props.children,
      rest = _objectWithoutProperties(props, ['animate', 'show', 'appear', 'timeout', 'children']);

  return _react2.default.createElement(
    _reactTransitionGroup.Transition,
    _extends({
      appear: animate ? appear : false,
      timeout: animate ? timeout : 0,
      'in': show
    }, rest),
    function (status) {
      return children(animate ? _extends({ status: status }, getStatuses(status)) : { status: '' });
    }
  );
}

Animation.propTypes = {

  /**
   * Enable the animation for this component and its children.
   */
  animate: _propTypes2.default.bool,

  /**
   * If animatable, should component start its animation or not.
   */
  show: _propTypes2.default.bool,

  /**
   * A function to render the children. It will receive an object parameter
   * with information about the animation status, with the following properties:
   * - `status: string` - The `<Transition />` received status parameter.
   * - `entering: bool` - Started to be shown.
   * - `entered: bool` - Animation is completed and now is shown.
   * - `exiting: bool` - Started to be hidden.
   * - `exited: bool` - Animation is completed and now is hidden.
   */
  children: _propTypes2.default.func.isRequired,

  /**
   * Do the animation on first mount.
   * Passed down to `<Transition />`.
   */
  appear: _propTypes2.default.bool,

  /**
   * Animation enter and exit duration in ms.
   * Passed down to `<Transition />`.
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
    enter: _propTypes2.default.number,
    exit: _propTypes2.default.number
  })])
};

Animation.defaultProps = {
  show: true,
  animate: false,
  appear: true,
  timeout: 0
};