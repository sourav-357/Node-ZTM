'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Project;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Animation = require('../Animation');

var _Animation2 = _interopRequireDefault(_Animation);

var _Frame = require('../Frame');

var _Frame2 = _interopRequireDefault(_Frame);

var _Words = require('../Words');

var _Words2 = _interopRequireDefault(_Words);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Project(props) {
  var theme = props.theme,
      classes = props.classes,
      sounds = props.sounds,
      Animation = props.Animation,
      Frame = props.Frame,
      Words = props.Words,
      Heading = props.Heading,
      animation = props.animation,
      animate = props.animate,
      show = props.show,
      node = props.node,
      header = props.header,
      headerSize = props.headerSize,
      icon = props.icon,
      className = props.className,
      children = props.children,
      etc = _objectWithoutProperties(props, ['theme', 'classes', 'sounds', 'Animation', 'Frame', 'Words', 'Heading', 'animation', 'animate', 'show', 'node', 'header', 'headerSize', 'icon', 'className', 'children']);

  var cls = (0, _classnames2.default)(classes.root, className);

  return _react2.default.createElement(
    Animation,
    _extends({
      animate: animate,
      show: show,
      timeout: theme.animTime
    }, animation),
    function (anim) {
      return _react2.default.createElement(node, _extends({
        className: (0, _classnames2.default)(cls, classes[anim.status])
      }, etc), _react2.default.createElement(
        Frame,
        {
          animate: animate,
          show: show,
          timeout: theme.animTime,
          layer: 'primary',
          level: 0,
          corners: 4,
          hover: true,
          noBackground: true,
          onClick: function onClick() {
            return sounds.click && sounds.click.play();
          }
        },
        function (frameAnim) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'header',
              { className: classes.header },
              _react2.default.createElement(
                Heading,
                { node: 'h1' },
                _react2.default.createElement(
                  Words,
                  { animate: animate, show: frameAnim.entered },
                  header
                )
              ),
              _react2.default.createElement(
                'div',
                { className: classes.icon },
                icon
              )
            ),
            _react2.default.createElement('div', { className: classes.separator }),
            _react2.default.createElement(
              'div',
              { className: classes.children },
              typeof children === 'function' ? children(frameAnim) : children
            )
          );
        }
      ));
    }
  );
}

Project.propTypes = {
  Animation: _propTypes2.default.any.isRequired,
  Frame: _propTypes2.default.any.isRequired,
  Words: _propTypes2.default.any.isRequired,
  Heading: _propTypes2.default.any.isRequired,

  theme: _propTypes2.default.any.isRequired,
  classes: _propTypes2.default.any.isRequired,

  animate: _propTypes2.default.bool,
  show: _propTypes2.default.bool,
  animation: _propTypes2.default.object,

  /**
   * It uses the `click` player.
   */
  sounds: _propTypes2.default.object,

  /**
   * The HTML tag element to use.
   */
  node: _propTypes2.default.string,

  /**
   * The HTML header used for the title.
   */
  header: _propTypes2.default.string.isRequired,

  /**
   * The actual font size to use for the HTML header.
   */
  headerSize: _propTypes2.default.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),

  /**
   * The icon to decorate the project.
   */
  icon: _propTypes2.default.any,

  /**
   * If function, receives the animation status object.
   */
  children: _propTypes2.default.any
};

Project.defaultProps = {
  Animation: _Animation2.default,
  Frame: _Frame2.default,
  Words: _Words2.default,
  Heading: _Heading2.default,
  show: true,
  sounds: {},
  node: 'article',
  headerSize: 'h2',
  icon: _react2.default.createElement('i', { className: 'mdi mdi-package' })
};