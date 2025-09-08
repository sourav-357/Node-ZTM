'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _howler = require('howler');

var _howler2 = _interopRequireDefault(_howler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create handler for sound player functionalities.
 * This uses the `howler` package to create a player.
 * @param  {Object} depencencies
 * @param  {Function} depencencies.Howl
 * @param  {Object} conf - Player configuration
 * @param  {Object} conf.sound - Configuration passed to `howler.Howl`.
 * @param  {Object} conf.settings - Sound settings
 * @return {Howl}
 */
exports.default = function (depencencies, conf) {
  var deps = _extends({
    Howl: _howler2.default.Howl
  }, depencencies);

  var _ref = conf || {},
      _ref$sound = _ref.sound,
      sound = _ref$sound === undefined ? {} : _ref$sound,
      _ref$settings = _ref.settings,
      settings = _ref$settings === undefined ? {} : _ref$settings;

  var player = new deps.Howl(sound);

  if (settings.oneAtATime) {
    var play = player.play.bind(player);
    var lastPlay = void 0;
    player.play = function () {
      if (lastPlay) {
        this.stop(lastPlay);
      }
      lastPlay = play.apply(undefined, arguments);
      return lastPlay;
    };
  }

  return player;
};