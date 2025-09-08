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

require('../tools/request-animation-frame');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Words = function (_Component) {
  _inherits(Words, _Component);

  function Words() {
    _classCallCheck(this, Words);

    var _this = _possibleConstructorReturn(this, (Words.__proto__ || Object.getPrototypeOf(Words)).apply(this, arguments));

    _this.currentAnimationFrame = null;


    _this.state = {
      text: '',
      animating: false
    };
    return _this;
  }

  // Current animation frame identifier.


  _createClass(Words, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.animate && this.props.show) {
        this.animateIn();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          animate = _props.animate,
          show = _props.show,
          children = _props.children;


      var animateChanged = animate !== prevProps.animate;
      var showChanged = show !== prevProps.show;
      var childrenChanged = children !== prevProps.children;

      // Animation changed
      if (animate) {
        if (showChanged) {
          show ? this.animateIn() : this.animateOut();
        } else if (childrenChanged) {
          this.animateIn();
        }
      }

      // Not animated anymore
      if (!animate && animateChanged) {
        this.stopAnimation();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopAnimation();
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx;

      var _props2 = this.props,
          theme = _props2.theme,
          classes = _props2.classes,
          sounds = _props2.sounds,
          animate = _props2.animate,
          show = _props2.show,
          animation = _props2.animation,
          layer = _props2.layer,
          blinkText = _props2.blinkText,
          className = _props2.className,
          children = _props2.children,
          etc = _objectWithoutProperties(_props2, ['theme', 'classes', 'sounds', 'animate', 'show', 'animation', 'layer', 'blinkText', 'className', 'children']);

      var _state = this.state,
          animating = _state.animating,
          text = _state.text;


      var cls = (0, _classnames2.default)(classes.root, (_cx = {}, _defineProperty(_cx, classes.hide, animate && !show && !animating), _defineProperty(_cx, classes.animating, animating), _cx), className);

      return _react2.default.createElement(
        'span',
        _extends({ className: (0, _classnames2.default)(cls) }, etc),
        _react2.default.createElement(
          'span',
          { className: classes.children },
          children
        ),
        animating && _react2.default.createElement(
          'span',
          { className: classes.text },
          text,
          _react2.default.createElement('span', {
            className: classes.blink,
            dangerouslySetInnerHTML: { __html: blinkText }
          })
        )
      );
    }
  }, {
    key: 'animateIn',
    value: function animateIn() {
      this.cancelNextAnimation();
      this.startAnimation(true);
    }
  }, {
    key: 'animateOut',
    value: function animateOut() {
      this.cancelNextAnimation();
      this.startAnimation(false);
    }

    /**
     * Stop current animation and sounds.
     */

  }, {
    key: 'stopAnimation',
    value: function stopAnimation() {
      this.cancelNextAnimation();
      this.setState({ animating: false });

      var _props3 = this.props,
          animate = _props3.animate,
          sounds = _props3.sounds;

      if (animate) {
        sounds.typing && sounds.typing.stop();
      }
    }
  }, {
    key: 'cancelNextAnimation',
    value: function cancelNextAnimation() {
      window.cancelAnimationFrame(this.currentAnimationFrame);
    }

    /**
     * Start animating the words and playing sounds.
     * @param  {Boolean} isIn - If entering.
     */

  }, {
    key: 'startAnimation',
    value: function startAnimation(isIn) {
      var _this2 = this;

      var _props4 = this.props,
          theme = _props4.theme,
          children = _props4.children,
          animate = _props4.animate,
          sounds = _props4.sounds,
          animation = _props4.animation;


      if (children.length === 0) {
        return;
      }

      if (animate) {
        sounds.typing && sounds.typing.play();
      }

      // 1s / frames per second (FPS)
      // 60 FPS are the default in requestAnimationFrame
      var interval = 1000 / 60;

      // The time it will take to add/remove a character per frame
      var realDuration = interval * children.length;

      var _ref = animation || {},
          _ref$timeout = _ref.timeout,
          timeout = _ref$timeout === undefined ? theme.animTime : _ref$timeout;

      var duration = Math.min(realDuration, timeout);

      this.cancelNextAnimation();

      this.setState({
        animating: true,
        text: isIn ? '' : children
      });

      var length = children.length;
      var start = performance.now();
      var progress = null;

      var nextAnimation = function nextAnimation(timestamp) {
        if (!start) {
          start = timestamp;
        }

        progress = Math.max(timestamp - start, 0);
        if (!isIn) {
          progress = duration - progress;
        }

        // partialLength(n) = animationProgressDuration(ms)
        // textTotalLength(n) = totalDuration(ms)
        var newLength = Math.round(progress * length / duration);
        var text = children.substring(0, newLength);

        _this2.setState({ text: text });

        var continueAnimation = isIn ? newLength <= length : newLength > 0;

        if (continueAnimation) {
          _this2.currentAnimationFrame = window.requestAnimationFrame(nextAnimation);
        } else {
          _this2.stopAnimation();
        }
      };

      this.currentAnimationFrame = window.requestAnimationFrame(nextAnimation);
    }
  }]);

  return Words;
}(_react.Component);

Words.propTypes = {
  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,
  show: _propTypes2.default.bool,

  /**
   * Animation settings.
   */
  animation: _propTypes2.default.shape({

    /**
     * Animation duration in ms.
     */
    timeout: _propTypes2.default.number
  }),

  /**
   * It uses the `typing` player.
   */
  sounds: _propTypes2.default.object,

  /**
   * Can have disabled the layer by providing `''`.
   */
  layer: _propTypes2.default.oneOf(['', 'primary', 'secondary', 'header', 'control', 'success', 'alert', 'disabled']),

  /**
   * The character to print when typing animation.
   */
  blinkText: _propTypes2.default.string,

  /**
   * Plain text to render and animate if enabled.
   */
  children: _propTypes2.default.string.isRequired
};
Words.defaultProps = {
  sounds: {},
  show: true,
  layer: '',
  blinkText: '&#9611;',
  children: ''
};
exports.default = Words;