'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Load a provided image by URL.
 * @param  {String} url
 * @return {Promise}
 */
var loadImage = exports.loadImage = function loadImage(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function () {
      return resolve();
    };
    img.onerror = img.onabort = function () {
      return reject();
    };
    img.src = url;
  });
};

/**
 * Load a provided sound by URL.
 * @param  {String} url
 * @return {Promise}
 */
var loadSound = exports.loadSound = function loadSound(url) {
  return new Promise(function (resolve, reject) {
    var sound = new Audio();
    sound.addEventListener('canplaythrough', function () {
      return resolve();
    });
    sound.onerror = sound.onabort = function () {
      return reject();
    };
    sound.src = url;
  });
};

/**
 * Create handler for loader functionalities.
 * @param  {Object} depencencies
 * @param  {Function} depencencies.loadImage
 * @param  {Function} depencencies.loadSound
 * @return {Object}
 */

exports.default = function (depencencies) {
  var deps = _extends({
    loadImage: loadImage,
    loadSound: loadSound
  }, depencencies);
  return {

    /**
     * Load a list of image and audio resources.
     * @param  {Object} resources
     * @param  {String[]} resources.images
     * @param  {String[]} resources.sounds
     * @param  {Object} opts - Optional options.
     * @param  {Number} [opts.timeout=30000] - Maximum duration to load. If this time
     * is reached and resources are not loaded, the promise is rejected.
     * @return {Promise}
     */
    load: function load(resources, opts) {
      var _ref = resources || {},
          _ref$images = _ref.images,
          images = _ref$images === undefined ? [] : _ref$images,
          _ref$sounds = _ref.sounds,
          sounds = _ref$sounds === undefined ? [] : _ref$sounds;

      var options = Object.assign({
        timeout: 30000
      }, opts);

      return new Promise(function (resolve, reject) {
        setTimeout(reject, options.timeout);
        Promise.all([].concat(_toConsumableArray(images.map(function (image) {
          return deps.loadImage(image);
        })), _toConsumableArray(sounds.map(function (sound) {
          return deps.loadSound(sound);
        })))).then(resolve, reject);
      });
    }
  };
};