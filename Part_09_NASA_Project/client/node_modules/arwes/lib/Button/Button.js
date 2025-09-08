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

var _Highlight = require('../Highlight');

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Frame = require('../Frame');

var _Frame2 = _interopRequireDefault(_Frame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (ev) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          animate = _this$props.animate,
          sounds = _this$props.sounds;


      if (!disabled) {
        onClick && onClick(ev);

        if (animate) {
          sounds.click && sounds.click.play();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Animation = _props.Animation,
          Highlight = _props.Highlight,
          Frame = _props.Frame,
          theme = _props.theme,
          classes = _props.classes,
          sounds = _props.sounds,
          animation = _props.animation,
          animate = _props.animate,
          show = _props.show,
          layer = _props.layer,
          level = _props.level,
          disabled = _props.disabled,
          active = _props.active,
          className = _props.className,
          buttonProps = _props.buttonProps,
          children = _props.children,
          etc = _objectWithoutProperties(_props, ['Animation', 'Highlight', 'Frame', 'theme', 'classes', 'sounds', 'animation', 'animate', 'show', 'layer', 'level', 'disabled', 'active', 'className', 'buttonProps', 'children']);

      var cls = (0, _classnames2.default)(classes.root, className);

      return _react2.default.createElement(
        Animation,
        _extends({
          show: show,
          animate: animate,
          timeout: theme.animTime
        }, animation),
        function (anim) {
          return _react2.default.createElement(
            'div',
            _extends({
              className: cls
            }, etc, {
              onClick: _this2.onClick
            }),
            _react2.default.createElement(
              Frame,
              {
                hover: true,
                animate: animate,
                show: show,
                corners: 1,
                level: level,
                layer: disabled ? 'disabled' : layer,
                disabled: disabled,
                active: active
              },
              _react2.default.createElement(
                Highlight,
                { animate: !disabled, layer: layer },
                _react2.default.createElement(
                  'button',
                  _extends({
                    className: classes.button,
                    disabled: disabled
                  }, buttonProps),
                  typeof children === 'function' ? children(anim) : children
                )
              )
            )
          );
        }
      );
    }

    /**
     * Internal click event listener.
     * @param  {Event} ev
     */

  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  Animation: _propTypes2.default.any.isRequired,
  Highlight: _propTypes2.default.any.isRequired,
  Frame: _propTypes2.default.any.isRequired,

  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  animation: _propTypes2.default.object,

  /**
   * It uses the `click` player.
   */
  sounds: _propTypes2.default.object,

  layer: _propTypes2.default.oneOf(['primary', 'secondary', 'header', 'control', 'success', 'alert', 'disabled']),
  disabled: _propTypes2.default.bool,
  active: _propTypes2.default.bool,

  /**
   * The inside `<Frame />` level.
   */
  level: _propTypes2.default.number,

  /**
   * Props to pass down to the `<button />` element.
   */
  buttonProps: _propTypes2.default.object,

  /**
   * If function, receives the animation status object.
   */
  children: _propTypes2.default.any
};
Button.defaultProps = {
  Animation: _Animation2.default,
  Highlight: _Highlight2.default,
  Frame: _Frame2.default,
  sounds: {},
  show: true,
  layer: 'control',
  level: 2
};
exports.default = Button;