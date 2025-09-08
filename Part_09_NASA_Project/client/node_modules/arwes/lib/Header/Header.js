'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          animate = _props.animate,
          show = _props.show,
          sounds = _props.sounds;

      if (animate && show) {
        sounds.deploy && sounds.deploy.play();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          animate = _props2.animate,
          show = _props2.show,
          sounds = _props2.sounds;

      if (animate && prevProps.show !== show) {
        sounds.deploy && sounds.deploy.play();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props3 = this.props,
          animate = _props3.animate,
          sounds = _props3.sounds;

      if (animate) {
        sounds.deploy && sounds.deploy.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          theme = _props4.theme,
          classes = _props4.classes,
          Animation = _props4.Animation,
          animation = _props4.animation,
          sounds = _props4.sounds,
          animate = _props4.animate,
          show = _props4.show,
          className = _props4.className,
          children = _props4.children,
          etc = _objectWithoutProperties(_props4, ['theme', 'classes', 'Animation', 'animation', 'sounds', 'animate', 'show', 'className', 'children']);

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
            'header',
            _extends({ className: (0, _classnames2.default)(cls, classes[anim.status]) }, etc),
            _react2.default.createElement(
              'div',
              { className: classes.children },
              typeof children === 'function' ? children(anim) : children
            ),
            _react2.default.createElement('div', { className: classes.separator })
          );
        }
      );
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  Animation: _propTypes2.default.any.isRequired,

  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  animation: _propTypes2.default.object,

  /**
   * It uses the `deploy` player.
   */
  sounds: _propTypes2.default.object,

  /**
   * If function, receives the animation status object.
   */
  children: _propTypes2.default.any
};
Header.defaultProps = {
  Animation: _Animation2.default,
  sounds: {},
  show: true
};
exports.default = Header;