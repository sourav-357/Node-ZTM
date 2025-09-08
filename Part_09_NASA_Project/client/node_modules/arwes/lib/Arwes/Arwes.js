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

var _Puffs = require('../Puffs');

var _Puffs2 = _interopRequireDefault(_Puffs);

var _utils = require('../tools/utils');

var _createLoader = require('../tools/createLoader');

var _createLoader2 = _interopRequireDefault(_createLoader);

var _createResponsive = require('../tools/createResponsive');

var _createResponsive2 = _interopRequireDefault(_createResponsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Arwes = function (_Component) {
  _inherits(Arwes, _Component);

  function Arwes() {
    _classCallCheck(this, Arwes);

    var _this = _possibleConstructorReturn(this, (Arwes.__proto__ || Object.getPrototypeOf(Arwes)).apply(this, arguments));

    _this.state = {
      readyResources: false
    };

    _this.loader = _this.props.createLoader();
    _this.responsive = _this.props.createResponsive({
      getTheme: function getTheme() {
        return _this.props.theme;
      }
    });
    return _this;
  }

  _createClass(Arwes, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadResources();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.background !== this.props.background || prevProps.pattern !== this.props.pattern) {
        this.loadResources();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          Animation = _props.Animation,
          Puffs = _props.Puffs,
          createResponsive = _props.createResponsive,
          createLoader = _props.createLoader,
          theme = _props.theme,
          classes = _props.classes,
          animation = _props.animation,
          animate = _props.animate,
          show = _props.show,
          background = _props.background,
          pattern = _props.pattern,
          loadResources = _props.loadResources,
          showResources = _props.showResources,
          puffsProps = _props.puffsProps,
          className = _props.className,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['Animation', 'Puffs', 'createResponsive', 'createLoader', 'theme', 'classes', 'animation', 'animate', 'show', 'background', 'pattern', 'loadResources', 'showResources', 'puffsProps', 'className', 'children']);

      // Resources are rendered when animation allows it, the component receives
      // the signal to render them and they are loaded.


      var res = this.getActiveResources();
      var resourcesReadyToShow = (animate ? show : true) && showResources && this.state.readyResources;

      var cls = (0, _classnames2.default)('arwes', classes.root, _defineProperty({}, classes.resourcesReadyToShow, resourcesReadyToShow), className);

      var backgroundStyle = void 0;
      if (resourcesReadyToShow && res.background) {
        backgroundStyle = { backgroundImage: 'url(' + res.background + ')' };
      }

      var patternStyle = void 0;
      if (resourcesReadyToShow && res.pattern) {
        patternStyle = { backgroundImage: 'url(' + res.pattern + ')' };
      }

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
            _extends({ className: (0, _classnames2.default)(cls, classes[anim.status]) }, rest),
            _react2.default.createElement('div', { className: classes.background, style: backgroundStyle }),
            _react2.default.createElement('div', { className: classes.pattern, style: patternStyle }),
            _react2.default.createElement(Puffs, _extends({
              className: (0, _classnames2.default)(classes.puffs, puffsProps && puffsProps.className),
              animate: !!(show && animate)
            }, puffsProps)),
            _react2.default.createElement(
              'div',
              { className: classes.main },
              typeof children === 'function' ? children(anim) : children
            )
          );
        }
      );
    }

    /**
     * Get active resources from resources props.
     * @return {Object}
     */

  }, {
    key: 'getActiveResources',
    value: function getActiveResources() {
      var _props2 = this.props,
          background = _props2.background,
          pattern = _props2.pattern;

      var responsive = this.responsive.get();

      return {
        background: (0, _utils.getResponsiveResource)(background, responsive),
        pattern: (0, _utils.getResponsiveResource)(pattern, responsive)
      };
    }

    /**
     * Load active resources if they can be loaded.
     * Doesn't return the state, it only loads the data.
     */

  }, {
    key: 'loadResources',
    value: function loadResources() {
      var _this2 = this;

      if (!this.props.loadResources) {
        return;
      }

      var _getActiveResources = this.getActiveResources(),
          background = _getActiveResources.background,
          pattern = _getActiveResources.pattern;

      this.setState({ readyResources: false });

      var images = [];
      background && images.push(background);
      pattern && images.push(pattern);

      this.loader.load({ images: images }).then(function () {
        _this2.setState({ readyResources: true });
      });
    }
  }]);

  return Arwes;
}(_react.Component);

Arwes.propTypes = {
  Animation: _propTypes2.default.any.isRequired,
  Puffs: _propTypes2.default.any.isRequired,
  createResponsive: _propTypes2.default.any.isRequired,
  createLoader: _propTypes2.default.any.isRequired,

  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  animation: _propTypes2.default.object,

  /**
   * Background image resources.
   */
  background: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    small: _propTypes2.default.string.isRequired,
    medium: _propTypes2.default.string.isRequired,
    large: _propTypes2.default.string.isRequired,
    xlarge: _propTypes2.default.string.isRequired
  })]),

  /**
   * Pattern image resources.
   */
  pattern: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    small: _propTypes2.default.string.isRequired,
    medium: _propTypes2.default.string.isRequired,
    large: _propTypes2.default.string.isRequired,
    xlarge: _propTypes2.default.string.isRequired
  })]),

  /**
   * If the component should load the resources.
   */
  loadResources: _propTypes2.default.bool,

  /**
   * If to show the resources when they are loaded.
   */
  showResources: _propTypes2.default.bool,

  /**
   * Properties to pass down to `<Puffs />` component.
   */
  puffsProps: _propTypes2.default.object,

  /**
   * If function, receives the animation status object.
   */
  children: _propTypes2.default.any
};
Arwes.defaultProps = {
  Animation: _Animation2.default,
  Puffs: _Puffs2.default,
  createResponsive: _createResponsive2.default,
  createLoader: _createLoader2.default,
  show: true,
  loadResources: true,
  showResources: true
};
exports.default = Arwes;