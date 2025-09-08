'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createPlayer = require('../tools/createPlayer');

var _createPlayer2 = _interopRequireDefault(_createPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SoundsProvider = function (_Component) {
  _inherits(SoundsProvider, _Component);

  function SoundsProvider() {
    _classCallCheck(this, SoundsProvider);

    return _possibleConstructorReturn(this, (SoundsProvider.__proto__ || Object.getPrototypeOf(SoundsProvider)).apply(this, arguments));
  }

  _createClass(SoundsProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          sounds = _props.sounds,
          createPlayer = _props.createPlayer;
      var shared = sounds.shared,
          players = sounds.players;


      var soundsPlayers = {};

      Object.keys(players).forEach(function (name) {
        var player = players[name];

        // Spread the shared config for all sounds.
        player.sound = _extends({}, shared, player.sound);

        soundsPlayers[name] = createPlayer(null, player);
      });

      return { sounds: soundsPlayers };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return SoundsProvider;
}(_react.Component);

SoundsProvider.propTypes = {
  sounds: _propTypes2.default.object.isRequired,
  createPlayer: _propTypes2.default.any.isRequired
};
SoundsProvider.defaultProps = {
  createPlayer: _createPlayer2.default
};
SoundsProvider.childContextTypes = {
  sounds: _propTypes2.default.object
};
exports.default = SoundsProvider;