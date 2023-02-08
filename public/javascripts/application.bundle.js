/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/compressorjs/dist/compressor.js":
/*!******************************************************!*\
  !*** ./node_modules/compressorjs/dist/compressor.js ***!
  \******************************************************/
/***/ (function(module) {

/*!
 * Compressor.js v1.1.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-10-05T02:32:40.212Z
 */

(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var canvasToBlob = {
    exports: {}
  };

  /*
   * JavaScript Canvas to Blob
   * https://github.com/blueimp/JavaScript-Canvas-to-Blob
   *
   * Copyright 2012, Sebastian Tschan
   * https://blueimp.net
   *
   * Licensed under the MIT license:
   * https://opensource.org/licenses/MIT
   *
   * Based on stackoverflow user Stoive's code snippet:
   * http://stackoverflow.com/q/4998908
   */

  (function (module) {
    if (typeof window === 'undefined') {
      return;
    }
    (function (window) {
      var CanvasPrototype = window.HTMLCanvasElement && window.HTMLCanvasElement.prototype;
      var hasBlobConstructor = window.Blob && function () {
        try {
          return Boolean(new Blob());
        } catch (e) {
          return false;
        }
      }();
      var hasArrayBufferViewSupport = hasBlobConstructor && window.Uint8Array && function () {
        try {
          return new Blob([new Uint8Array(100)]).size === 100;
        } catch (e) {
          return false;
        }
      }();
      var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
      var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
      var dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window.atob && window.ArrayBuffer && window.Uint8Array && function (dataURI) {
        var matches, mediaType, isBase64, dataString, byteString, arrayBuffer, intArray, i, bb; // Parse the dataURI components as per RFC 2397

        matches = dataURI.match(dataURIPattern);
        if (!matches) {
          throw new Error('invalid data URI');
        } // Default to text/plain;charset=US-ASCII

        mediaType = matches[2] ? matches[1] : 'text/plain' + (matches[3] || ';charset=US-ASCII');
        isBase64 = !!matches[4];
        dataString = dataURI.slice(matches[0].length);
        if (isBase64) {
          // Convert base64 to raw binary data held in a string:
          byteString = atob(dataString);
        } else {
          // Convert base64/URLEncoded data component to raw binary:
          byteString = decodeURIComponent(dataString);
        } // Write the bytes of the string to an ArrayBuffer:

        arrayBuffer = new ArrayBuffer(byteString.length);
        intArray = new Uint8Array(arrayBuffer);
        for (i = 0; i < byteString.length; i += 1) {
          intArray[i] = byteString.charCodeAt(i);
        } // Write the ArrayBuffer (or ArrayBufferView) to a blob:

        if (hasBlobConstructor) {
          return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
            type: mediaType
          });
        }
        bb = new BlobBuilder();
        bb.append(arrayBuffer);
        return bb.getBlob(mediaType);
      };
      if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
        if (CanvasPrototype.mozGetAsFile) {
          CanvasPrototype.toBlob = function (callback, type, quality) {
            var self = this;
            setTimeout(function () {
              if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
                callback(dataURLtoBlob(self.toDataURL(type, quality)));
              } else {
                callback(self.mozGetAsFile('blob', type));
              }
            });
          };
        } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
          if (CanvasPrototype.msToBlob) {
            CanvasPrototype.toBlob = function (callback, type, quality) {
              var self = this;
              setTimeout(function () {
                if ((type && type !== 'image/png' || quality) && CanvasPrototype.toDataURL && dataURLtoBlob) {
                  callback(dataURLtoBlob(self.toDataURL(type, quality)));
                } else {
                  callback(self.msToBlob(type));
                }
              });
            };
          } else {
            CanvasPrototype.toBlob = function (callback, type, quality) {
              var self = this;
              setTimeout(function () {
                callback(dataURLtoBlob(self.toDataURL(type, quality)));
              });
            };
          }
        }
      }
      if (module.exports) {
        module.exports = dataURLtoBlob;
      } else {
        window.dataURLtoBlob = dataURLtoBlob;
      }
    })(window);
  })(canvasToBlob);
  var toBlob = canvasToBlob.exports;
  var isBlob = function isBlob(value) {
    if (typeof Blob === 'undefined') {
      return false;
    }
    return value instanceof Blob || Object.prototype.toString.call(value) === '[object Blob]';
  };
  var DEFAULTS = {
    /**
     * Indicates if output the original image instead of the compressed one
     * when the size of the compressed image is greater than the original one's
     * @type {boolean}
     */
    strict: true,
    /**
     * Indicates if read the image's Exif Orientation information,
     * and then rotate or flip the image automatically.
     * @type {boolean}
     */
    checkOrientation: true,
    /**
     * The max width of the output image.
     * @type {number}
     */
    maxWidth: Infinity,
    /**
     * The max height of the output image.
     * @type {number}
     */
    maxHeight: Infinity,
    /**
     * The min width of the output image.
     * @type {number}
     */
    minWidth: 0,
    /**
     * The min height of the output image.
     * @type {number}
     */
    minHeight: 0,
    /**
     * The width of the output image.
     * If not specified, the natural width of the source image will be used.
     * @type {number}
     */
    width: undefined,
    /**
     * The height of the output image.
     * If not specified, the natural height of the source image will be used.
     * @type {number}
     */
    height: undefined,
    /**
     * Sets how the size of the image should be resized to the container
     * specified by the `width` and `height` options.
     * @type {string}
     */
    resize: 'none',
    /**
     * The quality of the output image.
     * It must be a number between `0` and `1`,
     * and only available for `image/jpeg` and `image/webp` images.
     * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
     * @type {number}
     */
    quality: 0.8,
    /**
     * The mime type of the output image.
     * By default, the original mime type of the source image file will be used.
     * @type {string}
     */
    mimeType: 'auto',
    /**
     * Files whose file type is included in this list,
     * and whose file size exceeds the `convertSize` value will be converted to JPEGs.
     * @type {string｜Array}
     */
    convertTypes: ['image/png'],
    /**
     * PNG files over this size (5 MB by default) will be converted to JPEGs.
     * To disable this, just set the value to `Infinity`.
     * @type {number}
     */
    convertSize: 5000000,
    /**
     * The hook function to execute before draw the image into the canvas for compression.
     * @type {Function}
     * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
     * @param {HTMLCanvasElement} canvas - The canvas for compression.
     * @example
     * function (context, canvas) {
     *   context.fillStyle = '#fff';
     * }
     */
    beforeDraw: null,
    /**
     * The hook function to execute after drew the image into the canvas for compression.
     * @type {Function}
     * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
     * @param {HTMLCanvasElement} canvas - The canvas for compression.
     * @example
     * function (context, canvas) {
     *   context.filter = 'grayscale(100%)';
     * }
     */
    drew: null,
    /**
     * The hook function to execute when success to compress the image.
     * @type {Function}
     * @param {File} file - The compressed image File object.
     * @example
     * function (file) {
     *   console.log(file);
     * }
     */
    success: null,
    /**
     * The hook function to execute when fail to compress the image.
     * @type {Function}
     * @param {Error} err - An Error object.
     * @example
     * function (err) {
     *   console.log(err.message);
     * }
     */
    error: null
  };
  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};

  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  var REGEXP_IMAGE_TYPE = /^image\/.+$/;
  /**
   * Check if the given value is a mime type of image.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given is a mime type of image, else `false`.
   */

  function isImageType(value) {
    return REGEXP_IMAGE_TYPE.test(value);
  }
  /**
   * Convert image type to extension.
   * @param {string} value - The image type to convert.
   * @returns {boolean} Returns the image extension.
   */

  function imageTypeToExtension(value) {
    var extension = isImageType(value) ? value.substr(6) : '';
    if (extension === 'jpeg') {
      extension = 'jpg';
    }
    return ".".concat(extension);
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    var i;
    length += start;
    for (i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }
    return str;
  }
  var btoa = WINDOW.btoa;
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = [];
    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);
    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }
    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;
        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }
          offset += 1;
        }
      }
      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;
        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;
          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */) {
            if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
              var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
              if (firstIFDOffset >= 0x00000008) {
                ifdStart = tiffOffset + firstIFDOffset;
              }
            }
          }
        }
      }
      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);
        var _offset;
        var i;
        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;
          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */) {
            // 8 is the offset of the current tag's value
            _offset += 8; // Get the original orientation value

            orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

            dataView.setUint16(_offset, 1, littleEndian);
            break;
          }
        }
      }
    } catch (e) {
      orientation = 1;
    }
    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;
    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }
    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref) {
    var aspectRatio = _ref.aspectRatio,
      height = _ref.height,
      width = _ref.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);
    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;
      if ((type === 'contain' || type === 'none') && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }
    return {
      width: width,
      height: height
    };
  }
  var ArrayBuffer$1 = WINDOW.ArrayBuffer,
    FileReader = WINDOW.FileReader;
  var URL = WINDOW.URL || WINDOW.webkitURL;
  var REGEXP_EXTENSION = /\.\w+$/;
  var AnotherCompressor = WINDOW.Compressor;
  /**
   * Creates a new image compressor.
   * @class
   */

  var Compressor = /*#__PURE__*/function () {
    /**
     * The constructor of Compressor.
     * @param {File|Blob} file - The target image file for compressing.
     * @param {Object} [options] - The options for compressing.
     */
    function Compressor(file, options) {
      _classCallCheck(this, Compressor);
      this.file = file;
      this.image = new Image();
      this.options = _objectSpread2(_objectSpread2({}, DEFAULTS), options);
      this.aborted = false;
      this.result = null;
      this.init();
    }
    _createClass(Compressor, [{
      key: "init",
      value: function init() {
        var _this = this;
        var file = this.file,
          options = this.options;
        if (!isBlob(file)) {
          this.fail(new Error('The first argument must be a File or Blob object.'));
          return;
        }
        var mimeType = file.type;
        if (!isImageType(mimeType)) {
          this.fail(new Error('The first argument must be an image File or Blob object.'));
          return;
        }
        if (!URL || !FileReader) {
          this.fail(new Error('The current browser does not support image compression.'));
          return;
        }
        if (!ArrayBuffer$1) {
          options.checkOrientation = false;
        }
        if (URL && !options.checkOrientation) {
          this.load({
            url: URL.createObjectURL(file)
          });
        } else {
          var reader = new FileReader();
          var checkOrientation = options.checkOrientation && mimeType === 'image/jpeg';
          this.reader = reader;
          reader.onload = function (_ref) {
            var target = _ref.target;
            var result = target.result;
            var data = {};
            if (checkOrientation) {
              // Reset the orientation value to its default value 1
              // as some iOS browsers will render image with its orientation
              var orientation = resetAndGetOrientation(result);
              if (orientation > 1 || !URL) {
                // Generate a new URL which has the default orientation value
                data.url = arrayBufferToDataURL(result, mimeType);
                if (orientation > 1) {
                  _extends(data, parseOrientation(orientation));
                }
              } else {
                data.url = URL.createObjectURL(file);
              }
            } else {
              data.url = result;
            }
            _this.load(data);
          };
          reader.onabort = function () {
            _this.fail(new Error('Aborted to read the image with FileReader.'));
          };
          reader.onerror = function () {
            _this.fail(new Error('Failed to read the image with FileReader.'));
          };
          reader.onloadend = function () {
            _this.reader = null;
          };
          if (checkOrientation) {
            reader.readAsArrayBuffer(file);
          } else {
            reader.readAsDataURL(file);
          }
        }
      }
    }, {
      key: "load",
      value: function load(data) {
        var _this2 = this;
        var file = this.file,
          image = this.image;
        image.onload = function () {
          _this2.draw(_objectSpread2(_objectSpread2({}, data), {}, {
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight
          }));
        };
        image.onabort = function () {
          _this2.fail(new Error('Aborted to load the image.'));
        };
        image.onerror = function () {
          _this2.fail(new Error('Failed to load the image.'));
        }; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        if (WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent)) {
          // Fix the `The operation is insecure` error (#57)
          image.crossOrigin = 'anonymous';
        }
        image.alt = file.name;
        image.src = data.url;
      }
    }, {
      key: "draw",
      value: function draw(_ref2) {
        var _this3 = this;
        var naturalWidth = _ref2.naturalWidth,
          naturalHeight = _ref2.naturalHeight,
          _ref2$rotate = _ref2.rotate,
          rotate = _ref2$rotate === void 0 ? 0 : _ref2$rotate,
          _ref2$scaleX = _ref2.scaleX,
          scaleX = _ref2$scaleX === void 0 ? 1 : _ref2$scaleX,
          _ref2$scaleY = _ref2.scaleY,
          scaleY = _ref2$scaleY === void 0 ? 1 : _ref2$scaleY;
        var file = this.file,
          image = this.image,
          options = this.options;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var is90DegreesRotated = Math.abs(rotate) % 180 === 90;
        var resizable = (options.resize === 'contain' || options.resize === 'cover') && isPositiveNumber(options.width) && isPositiveNumber(options.height);
        var maxWidth = Math.max(options.maxWidth, 0) || Infinity;
        var maxHeight = Math.max(options.maxHeight, 0) || Infinity;
        var minWidth = Math.max(options.minWidth, 0) || 0;
        var minHeight = Math.max(options.minHeight, 0) || 0;
        var aspectRatio = naturalWidth / naturalHeight;
        var width = options.width,
          height = options.height;
        if (is90DegreesRotated) {
          var _ref3 = [maxHeight, maxWidth];
          maxWidth = _ref3[0];
          maxHeight = _ref3[1];
          var _ref4 = [minHeight, minWidth];
          minWidth = _ref4[0];
          minHeight = _ref4[1];
          var _ref5 = [height, width];
          width = _ref5[0];
          height = _ref5[1];
        }
        if (resizable) {
          aspectRatio = width / height;
        }
        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: maxWidth,
          height: maxHeight
        }, 'contain');
        maxWidth = _getAdjustedSizes.width;
        maxHeight = _getAdjustedSizes.height;
        var _getAdjustedSizes2 = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minWidth,
          height: minHeight
        }, 'cover');
        minWidth = _getAdjustedSizes2.width;
        minHeight = _getAdjustedSizes2.height;
        if (resizable) {
          var _getAdjustedSizes3 = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: width,
            height: height
          }, options.resize);
          width = _getAdjustedSizes3.width;
          height = _getAdjustedSizes3.height;
        } else {
          var _getAdjustedSizes4 = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: width,
            height: height
          });
          var _getAdjustedSizes4$wi = _getAdjustedSizes4.width;
          width = _getAdjustedSizes4$wi === void 0 ? naturalWidth : _getAdjustedSizes4$wi;
          var _getAdjustedSizes4$he = _getAdjustedSizes4.height;
          height = _getAdjustedSizes4$he === void 0 ? naturalHeight : _getAdjustedSizes4$he;
        }
        width = Math.floor(normalizeDecimalNumber(Math.min(Math.max(width, minWidth), maxWidth)));
        height = Math.floor(normalizeDecimalNumber(Math.min(Math.max(height, minHeight), maxHeight)));
        var destX = -width / 2;
        var destY = -height / 2;
        var destWidth = width;
        var destHeight = height;
        var params = [];
        if (resizable) {
          var srcX = 0;
          var srcY = 0;
          var srcWidth = naturalWidth;
          var srcHeight = naturalHeight;
          var _getAdjustedSizes5 = getAdjustedSizes({
            aspectRatio: aspectRatio,
            width: naturalWidth,
            height: naturalHeight
          }, {
            contain: 'cover',
            cover: 'contain'
          }[options.resize]);
          srcWidth = _getAdjustedSizes5.width;
          srcHeight = _getAdjustedSizes5.height;
          srcX = (naturalWidth - srcWidth) / 2;
          srcY = (naturalHeight - srcHeight) / 2;
          params.push(srcX, srcY, srcWidth, srcHeight);
        }
        params.push(destX, destY, destWidth, destHeight);
        if (is90DegreesRotated) {
          var _ref6 = [height, width];
          width = _ref6[0];
          height = _ref6[1];
        }
        canvas.width = width;
        canvas.height = height;
        if (!isImageType(options.mimeType)) {
          options.mimeType = file.type;
        }
        var fillStyle = 'transparent'; // Converts PNG files over the `convertSize` to JPEGs.

        if (file.size > options.convertSize && options.convertTypes.indexOf(options.mimeType) >= 0) {
          options.mimeType = 'image/jpeg';
        }
        if (options.mimeType === 'image/jpeg') {
          fillStyle = '#fff';
        } // Override the default fill color (#000, black)

        context.fillStyle = fillStyle;
        context.fillRect(0, 0, width, height);
        if (options.beforeDraw) {
          options.beforeDraw.call(this, context, canvas);
        }
        if (this.aborted) {
          return;
        }
        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(rotate * Math.PI / 180);
        context.scale(scaleX, scaleY);
        context.drawImage.apply(context, [image].concat(params));
        context.restore();
        if (options.drew) {
          options.drew.call(this, context, canvas);
        }
        if (this.aborted) {
          return;
        }
        var done = function done(result) {
          if (!_this3.aborted) {
            _this3.done({
              naturalWidth: naturalWidth,
              naturalHeight: naturalHeight,
              result: result
            });
          }
        };
        if (canvas.toBlob) {
          canvas.toBlob(done, options.mimeType, options.quality);
        } else {
          done(toBlob(canvas.toDataURL(options.mimeType, options.quality)));
        }
      }
    }, {
      key: "done",
      value: function done(_ref7) {
        var naturalWidth = _ref7.naturalWidth,
          naturalHeight = _ref7.naturalHeight,
          result = _ref7.result;
        var file = this.file,
          image = this.image,
          options = this.options;
        if (URL && !options.checkOrientation) {
          URL.revokeObjectURL(image.src);
        }
        if (result) {
          // Returns original file if the result is greater than it and without size related options
          if (options.strict && result.size > file.size && options.mimeType === file.type && !(options.width > naturalWidth || options.height > naturalHeight || options.minWidth > naturalWidth || options.minHeight > naturalHeight || options.maxWidth < naturalWidth || options.maxHeight < naturalHeight)) {
            result = file;
          } else {
            var date = new Date();
            result.lastModified = date.getTime();
            result.lastModifiedDate = date;
            result.name = file.name; // Convert the extension to match its type

            if (result.name && result.type !== file.type) {
              result.name = result.name.replace(REGEXP_EXTENSION, imageTypeToExtension(result.type));
            }
          }
        } else {
          // Returns original file if the result is null in some cases.
          result = file;
        }
        this.result = result;
        if (options.success) {
          options.success.call(this, result);
        }
      }
    }, {
      key: "fail",
      value: function fail(err) {
        var options = this.options;
        if (options.error) {
          options.error.call(this, err);
        } else {
          throw err;
        }
      }
    }, {
      key: "abort",
      value: function abort() {
        if (!this.aborted) {
          this.aborted = true;
          if (this.reader) {
            this.reader.abort();
          } else if (!this.image.complete) {
            this.image.onload = null;
            this.image.onabort();
          } else {
            this.fail(new Error('The compression process has been aborted.'));
          }
        }
      }
      /**
       * Get the no conflict compressor class.
       * @returns {Compressor} The compressor class.
       */
    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Compressor = AnotherCompressor;
        return Compressor;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */
    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        _extends(DEFAULTS, options);
      }
    }]);
    return Compressor;
  }();
  return Compressor;
});

/***/ }),

/***/ "./node_modules/notyf/notyf.es.js":
/*!****************************************!*\
  !*** ./node_modules/notyf/notyf.es.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_OPTIONS": () => (/* binding */ DEFAULT_OPTIONS),
/* harmony export */   "Notyf": () => (/* binding */ Notyf),
/* harmony export */   "NotyfArray": () => (/* binding */ NotyfArray),
/* harmony export */   "NotyfArrayEvent": () => (/* binding */ NotyfArrayEvent),
/* harmony export */   "NotyfEvent": () => (/* binding */ NotyfEvent),
/* harmony export */   "NotyfNotification": () => (/* binding */ NotyfNotification),
/* harmony export */   "NotyfView": () => (/* binding */ NotyfView)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var NotyfNotification = /** @class */function () {
  function NotyfNotification(options) {
    this.options = options;
    this.listeners = {};
  }
  NotyfNotification.prototype.on = function (eventType, cb) {
    var callbacks = this.listeners[eventType] || [];
    this.listeners[eventType] = callbacks.concat([cb]);
  };
  NotyfNotification.prototype.triggerEvent = function (eventType, event) {
    var _this = this;
    var callbacks = this.listeners[eventType] || [];
    callbacks.forEach(function (cb) {
      return cb({
        target: _this,
        event: event
      });
    });
  };
  return NotyfNotification;
}();
var NotyfArrayEvent;
(function (NotyfArrayEvent) {
  NotyfArrayEvent[NotyfArrayEvent["Add"] = 0] = "Add";
  NotyfArrayEvent[NotyfArrayEvent["Remove"] = 1] = "Remove";
})(NotyfArrayEvent || (NotyfArrayEvent = {}));
var NotyfArray = /** @class */function () {
  function NotyfArray() {
    this.notifications = [];
  }
  NotyfArray.prototype.push = function (elem) {
    this.notifications.push(elem);
    this.updateFn(elem, NotyfArrayEvent.Add, this.notifications);
  };
  NotyfArray.prototype.splice = function (index, num) {
    var elem = this.notifications.splice(index, num)[0];
    this.updateFn(elem, NotyfArrayEvent.Remove, this.notifications);
    return elem;
  };
  NotyfArray.prototype.indexOf = function (elem) {
    return this.notifications.indexOf(elem);
  };
  NotyfArray.prototype.onUpdate = function (fn) {
    this.updateFn = fn;
  };
  return NotyfArray;
}();
var NotyfEvent;
(function (NotyfEvent) {
  NotyfEvent["Dismiss"] = "dismiss";
  NotyfEvent["Click"] = "click";
})(NotyfEvent || (NotyfEvent = {}));
var DEFAULT_OPTIONS = {
  types: [{
    type: 'success',
    className: 'notyf__toast--success',
    backgroundColor: '#3dc763',
    icon: {
      className: 'notyf__icon--success',
      tagName: 'i'
    }
  }, {
    type: 'error',
    className: 'notyf__toast--error',
    backgroundColor: '#ed3d3d',
    icon: {
      className: 'notyf__icon--error',
      tagName: 'i'
    }
  }],
  duration: 2000,
  ripple: true,
  position: {
    x: 'right',
    y: 'bottom'
  },
  dismissible: false
};
var NotyfView = /** @class */function () {
  function NotyfView() {
    this.notifications = [];
    this.events = {};
    this.X_POSITION_FLEX_MAP = {
      left: 'flex-start',
      center: 'center',
      right: 'flex-end'
    };
    this.Y_POSITION_FLEX_MAP = {
      top: 'flex-start',
      center: 'center',
      bottom: 'flex-end'
    };
    // Creates the main notifications container
    var docFrag = document.createDocumentFragment();
    var notyfContainer = this._createHTMLElement({
      tagName: 'div',
      className: 'notyf'
    });
    docFrag.appendChild(notyfContainer);
    document.body.appendChild(docFrag);
    this.container = notyfContainer;
    // Identifies the main animation end event
    this.animationEndEventName = this._getAnimationEndEventName();
    this._createA11yContainer();
  }
  NotyfView.prototype.on = function (event, cb) {
    var _a;
    this.events = __assign(__assign({}, this.events), (_a = {}, _a[event] = cb, _a));
  };
  NotyfView.prototype.update = function (notification, type) {
    if (type === NotyfArrayEvent.Add) {
      this.addNotification(notification);
    } else if (type === NotyfArrayEvent.Remove) {
      this.removeNotification(notification);
    }
  };
  NotyfView.prototype.removeNotification = function (notification) {
    var _this = this;
    var renderedNotification = this._popRenderedNotification(notification);
    var node;
    if (!renderedNotification) {
      return;
    }
    node = renderedNotification.node;
    node.classList.add('notyf__toast--disappear');
    var handleEvent;
    node.addEventListener(this.animationEndEventName, handleEvent = function (event) {
      if (event.target === node) {
        node.removeEventListener(_this.animationEndEventName, handleEvent);
        _this.container.removeChild(node);
      }
    });
  };
  NotyfView.prototype.addNotification = function (notification) {
    var node = this._renderNotification(notification);
    this.notifications.push({
      notification: notification,
      node: node
    });
    // For a11y purposes, we still want to announce that there's a notification in the screen
    // even if it comes with no message.
    this._announce(notification.options.message || 'Notification');
  };
  NotyfView.prototype._renderNotification = function (notification) {
    var _a;
    var card = this._buildNotificationCard(notification);
    var className = notification.options.className;
    if (className) {
      (_a = card.classList).add.apply(_a, className.split(' '));
    }
    this.container.appendChild(card);
    return card;
  };
  NotyfView.prototype._popRenderedNotification = function (notification) {
    var idx = -1;
    for (var i = 0; i < this.notifications.length && idx < 0; i++) {
      if (this.notifications[i].notification === notification) {
        idx = i;
      }
    }
    if (idx !== -1) {
      return this.notifications.splice(idx, 1)[0];
    }
    return;
  };
  NotyfView.prototype.getXPosition = function (options) {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.x) || 'right';
  };
  NotyfView.prototype.getYPosition = function (options) {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.y) || 'bottom';
  };
  NotyfView.prototype.adjustContainerAlignment = function (options) {
    var align = this.X_POSITION_FLEX_MAP[this.getXPosition(options)];
    var justify = this.Y_POSITION_FLEX_MAP[this.getYPosition(options)];
    var style = this.container.style;
    style.setProperty('justify-content', justify);
    style.setProperty('align-items', align);
  };
  NotyfView.prototype._buildNotificationCard = function (notification) {
    var _this = this;
    var options = notification.options;
    var iconOpts = options.icon;
    // Adjust container according to position (e.g. top-left, bottom-center, etc)
    this.adjustContainerAlignment(options);
    // Create elements
    var notificationElem = this._createHTMLElement({
      tagName: 'div',
      className: 'notyf__toast'
    });
    var ripple = this._createHTMLElement({
      tagName: 'div',
      className: 'notyf__ripple'
    });
    var wrapper = this._createHTMLElement({
      tagName: 'div',
      className: 'notyf__wrapper'
    });
    var message = this._createHTMLElement({
      tagName: 'div',
      className: 'notyf__message'
    });
    message.innerHTML = options.message || '';
    var mainColor = options.background || options.backgroundColor;
    // Build the icon and append it to the card
    if (iconOpts) {
      var iconContainer = this._createHTMLElement({
        tagName: 'div',
        className: 'notyf__icon'
      });
      if (typeof iconOpts === 'string' || iconOpts instanceof String) iconContainer.innerHTML = new String(iconOpts).valueOf();
      if (typeof iconOpts === 'object') {
        var _a = iconOpts.tagName,
          tagName = _a === void 0 ? 'i' : _a,
          className_1 = iconOpts.className,
          text = iconOpts.text,
          _b = iconOpts.color,
          color = _b === void 0 ? mainColor : _b;
        var iconElement = this._createHTMLElement({
          tagName: tagName,
          className: className_1,
          text: text
        });
        if (color) iconElement.style.color = color;
        iconContainer.appendChild(iconElement);
      }
      wrapper.appendChild(iconContainer);
    }
    wrapper.appendChild(message);
    notificationElem.appendChild(wrapper);
    // Add ripple if applicable, else just paint the full toast
    if (mainColor) {
      if (options.ripple) {
        ripple.style.background = mainColor;
        notificationElem.appendChild(ripple);
      } else {
        notificationElem.style.background = mainColor;
      }
    }
    // Add dismiss button
    if (options.dismissible) {
      var dismissWrapper = this._createHTMLElement({
        tagName: 'div',
        className: 'notyf__dismiss'
      });
      var dismissButton = this._createHTMLElement({
        tagName: 'button',
        className: 'notyf__dismiss-btn'
      });
      dismissWrapper.appendChild(dismissButton);
      wrapper.appendChild(dismissWrapper);
      notificationElem.classList.add("notyf__toast--dismissible");
      dismissButton.addEventListener('click', function (event) {
        var _a, _b;
        (_b = (_a = _this.events)[NotyfEvent.Dismiss]) === null || _b === void 0 ? void 0 : _b.call(_a, {
          target: notification,
          event: event
        });
        event.stopPropagation();
      });
    }
    notificationElem.addEventListener('click', function (event) {
      var _a, _b;
      return (_b = (_a = _this.events)[NotyfEvent.Click]) === null || _b === void 0 ? void 0 : _b.call(_a, {
        target: notification,
        event: event
      });
    });
    // Adjust margins depending on whether its an upper or lower notification
    var className = this.getYPosition(options) === 'top' ? 'upper' : 'lower';
    notificationElem.classList.add("notyf__toast--" + className);
    return notificationElem;
  };
  NotyfView.prototype._createHTMLElement = function (_a) {
    var tagName = _a.tagName,
      className = _a.className,
      text = _a.text;
    var elem = document.createElement(tagName);
    if (className) {
      elem.className = className;
    }
    elem.textContent = text || null;
    return elem;
  };
  /**
   * Creates an invisible container which will announce the notyfs to
   * screen readers
   */
  NotyfView.prototype._createA11yContainer = function () {
    var a11yContainer = this._createHTMLElement({
      tagName: 'div',
      className: 'notyf-announcer'
    });
    a11yContainer.setAttribute('aria-atomic', 'true');
    a11yContainer.setAttribute('aria-live', 'polite');
    // Set the a11y container to be visible hidden. Can't use display: none as
    // screen readers won't read it.
    a11yContainer.style.border = '0';
    a11yContainer.style.clip = 'rect(0 0 0 0)';
    a11yContainer.style.height = '1px';
    a11yContainer.style.margin = '-1px';
    a11yContainer.style.overflow = 'hidden';
    a11yContainer.style.padding = '0';
    a11yContainer.style.position = 'absolute';
    a11yContainer.style.width = '1px';
    a11yContainer.style.outline = '0';
    document.body.appendChild(a11yContainer);
    this.a11yContainer = a11yContainer;
  };
  /**
   * Announces a message to screenreaders.
   */
  NotyfView.prototype._announce = function (message) {
    var _this = this;
    this.a11yContainer.textContent = '';
    // This 100ms timeout is necessary for some browser + screen-reader combinations:
    // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
    // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
    //   second time without clearing and then using a non-zero delay.
    // (using JAWS 17 at time of this writing).
    // https://github.com/angular/material2/blob/master/src/cdk/a11y/live-announcer/live-announcer.ts
    setTimeout(function () {
      _this.a11yContainer.textContent = message;
    }, 100);
  };
  /**
   * Determine which animationend event is supported
   */
  NotyfView.prototype._getAnimationEndEventName = function () {
    var el = document.createElement('_fake');
    var transitions = {
      MozTransition: 'animationend',
      OTransition: 'oAnimationEnd',
      WebkitTransition: 'webkitAnimationEnd',
      transition: 'animationend'
    };
    var t;
    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
    // No supported animation end event. Using "animationend" as a fallback
    return 'animationend';
  };
  return NotyfView;
}();

/**
 * Main controller class. Defines the main Notyf API.
 */
var Notyf = /** @class */function () {
  function Notyf(opts) {
    var _this = this;
    this.dismiss = this._removeNotification;
    this.notifications = new NotyfArray();
    this.view = new NotyfView();
    var types = this.registerTypes(opts);
    this.options = __assign(__assign({}, DEFAULT_OPTIONS), opts);
    this.options.types = types;
    this.notifications.onUpdate(function (elem, type) {
      return _this.view.update(elem, type);
    });
    this.view.on(NotyfEvent.Dismiss, function (_a) {
      var target = _a.target,
        event = _a.event;
      _this._removeNotification(target);
      // tslint:disable-next-line: no-string-literal
      target['triggerEvent'](NotyfEvent.Dismiss, event);
    });
    // tslint:disable-next-line: no-string-literal
    this.view.on(NotyfEvent.Click, function (_a) {
      var target = _a.target,
        event = _a.event;
      return target['triggerEvent'](NotyfEvent.Click, event);
    });
  }
  Notyf.prototype.error = function (payload) {
    var options = this.normalizeOptions('error', payload);
    return this.open(options);
  };
  Notyf.prototype.success = function (payload) {
    var options = this.normalizeOptions('success', payload);
    return this.open(options);
  };
  Notyf.prototype.open = function (options) {
    var defaultOpts = this.options.types.find(function (_a) {
      var type = _a.type;
      return type === options.type;
    }) || {};
    var config = __assign(__assign({}, defaultOpts), options);
    this.assignProps(['ripple', 'position', 'dismissible'], config);
    var notification = new NotyfNotification(config);
    this._pushNotification(notification);
    return notification;
  };
  Notyf.prototype.dismissAll = function () {
    while (this.notifications.splice(0, 1));
  };
  /**
   * Assigns properties to a config object based on two rules:
   * 1. If the config object already sets that prop, leave it as so
   * 2. Otherwise, use the default prop from the global options
   *
   * It's intended to build the final config object to open a notification. e.g. if
   * 'dismissible' is not set, then use the value from the global config.
   *
   * @param props - properties to be assigned to the config object
   * @param config - object whose properties need to be set
   */
  Notyf.prototype.assignProps = function (props, config) {
    var _this = this;
    props.forEach(function (prop) {
      // intentional double equality to check for both null and undefined
      config[prop] = config[prop] == null ? _this.options[prop] : config[prop];
    });
  };
  Notyf.prototype._pushNotification = function (notification) {
    var _this = this;
    this.notifications.push(notification);
    var duration = notification.options.duration !== undefined ? notification.options.duration : this.options.duration;
    if (duration) {
      setTimeout(function () {
        return _this._removeNotification(notification);
      }, duration);
    }
  };
  Notyf.prototype._removeNotification = function (notification) {
    var index = this.notifications.indexOf(notification);
    if (index !== -1) {
      this.notifications.splice(index, 1);
    }
  };
  Notyf.prototype.normalizeOptions = function (type, payload) {
    var options = {
      type: type
    };
    if (typeof payload === 'string') {
      options.message = payload;
    } else if (typeof payload === 'object') {
      options = __assign(__assign({}, options), payload);
    }
    return options;
  };
  Notyf.prototype.registerTypes = function (opts) {
    var incomingTypes = (opts && opts.types || []).slice();
    var finalDefaultTypes = DEFAULT_OPTIONS.types.map(function (defaultType) {
      // find if there's a default type within the user input's types, if so, it means the user
      // wants to change some of the default settings
      var userTypeIdx = -1;
      incomingTypes.forEach(function (t, idx) {
        if (t.type === defaultType.type) userTypeIdx = idx;
      });
      var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};
      return __assign(__assign({}, defaultType), userType);
    });
    return finalDefaultTypes.concat(incomingTypes);
  };
  return Notyf;
}();


/***/ }),

/***/ "./src/app/assets/javascripts/flash.js":
/*!*********************************************!*\
  !*** ./src/app/assets/javascripts/flash.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var notyf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notyf */ "./node_modules/notyf/notyf.es.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/assets/javascripts/utils.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var element = document.getElementById("notification");
  if (element) {
    var json = JSON.parse(element.dataset.notice);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(json)) {
      var notyf = new notyf__WEBPACK_IMPORTED_MODULE_0__.Notyf({
        duration: 5000
      });
      Object.keys(json).map(key => {
        json[key].map(notice => {
          if (["alert", "error"].includes(key)) notyf.error(notice.message);
          if (["success", "info"].includes(key)) notyf.success(notice.message);
        });
      });
    }
  }
});

/***/ }),

/***/ "./src/app/assets/javascripts/utils.js":
/*!*********************************************!*\
  !*** ./src/app/assets/javascripts/utils.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b64toBlob": () => (/* binding */ b64toBlob),
/* harmony export */   "base64ToBlob": () => (/* binding */ base64ToBlob),
/* harmony export */   "compressFile": () => (/* binding */ compressFile),
/* harmony export */   "csrfToken": () => (/* binding */ csrfToken),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "uuidv4": () => (/* binding */ uuidv4)
/* harmony export */ });
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compressorjs */ "./node_modules/compressorjs/dist/compressor.js");
/* harmony import */ var compressorjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(compressorjs__WEBPACK_IMPORTED_MODULE_0__);

var isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
var base64ToBlob = url => {
  return fetch(url).then(res => res.blob());
};
var csrfToken = () => {
  return document.querySelector('meta[name="csrf-token"]').getAttribute("content");
};
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
var compressFile = file => {
  return new Promise((resolve, reject) => {
    new (compressorjs__WEBPACK_IMPORTED_MODULE_0___default())(file, {
      quality: 0.8,
      success(result) {
        resolve(result);
      },
      error(err) {
        resolve(file);
      }
    });
  });
};
var toggleClass = (selector, className) => {
  if (!selector || !className) return;
  var elements = document.querySelector(selector);
  if (elements.classList.contains(className)) {
    elements.classList.remove(className);
    return;
  }
  elements.classList.add(className);
};
function b64toBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {
    type: "image/jpeg"
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./src/app/assets/javascripts/application.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flash */ "./src/app/assets/javascripts/flash.js");

var $ = document.querySelector.bind(document);
window.$ = $;
document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    (0,_flash__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLFVBQVVBLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0VBQzFCLEtBQTRELEdBQUdFLE1BQU0sQ0FBQ0QsT0FBTyxHQUFHRCxPQUFPLEVBQUUsR0FDekYsQ0FDeUc7QUFDM0csQ0FBQyxFQUFFLElBQUksRUFBRyxZQUFZO0VBQUUsWUFBWTs7RUFFbEMsU0FBU1EsT0FBTyxDQUFDQyxNQUFNLEVBQUVDLGNBQWMsRUFBRTtJQUN2QyxJQUFJQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRixNQUFNLENBQUM7SUFFOUIsSUFBSUcsTUFBTSxDQUFDQyxxQkFBcUIsRUFBRTtNQUNoQyxJQUFJQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0MscUJBQXFCLENBQUNKLE1BQU0sQ0FBQztNQUVsRCxJQUFJQyxjQUFjLEVBQUU7UUFDbEJJLE9BQU8sR0FBR0EsT0FBTyxDQUFDQyxNQUFNLENBQUMsVUFBVUMsR0FBRyxFQUFFO1VBQ3RDLE9BQU9KLE1BQU0sQ0FBQ0ssd0JBQXdCLENBQUNSLE1BQU0sRUFBRU8sR0FBRyxDQUFDLENBQUNFLFVBQVU7UUFDaEUsQ0FBQyxDQUFDO01BQ0o7TUFFQVAsSUFBSSxDQUFDUSxJQUFJLENBQUNDLEtBQUssQ0FBQ1QsSUFBSSxFQUFFRyxPQUFPLENBQUM7SUFDaEM7SUFFQSxPQUFPSCxJQUFJO0VBQ2I7RUFFQSxTQUFTVSxjQUFjLENBQUNDLE1BQU0sRUFBRTtJQUM5QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO01BQ3pDLElBQUlHLE1BQU0sR0FBR0YsU0FBUyxDQUFDRCxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUdDLFNBQVMsQ0FBQ0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BRXJELElBQUlBLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDVGYsT0FBTyxDQUFDSSxNQUFNLENBQUNjLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBVUMsR0FBRyxFQUFFO1VBQ25EQyxlQUFlLENBQUNQLE1BQU0sRUFBRU0sR0FBRyxFQUFFRixNQUFNLENBQUNFLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQztNQUNKLENBQUMsTUFBTSxJQUFJaEIsTUFBTSxDQUFDa0IseUJBQXlCLEVBQUU7UUFDM0NsQixNQUFNLENBQUNtQixnQkFBZ0IsQ0FBQ1QsTUFBTSxFQUFFVixNQUFNLENBQUNrQix5QkFBeUIsQ0FBQ0osTUFBTSxDQUFDLENBQUM7TUFDM0UsQ0FBQyxNQUFNO1FBQ0xsQixPQUFPLENBQUNJLE1BQU0sQ0FBQ2MsTUFBTSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVDLEdBQUcsRUFBRTtVQUM3Q2hCLE1BQU0sQ0FBQ29CLGNBQWMsQ0FBQ1YsTUFBTSxFQUFFTSxHQUFHLEVBQUVoQixNQUFNLENBQUNLLHdCQUF3QixDQUFDUyxNQUFNLEVBQUVFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQztNQUNKO0lBQ0Y7SUFFQSxPQUFPTixNQUFNO0VBQ2Y7RUFFQSxTQUFTVyxlQUFlLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxFQUFFO0lBQzlDLElBQUksRUFBRUQsUUFBUSxZQUFZQyxXQUFXLENBQUMsRUFBRTtNQUN0QyxNQUFNLElBQUlDLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQztJQUMxRDtFQUNGO0VBRUEsU0FBU0MsaUJBQWlCLENBQUNmLE1BQU0sRUFBRWdCLEtBQUssRUFBRTtJQUN4QyxLQUFLLElBQUlmLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2UsS0FBSyxDQUFDYixNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO01BQ3JDLElBQUlnQixVQUFVLEdBQUdELEtBQUssQ0FBQ2YsQ0FBQyxDQUFDO01BQ3pCZ0IsVUFBVSxDQUFDckIsVUFBVSxHQUFHcUIsVUFBVSxDQUFDckIsVUFBVSxJQUFJLEtBQUs7TUFDdERxQixVQUFVLENBQUNDLFlBQVksR0FBRyxJQUFJO01BQzlCLElBQUksT0FBTyxJQUFJRCxVQUFVLEVBQUVBLFVBQVUsQ0FBQ0UsUUFBUSxHQUFHLElBQUk7TUFDckQ3QixNQUFNLENBQUNvQixjQUFjLENBQUNWLE1BQU0sRUFBRWlCLFVBQVUsQ0FBQ1gsR0FBRyxFQUFFVyxVQUFVLENBQUM7SUFDM0Q7RUFDRjtFQUVBLFNBQVNHLFlBQVksQ0FBQ1AsV0FBVyxFQUFFUSxVQUFVLEVBQUVDLFdBQVcsRUFBRTtJQUMxRCxJQUFJRCxVQUFVLEVBQUVOLGlCQUFpQixDQUFDRixXQUFXLENBQUNVLFNBQVMsRUFBRUYsVUFBVSxDQUFDO0lBQ3BFLElBQUlDLFdBQVcsRUFBRVAsaUJBQWlCLENBQUNGLFdBQVcsRUFBRVMsV0FBVyxDQUFDO0lBQzVELE9BQU9ULFdBQVc7RUFDcEI7RUFFQSxTQUFTTixlQUFlLENBQUNpQixHQUFHLEVBQUVsQixHQUFHLEVBQUVtQixLQUFLLEVBQUU7SUFDeEMsSUFBSW5CLEdBQUcsSUFBSWtCLEdBQUcsRUFBRTtNQUNkbEMsTUFBTSxDQUFDb0IsY0FBYyxDQUFDYyxHQUFHLEVBQUVsQixHQUFHLEVBQUU7UUFDOUJtQixLQUFLLEVBQUVBLEtBQUs7UUFDWjdCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCc0IsWUFBWSxFQUFFLElBQUk7UUFDbEJDLFFBQVEsRUFBRTtNQUNaLENBQUMsQ0FBQztJQUNKLENBQUMsTUFBTTtNQUNMSyxHQUFHLENBQUNsQixHQUFHLENBQUMsR0FBR21CLEtBQUs7SUFDbEI7SUFFQSxPQUFPRCxHQUFHO0VBQ1o7RUFFQSxTQUFTRSxRQUFRLEdBQUc7SUFDbEJBLFFBQVEsR0FBR3BDLE1BQU0sQ0FBQ3FDLE1BQU0sSUFBSSxVQUFVM0IsTUFBTSxFQUFFO01BQzVDLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHQyxTQUFTLENBQUNDLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7UUFDekMsSUFBSUcsTUFBTSxHQUFHRixTQUFTLENBQUNELENBQUMsQ0FBQztRQUV6QixLQUFLLElBQUlLLEdBQUcsSUFBSUYsTUFBTSxFQUFFO1VBQ3RCLElBQUlkLE1BQU0sQ0FBQ2lDLFNBQVMsQ0FBQ0ssY0FBYyxDQUFDQyxJQUFJLENBQUN6QixNQUFNLEVBQUVFLEdBQUcsQ0FBQyxFQUFFO1lBQ3JETixNQUFNLENBQUNNLEdBQUcsQ0FBQyxHQUFHRixNQUFNLENBQUNFLEdBQUcsQ0FBQztVQUMzQjtRQUNGO01BQ0Y7TUFFQSxPQUFPTixNQUFNO0lBQ2YsQ0FBQztJQUVELE9BQU8wQixRQUFRLENBQUM1QixLQUFLLENBQUMsSUFBSSxFQUFFSSxTQUFTLENBQUM7RUFDeEM7RUFFQSxJQUFJNEIsWUFBWSxHQUFHO0lBQUNuRCxPQUFPLEVBQUUsQ0FBQztFQUFDLENBQUM7O0VBRWhDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFLENBQUMsVUFBVUMsTUFBTSxFQUFFO0lBQ25CLElBQUksT0FBT21ELE1BQU0sS0FBSyxXQUFXLEVBQUU7TUFDakM7SUFDRjtJQUVFLENBQUMsVUFBVUEsTUFBTSxFQUFFO01BRWpCLElBQUlDLGVBQWUsR0FBR0QsTUFBTSxDQUFDRSxpQkFBaUIsSUFBSUYsTUFBTSxDQUFDRSxpQkFBaUIsQ0FBQ1YsU0FBUztNQUVwRixJQUFJVyxrQkFBa0IsR0FBR0gsTUFBTSxDQUFDSSxJQUFJLElBQUksWUFBWTtRQUNsRCxJQUFJO1VBQ0YsT0FBT0MsT0FBTyxDQUFDLElBQUlELElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxPQUFPRSxDQUFDLEVBQUU7VUFDVixPQUFPLEtBQUs7UUFDZDtNQUNGLENBQUMsRUFBRTtNQUVILElBQUlDLHlCQUF5QixHQUFHSixrQkFBa0IsSUFBSUgsTUFBTSxDQUFDUSxVQUFVLElBQUksWUFBWTtRQUNyRixJQUFJO1VBQ0YsT0FBTyxJQUFJSixJQUFJLENBQUMsQ0FBQyxJQUFJSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEtBQUssR0FBRztRQUNyRCxDQUFDLENBQUMsT0FBT0gsQ0FBQyxFQUFFO1VBQ1YsT0FBTyxLQUFLO1FBQ2Q7TUFDRixDQUFDLEVBQUU7TUFFSCxJQUFJSSxXQUFXLEdBQUdWLE1BQU0sQ0FBQ1UsV0FBVyxJQUFJVixNQUFNLENBQUNXLGlCQUFpQixJQUFJWCxNQUFNLENBQUNZLGNBQWMsSUFBSVosTUFBTSxDQUFDYSxhQUFhO01BQ2pILElBQUlDLGNBQWMsR0FBRyx5Q0FBeUM7TUFFOUQsSUFBSUMsYUFBYSxHQUFHLENBQUNaLGtCQUFrQixJQUFJTyxXQUFXLEtBQUtWLE1BQU0sQ0FBQ2dCLElBQUksSUFBSWhCLE1BQU0sQ0FBQ2lCLFdBQVcsSUFBSWpCLE1BQU0sQ0FBQ1EsVUFBVSxJQUFJLFVBQVVVLE9BQU8sRUFBRTtRQUN0SSxJQUFJQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUV2RCxDQUFDLEVBQUV3RCxFQUFFLENBQUMsQ0FBQzs7UUFFeEZQLE9BQU8sR0FBR0QsT0FBTyxDQUFDUyxLQUFLLENBQUNiLGNBQWMsQ0FBQztRQUV2QyxJQUFJLENBQUNLLE9BQU8sRUFBRTtVQUNaLE1BQU0sSUFBSVMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1FBQ3JDLENBQUMsQ0FBQzs7UUFHRlIsU0FBUyxHQUFHRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUdBLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLElBQUlBLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBbUIsQ0FBQztRQUN4RkUsUUFBUSxHQUFHLENBQUMsQ0FBQ0YsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2QkcsVUFBVSxHQUFHSixPQUFPLENBQUNXLEtBQUssQ0FBQ1YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDL0MsTUFBTSxDQUFDO1FBRTdDLElBQUlpRCxRQUFRLEVBQUU7VUFDWjtVQUNBRSxVQUFVLEdBQUdQLElBQUksQ0FBQ00sVUFBVSxDQUFDO1FBQy9CLENBQUMsTUFBTTtVQUNMO1VBQ0FDLFVBQVUsR0FBR08sa0JBQWtCLENBQUNSLFVBQVUsQ0FBQztRQUM3QyxDQUFDLENBQUM7O1FBR0ZFLFdBQVcsR0FBRyxJQUFJUCxXQUFXLENBQUNNLFVBQVUsQ0FBQ25ELE1BQU0sQ0FBQztRQUNoRHFELFFBQVEsR0FBRyxJQUFJakIsVUFBVSxDQUFDZ0IsV0FBVyxDQUFDO1FBRXRDLEtBQUt0RCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdxRCxVQUFVLENBQUNuRCxNQUFNLEVBQUVGLENBQUMsSUFBSSxDQUFDLEVBQUU7VUFDekN1RCxRQUFRLENBQUN2RCxDQUFDLENBQUMsR0FBR3FELFVBQVUsQ0FBQ1EsVUFBVSxDQUFDN0QsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQzs7UUFHRixJQUFJaUMsa0JBQWtCLEVBQUU7VUFDdEIsT0FBTyxJQUFJQyxJQUFJLENBQUMsQ0FBQ0cseUJBQXlCLEdBQUdrQixRQUFRLEdBQUdELFdBQVcsQ0FBQyxFQUFFO1lBQ3BFUSxJQUFJLEVBQUVaO1VBQ1IsQ0FBQyxDQUFDO1FBQ0o7UUFFQU0sRUFBRSxHQUFHLElBQUloQixXQUFXLEVBQUU7UUFDdEJnQixFQUFFLENBQUNPLE1BQU0sQ0FBQ1QsV0FBVyxDQUFDO1FBQ3RCLE9BQU9FLEVBQUUsQ0FBQ1EsT0FBTyxDQUFDZCxTQUFTLENBQUM7TUFDOUIsQ0FBQztNQUVELElBQUlwQixNQUFNLENBQUNFLGlCQUFpQixJQUFJLENBQUNELGVBQWUsQ0FBQ2tDLE1BQU0sRUFBRTtRQUN2RCxJQUFJbEMsZUFBZSxDQUFDbUMsWUFBWSxFQUFFO1VBQ2hDbkMsZUFBZSxDQUFDa0MsTUFBTSxHQUFHLFVBQVVFLFFBQVEsRUFBRUwsSUFBSSxFQUFFTSxPQUFPLEVBQUU7WUFDMUQsSUFBSXJGLElBQUksR0FBRyxJQUFJO1lBQ2ZzRixVQUFVLENBQUMsWUFBWTtjQUNyQixJQUFJRCxPQUFPLElBQUlyQyxlQUFlLENBQUN1QyxTQUFTLElBQUl6QixhQUFhLEVBQUU7Z0JBQ3pEc0IsUUFBUSxDQUFDdEIsYUFBYSxDQUFDOUQsSUFBSSxDQUFDdUYsU0FBUyxDQUFDUixJQUFJLEVBQUVNLE9BQU8sQ0FBQyxDQUFDLENBQUM7Y0FDeEQsQ0FBQyxNQUFNO2dCQUNMRCxRQUFRLENBQUNwRixJQUFJLENBQUNtRixZQUFZLENBQUMsTUFBTSxFQUFFSixJQUFJLENBQUMsQ0FBQztjQUMzQztZQUNGLENBQUMsQ0FBQztVQUNKLENBQUM7UUFDSCxDQUFDLE1BQU0sSUFBSS9CLGVBQWUsQ0FBQ3VDLFNBQVMsSUFBSXpCLGFBQWEsRUFBRTtVQUNyRCxJQUFJZCxlQUFlLENBQUN3QyxRQUFRLEVBQUU7WUFDNUJ4QyxlQUFlLENBQUNrQyxNQUFNLEdBQUcsVUFBVUUsUUFBUSxFQUFFTCxJQUFJLEVBQUVNLE9BQU8sRUFBRTtjQUMxRCxJQUFJckYsSUFBSSxHQUFHLElBQUk7Y0FDZnNGLFVBQVUsQ0FBQyxZQUFZO2dCQUNyQixJQUFJLENBQUNQLElBQUksSUFBSUEsSUFBSSxLQUFLLFdBQVcsSUFBSU0sT0FBTyxLQUFLckMsZUFBZSxDQUFDdUMsU0FBUyxJQUFJekIsYUFBYSxFQUFFO2tCQUMzRnNCLFFBQVEsQ0FBQ3RCLGFBQWEsQ0FBQzlELElBQUksQ0FBQ3VGLFNBQVMsQ0FBQ1IsSUFBSSxFQUFFTSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLE1BQU07a0JBQ0xELFFBQVEsQ0FBQ3BGLElBQUksQ0FBQ3dGLFFBQVEsQ0FBQ1QsSUFBSSxDQUFDLENBQUM7Z0JBQy9CO2NBQ0YsQ0FBQyxDQUFDO1lBQ0osQ0FBQztVQUNILENBQUMsTUFBTTtZQUNML0IsZUFBZSxDQUFDa0MsTUFBTSxHQUFHLFVBQVVFLFFBQVEsRUFBRUwsSUFBSSxFQUFFTSxPQUFPLEVBQUU7Y0FDMUQsSUFBSXJGLElBQUksR0FBRyxJQUFJO2NBQ2ZzRixVQUFVLENBQUMsWUFBWTtnQkFDckJGLFFBQVEsQ0FBQ3RCLGFBQWEsQ0FBQzlELElBQUksQ0FBQ3VGLFNBQVMsQ0FBQ1IsSUFBSSxFQUFFTSxPQUFPLENBQUMsQ0FBQyxDQUFDO2NBQ3hELENBQUMsQ0FBQztZQUNKLENBQUM7VUFDSDtRQUNGO01BQ0Y7TUFFQSxJQUFJekYsTUFBTSxDQUFDRCxPQUFPLEVBQUU7UUFDbEJDLE1BQU0sQ0FBQ0QsT0FBTyxHQUFHbUUsYUFBYTtNQUNoQyxDQUFDLE1BQU07UUFDTGYsTUFBTSxDQUFDZSxhQUFhLEdBQUdBLGFBQWE7TUFDdEM7SUFDRixDQUFDLEVBQUVmLE1BQU0sQ0FBQztFQUNaLENBQUMsRUFBRUQsWUFBWSxDQUFDO0VBRWhCLElBQUlvQyxNQUFNLEdBQUdwQyxZQUFZLENBQUNuRCxPQUFPO0VBRWpDLElBQUk4RixNQUFNLEdBQUcsU0FBU0EsTUFBTSxDQUFDaEQsS0FBSyxFQUFFO0lBQ2xDLElBQUksT0FBT1UsSUFBSSxLQUFLLFdBQVcsRUFBRTtNQUMvQixPQUFPLEtBQUs7SUFDZDtJQUVBLE9BQU9WLEtBQUssWUFBWVUsSUFBSSxJQUFJN0MsTUFBTSxDQUFDaUMsU0FBUyxDQUFDbUQsUUFBUSxDQUFDN0MsSUFBSSxDQUFDSixLQUFLLENBQUMsS0FBSyxlQUFlO0VBQzNGLENBQUM7RUFFRCxJQUFJa0QsUUFBUSxHQUFHO0lBQ2I7QUFDSjtBQUNBO0FBQ0E7QUFDQTtJQUNJQyxNQUFNLEVBQUUsSUFBSTtJQUVaO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7SUFDSUMsZ0JBQWdCLEVBQUUsSUFBSTtJQUV0QjtBQUNKO0FBQ0E7QUFDQTtJQUNJQyxRQUFRLEVBQUVDLFFBQVE7SUFFbEI7QUFDSjtBQUNBO0FBQ0E7SUFDSUMsU0FBUyxFQUFFRCxRQUFRO0lBRW5CO0FBQ0o7QUFDQTtBQUNBO0lBQ0lFLFFBQVEsRUFBRSxDQUFDO0lBRVg7QUFDSjtBQUNBO0FBQ0E7SUFDSUMsU0FBUyxFQUFFLENBQUM7SUFFWjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBQ0lDLEtBQUssRUFBRUMsU0FBUztJQUVoQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBQ0lDLE1BQU0sRUFBRUQsU0FBUztJQUVqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBQ0lFLE1BQU0sRUFBRSxNQUFNO0lBRWQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSWpCLE9BQU8sRUFBRSxHQUFHO0lBRVo7QUFDSjtBQUNBO0FBQ0E7QUFDQTtJQUNJa0IsUUFBUSxFQUFFLE1BQU07SUFFaEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtJQUNJQyxZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFFM0I7QUFDSjtBQUNBO0FBQ0E7QUFDQTtJQUNJQyxXQUFXLEVBQUUsT0FBTztJQUVwQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJQyxVQUFVLEVBQUUsSUFBSTtJQUVoQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJQyxJQUFJLEVBQUUsSUFBSTtJQUVWO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJQyxPQUFPLEVBQUUsSUFBSTtJQUViO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJQyxLQUFLLEVBQUU7RUFDVCxDQUFDO0VBRUQsSUFBSUMsVUFBVSxHQUFHLE9BQU8vRCxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU9BLE1BQU0sQ0FBQ2dFLFFBQVEsS0FBSyxXQUFXO0VBQ3hGLElBQUlDLE1BQU0sR0FBR0YsVUFBVSxHQUFHL0QsTUFBTSxHQUFHLENBQUMsQ0FBQzs7RUFFckM7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7RUFFRSxJQUFJa0UsZ0JBQWdCLEdBQUcsU0FBU0EsZ0JBQWdCLENBQUN4RSxLQUFLLEVBQUU7SUFDdEQsT0FBT0EsS0FBSyxHQUFHLENBQUMsSUFBSUEsS0FBSyxHQUFHc0QsUUFBUTtFQUN0QyxDQUFDO0VBQ0QsSUFBSW5CLEtBQUssR0FBR3NDLEtBQUssQ0FBQzNFLFNBQVMsQ0FBQ3FDLEtBQUs7RUFDakM7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7RUFFRSxTQUFTdUMsT0FBTyxDQUFDMUUsS0FBSyxFQUFFO0lBQ3RCLE9BQU95RSxLQUFLLENBQUNFLElBQUksR0FBR0YsS0FBSyxDQUFDRSxJQUFJLENBQUMzRSxLQUFLLENBQUMsR0FBR21DLEtBQUssQ0FBQy9CLElBQUksQ0FBQ0osS0FBSyxDQUFDO0VBQzNEO0VBQ0EsSUFBSTRFLGlCQUFpQixHQUFHLGFBQWE7RUFDckM7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7RUFFRSxTQUFTQyxXQUFXLENBQUM3RSxLQUFLLEVBQUU7SUFDMUIsT0FBTzRFLGlCQUFpQixDQUFDRSxJQUFJLENBQUM5RSxLQUFLLENBQUM7RUFDdEM7RUFDQTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztFQUVFLFNBQVMrRSxvQkFBb0IsQ0FBQy9FLEtBQUssRUFBRTtJQUNuQyxJQUFJZ0YsU0FBUyxHQUFHSCxXQUFXLENBQUM3RSxLQUFLLENBQUMsR0FBR0EsS0FBSyxDQUFDaUYsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7SUFFekQsSUFBSUQsU0FBUyxLQUFLLE1BQU0sRUFBRTtNQUN4QkEsU0FBUyxHQUFHLEtBQUs7SUFDbkI7SUFFQSxPQUFPLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDRixTQUFTLENBQUM7RUFDOUI7RUFDQSxJQUFJRyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0QsWUFBWTtFQUN0QztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFRSxTQUFTRSxxQkFBcUIsQ0FBQ0MsUUFBUSxFQUFFQyxLQUFLLEVBQUU3RyxNQUFNLEVBQUU7SUFDdEQsSUFBSThHLEdBQUcsR0FBRyxFQUFFO0lBQ1osSUFBSWhILENBQUM7SUFDTEUsTUFBTSxJQUFJNkcsS0FBSztJQUVmLEtBQUsvRyxDQUFDLEdBQUcrRyxLQUFLLEVBQUUvRyxDQUFDLEdBQUdFLE1BQU0sRUFBRUYsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUNsQ2dILEdBQUcsSUFBSUwsWUFBWSxDQUFDRyxRQUFRLENBQUNHLFFBQVEsQ0FBQ2pILENBQUMsQ0FBQyxDQUFDO0lBQzNDO0lBRUEsT0FBT2dILEdBQUc7RUFDWjtFQUNBLElBQUlFLElBQUksR0FBR25CLE1BQU0sQ0FBQ21CLElBQUk7RUFDdEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFLFNBQVNDLG9CQUFvQixDQUFDN0QsV0FBVyxFQUFFZ0MsUUFBUSxFQUFFO0lBQ25ELElBQUk4QixNQUFNLEdBQUcsRUFBRTtJQUNmLElBQUlDLFNBQVMsR0FBRyxJQUFJO0lBQ3BCLElBQUlDLEtBQUssR0FBRyxJQUFJaEYsVUFBVSxDQUFDZ0IsV0FBVyxDQUFDO0lBRXZDLE9BQU9nRSxLQUFLLENBQUNwSCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3ZCO01BQ0E7TUFDQWtILE1BQU0sQ0FBQ3hILElBQUksQ0FBQytHLFlBQVksQ0FBQzlHLEtBQUssQ0FBQyxJQUFJLEVBQUVxRyxPQUFPLENBQUNvQixLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUVGLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUM1RUMsS0FBSyxHQUFHQSxLQUFLLENBQUNDLFFBQVEsQ0FBQ0YsU0FBUyxDQUFDO0lBQ25DO0lBRUEsT0FBTyxPQUFPLENBQUNYLE1BQU0sQ0FBQ3BCLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQ29CLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDRSxNQUFNLENBQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQzNFO0VBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7RUFFRSxTQUFTQyxzQkFBc0IsQ0FBQ25FLFdBQVcsRUFBRTtJQUMzQyxJQUFJd0QsUUFBUSxHQUFHLElBQUlZLFFBQVEsQ0FBQ3BFLFdBQVcsQ0FBQztJQUN4QyxJQUFJcUUsV0FBVyxDQUFDLENBQUM7O0lBRWpCLElBQUk7TUFDRixJQUFJQyxZQUFZO01BQ2hCLElBQUlDLFNBQVM7TUFDYixJQUFJQyxRQUFRLENBQUMsQ0FBQzs7TUFFZCxJQUFJaEIsUUFBUSxDQUFDRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJSCxRQUFRLENBQUNHLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDbEUsSUFBSS9HLE1BQU0sR0FBRzRHLFFBQVEsQ0FBQ2lCLFVBQVU7UUFDaEMsSUFBSUMsTUFBTSxHQUFHLENBQUM7UUFFZCxPQUFPQSxNQUFNLEdBQUcsQ0FBQyxHQUFHOUgsTUFBTSxFQUFFO1VBQzFCLElBQUk0RyxRQUFRLENBQUNHLFFBQVEsQ0FBQ2UsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJbEIsUUFBUSxDQUFDRyxRQUFRLENBQUNlLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDaEZILFNBQVMsR0FBR0csTUFBTTtZQUNsQjtVQUNGO1VBRUFBLE1BQU0sSUFBSSxDQUFDO1FBQ2I7TUFDRjtNQUVBLElBQUlILFNBQVMsRUFBRTtRQUNiLElBQUlJLFVBQVUsR0FBR0osU0FBUyxHQUFHLENBQUM7UUFDOUIsSUFBSUssVUFBVSxHQUFHTCxTQUFTLEdBQUcsRUFBRTtRQUUvQixJQUFJaEIscUJBQXFCLENBQUNDLFFBQVEsRUFBRW1CLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUU7VUFDN0QsSUFBSUUsVUFBVSxHQUFHckIsUUFBUSxDQUFDc0IsU0FBUyxDQUFDRixVQUFVLENBQUM7VUFDL0NOLFlBQVksR0FBR08sVUFBVSxLQUFLLE1BQU07VUFFcEMsSUFBSVAsWUFBWSxJQUFJTyxVQUFVLEtBQUs7VUFDbkMsaUJBQ0U7WUFDQSxJQUFJckIsUUFBUSxDQUFDc0IsU0FBUyxDQUFDRixVQUFVLEdBQUcsQ0FBQyxFQUFFTixZQUFZLENBQUMsS0FBSyxNQUFNLEVBQUU7Y0FDL0QsSUFBSVMsY0FBYyxHQUFHdkIsUUFBUSxDQUFDd0IsU0FBUyxDQUFDSixVQUFVLEdBQUcsQ0FBQyxFQUFFTixZQUFZLENBQUM7Y0FFckUsSUFBSVMsY0FBYyxJQUFJLFVBQVUsRUFBRTtnQkFDaENQLFFBQVEsR0FBR0ksVUFBVSxHQUFHRyxjQUFjO2NBQ3hDO1lBQ0Y7VUFDRjtRQUNGO01BQ0Y7TUFFQSxJQUFJUCxRQUFRLEVBQUU7UUFDWixJQUFJUyxPQUFPLEdBQUd6QixRQUFRLENBQUNzQixTQUFTLENBQUNOLFFBQVEsRUFBRUYsWUFBWSxDQUFDO1FBRXhELElBQUlZLE9BQU87UUFFWCxJQUFJeEksQ0FBQztRQUVMLEtBQUtBLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3VJLE9BQU8sRUFBRXZJLENBQUMsSUFBSSxDQUFDLEVBQUU7VUFDL0J3SSxPQUFPLEdBQUdWLFFBQVEsR0FBRzlILENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztVQUUvQixJQUFJOEcsUUFBUSxDQUFDc0IsU0FBUyxDQUFDSSxPQUFPLEVBQUVaLFlBQVksQ0FBQyxLQUFLO1VBQ2xELG1CQUNFO1lBQ0E7WUFDQVksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDOztZQUVkYixXQUFXLEdBQUdiLFFBQVEsQ0FBQ3NCLFNBQVMsQ0FBQ0ksT0FBTyxFQUFFWixZQUFZLENBQUMsQ0FBQyxDQUFDOztZQUV6RGQsUUFBUSxDQUFDMkIsU0FBUyxDQUFDRCxPQUFPLEVBQUUsQ0FBQyxFQUFFWixZQUFZLENBQUM7WUFDNUM7VUFDRjtRQUNGO01BQ0Y7SUFDRixDQUFDLENBQUMsT0FBT3hGLENBQUMsRUFBRTtNQUNWdUYsV0FBVyxHQUFHLENBQUM7SUFDakI7SUFFQSxPQUFPQSxXQUFXO0VBQ3BCO0VBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7RUFFRSxTQUFTZSxnQkFBZ0IsQ0FBQ2YsV0FBVyxFQUFFO0lBQ3JDLElBQUlnQixNQUFNLEdBQUcsQ0FBQztJQUNkLElBQUlDLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSUMsTUFBTSxHQUFHLENBQUM7SUFFZCxRQUFRbEIsV0FBVztNQUNqQjtNQUNBLEtBQUssQ0FBQztRQUNKaUIsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYO01BQ0Y7O01BRUEsS0FBSyxDQUFDO1FBQ0pELE1BQU0sR0FBRyxDQUFDLEdBQUc7UUFDYjtNQUNGOztNQUVBLEtBQUssQ0FBQztRQUNKRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1g7TUFDRjs7TUFFQSxLQUFLLENBQUM7UUFDSkYsTUFBTSxHQUFHLEVBQUU7UUFDWEUsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYO01BQ0Y7O01BRUEsS0FBSyxDQUFDO1FBQ0pGLE1BQU0sR0FBRyxFQUFFO1FBQ1g7TUFDRjs7TUFFQSxLQUFLLENBQUM7UUFDSkEsTUFBTSxHQUFHLEVBQUU7UUFDWEMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYO01BQ0Y7O01BRUEsS0FBSyxDQUFDO1FBQ0pELE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDWjtJQUFNO0lBR1YsT0FBTztNQUNMQSxNQUFNLEVBQUVBLE1BQU07TUFDZEMsTUFBTSxFQUFFQSxNQUFNO01BQ2RDLE1BQU0sRUFBRUE7SUFDVixDQUFDO0VBQ0g7RUFDQSxJQUFJQyxlQUFlLEdBQUcsc0JBQXNCO0VBQzVDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztFQUVFLFNBQVNDLHNCQUFzQixDQUFDdkgsS0FBSyxFQUFFO0lBQ3JDLElBQUl3SCxLQUFLLEdBQUcvSSxTQUFTLENBQUNDLE1BQU0sR0FBRyxDQUFDLElBQUlELFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS2tGLFNBQVMsR0FBR2xGLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZO0lBQzVGLE9BQU82SSxlQUFlLENBQUN4QyxJQUFJLENBQUM5RSxLQUFLLENBQUMsR0FBR3lILElBQUksQ0FBQ0MsS0FBSyxDQUFDMUgsS0FBSyxHQUFHd0gsS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBR3hILEtBQUs7RUFDaEY7RUFDQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUUsU0FBUzJILGdCQUFnQixDQUFDQyxJQUFJLEVBQUU7SUFDOUIsSUFBSUMsV0FBVyxHQUFHRCxJQUFJLENBQUNDLFdBQVc7TUFDOUJqRSxNQUFNLEdBQUdnRSxJQUFJLENBQUNoRSxNQUFNO01BQ3BCRixLQUFLLEdBQUdrRSxJQUFJLENBQUNsRSxLQUFLO0lBQ3RCLElBQUlwQixJQUFJLEdBQUc3RCxTQUFTLENBQUNDLE1BQU0sR0FBRyxDQUFDLElBQUlELFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBS2tGLFNBQVMsR0FBR2xGLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNO0lBQ3JGLElBQUlxSixZQUFZLEdBQUd0RCxnQkFBZ0IsQ0FBQ2QsS0FBSyxDQUFDO0lBQzFDLElBQUlxRSxhQUFhLEdBQUd2RCxnQkFBZ0IsQ0FBQ1osTUFBTSxDQUFDO0lBRTVDLElBQUlrRSxZQUFZLElBQUlDLGFBQWEsRUFBRTtNQUNqQyxJQUFJQyxhQUFhLEdBQUdwRSxNQUFNLEdBQUdpRSxXQUFXO01BRXhDLElBQUksQ0FBQ3ZGLElBQUksS0FBSyxTQUFTLElBQUlBLElBQUksS0FBSyxNQUFNLEtBQUswRixhQUFhLEdBQUd0RSxLQUFLLElBQUlwQixJQUFJLEtBQUssT0FBTyxJQUFJMEYsYUFBYSxHQUFHdEUsS0FBSyxFQUFFO1FBQ2pIRSxNQUFNLEdBQUdGLEtBQUssR0FBR21FLFdBQVc7TUFDOUIsQ0FBQyxNQUFNO1FBQ0xuRSxLQUFLLEdBQUdFLE1BQU0sR0FBR2lFLFdBQVc7TUFDOUI7SUFDRixDQUFDLE1BQU0sSUFBSUMsWUFBWSxFQUFFO01BQ3ZCbEUsTUFBTSxHQUFHRixLQUFLLEdBQUdtRSxXQUFXO0lBQzlCLENBQUMsTUFBTSxJQUFJRSxhQUFhLEVBQUU7TUFDeEJyRSxLQUFLLEdBQUdFLE1BQU0sR0FBR2lFLFdBQVc7SUFDOUI7SUFFQSxPQUFPO01BQ0xuRSxLQUFLLEVBQUVBLEtBQUs7TUFDWkUsTUFBTSxFQUFFQTtJQUNWLENBQUM7RUFDSDtFQUVBLElBQUlxRSxhQUFhLEdBQUcxRCxNQUFNLENBQUNoRCxXQUFXO0lBQ2xDMkcsVUFBVSxHQUFHM0QsTUFBTSxDQUFDMkQsVUFBVTtFQUNsQyxJQUFJQyxHQUFHLEdBQUc1RCxNQUFNLENBQUM0RCxHQUFHLElBQUk1RCxNQUFNLENBQUM2RCxTQUFTO0VBQ3hDLElBQUlDLGdCQUFnQixHQUFHLFFBQVE7RUFDL0IsSUFBSUMsaUJBQWlCLEdBQUcvRCxNQUFNLENBQUMvRyxVQUFVO0VBQ3pDO0FBQ0Y7QUFDQTtBQUNBOztFQUVFLElBQUlBLFVBQVUsR0FBRyxhQUFhLFlBQVk7SUFDeEM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtJQUNJLFNBQVNBLFVBQVUsQ0FBQytLLElBQUksRUFBRUMsT0FBTyxFQUFFO01BQ2pDdEosZUFBZSxDQUFDLElBQUksRUFBRTFCLFVBQVUsQ0FBQztNQUVqQyxJQUFJLENBQUMrSyxJQUFJLEdBQUdBLElBQUk7TUFDaEIsSUFBSSxDQUFDRSxLQUFLLEdBQUcsSUFBSUMsS0FBSyxFQUFFO01BQ3hCLElBQUksQ0FBQ0YsT0FBTyxHQUFHbEssY0FBYyxDQUFDQSxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU0RSxRQUFRLENBQUMsRUFBRXNGLE9BQU8sQ0FBQztNQUNwRSxJQUFJLENBQUNHLE9BQU8sR0FBRyxLQUFLO01BQ3BCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7TUFDbEIsSUFBSSxDQUFDQyxJQUFJLEVBQUU7SUFDYjtJQUVBbEosWUFBWSxDQUFDbkMsVUFBVSxFQUFFLENBQUM7TUFDeEJxQixHQUFHLEVBQUUsTUFBTTtNQUNYbUIsS0FBSyxFQUFFLFNBQVM2SSxJQUFJLEdBQUc7UUFDckIsSUFBSUMsS0FBSyxHQUFHLElBQUk7UUFFaEIsSUFBSVAsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSTtVQUNoQkMsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztRQUUxQixJQUFJLENBQUN4RixNQUFNLENBQUN1RixJQUFJLENBQUMsRUFBRTtVQUNqQixJQUFJLENBQUNRLElBQUksQ0FBQyxJQUFJN0csS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7VUFDekU7UUFDRjtRQUVBLElBQUk0QixRQUFRLEdBQUd5RSxJQUFJLENBQUNqRyxJQUFJO1FBRXhCLElBQUksQ0FBQ3VDLFdBQVcsQ0FBQ2YsUUFBUSxDQUFDLEVBQUU7VUFDMUIsSUFBSSxDQUFDaUYsSUFBSSxDQUFDLElBQUk3RyxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztVQUNoRjtRQUNGO1FBRUEsSUFBSSxDQUFDaUcsR0FBRyxJQUFJLENBQUNELFVBQVUsRUFBRTtVQUN2QixJQUFJLENBQUNhLElBQUksQ0FBQyxJQUFJN0csS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7VUFDL0U7UUFDRjtRQUVBLElBQUksQ0FBQytGLGFBQWEsRUFBRTtVQUNsQk8sT0FBTyxDQUFDcEYsZ0JBQWdCLEdBQUcsS0FBSztRQUNsQztRQUVBLElBQUkrRSxHQUFHLElBQUksQ0FBQ0ssT0FBTyxDQUFDcEYsZ0JBQWdCLEVBQUU7VUFDcEMsSUFBSSxDQUFDNEYsSUFBSSxDQUFDO1lBQ1JDLEdBQUcsRUFBRWQsR0FBRyxDQUFDZSxlQUFlLENBQUNYLElBQUk7VUFDL0IsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxNQUFNO1VBQ0wsSUFBSVksTUFBTSxHQUFHLElBQUlqQixVQUFVLEVBQUU7VUFDN0IsSUFBSTlFLGdCQUFnQixHQUFHb0YsT0FBTyxDQUFDcEYsZ0JBQWdCLElBQUlVLFFBQVEsS0FBSyxZQUFZO1VBQzVFLElBQUksQ0FBQ3FGLE1BQU0sR0FBR0EsTUFBTTtVQUVwQkEsTUFBTSxDQUFDQyxNQUFNLEdBQUcsVUFBVXhCLElBQUksRUFBRTtZQUM5QixJQUFJckosTUFBTSxHQUFHcUosSUFBSSxDQUFDckosTUFBTTtZQUN4QixJQUFJcUssTUFBTSxHQUFHckssTUFBTSxDQUFDcUssTUFBTTtZQUMxQixJQUFJUyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBRWIsSUFBSWpHLGdCQUFnQixFQUFFO2NBQ3BCO2NBQ0E7Y0FDQSxJQUFJK0MsV0FBVyxHQUFHRixzQkFBc0IsQ0FBQzJDLE1BQU0sQ0FBQztjQUVoRCxJQUFJekMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDZ0MsR0FBRyxFQUFFO2dCQUMzQjtnQkFDQWtCLElBQUksQ0FBQ0osR0FBRyxHQUFHdEQsb0JBQW9CLENBQUNpRCxNQUFNLEVBQUU5RSxRQUFRLENBQUM7Z0JBRWpELElBQUlxQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO2tCQUNuQmxHLFFBQVEsQ0FBQ29KLElBQUksRUFBRW5DLGdCQUFnQixDQUFDZixXQUFXLENBQUMsQ0FBQztnQkFDL0M7Y0FDRixDQUFDLE1BQU07Z0JBQ0xrRCxJQUFJLENBQUNKLEdBQUcsR0FBR2QsR0FBRyxDQUFDZSxlQUFlLENBQUNYLElBQUksQ0FBQztjQUN0QztZQUNGLENBQUMsTUFBTTtjQUNMYyxJQUFJLENBQUNKLEdBQUcsR0FBR0wsTUFBTTtZQUNuQjtZQUVBRSxLQUFLLENBQUNFLElBQUksQ0FBQ0ssSUFBSSxDQUFDO1VBQ2xCLENBQUM7VUFFREYsTUFBTSxDQUFDRyxPQUFPLEdBQUcsWUFBWTtZQUMzQlIsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSTdHLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1VBQ3JFLENBQUM7VUFFRGlILE1BQU0sQ0FBQ0ksT0FBTyxHQUFHLFlBQVk7WUFDM0JULEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUk3RyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztVQUNwRSxDQUFDO1VBRURpSCxNQUFNLENBQUNLLFNBQVMsR0FBRyxZQUFZO1lBQzdCVixLQUFLLENBQUNLLE1BQU0sR0FBRyxJQUFJO1VBQ3JCLENBQUM7VUFFRCxJQUFJL0YsZ0JBQWdCLEVBQUU7WUFDcEIrRixNQUFNLENBQUNNLGlCQUFpQixDQUFDbEIsSUFBSSxDQUFDO1VBQ2hDLENBQUMsTUFBTTtZQUNMWSxNQUFNLENBQUNPLGFBQWEsQ0FBQ25CLElBQUksQ0FBQztVQUM1QjtRQUNGO01BQ0Y7SUFDRixDQUFDLEVBQUU7TUFDRDFKLEdBQUcsRUFBRSxNQUFNO01BQ1htQixLQUFLLEVBQUUsU0FBU2dKLElBQUksQ0FBQ0ssSUFBSSxFQUFFO1FBQ3pCLElBQUlNLE1BQU0sR0FBRyxJQUFJO1FBRWpCLElBQUlwQixJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJO1VBQ2hCRSxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLO1FBRXRCQSxLQUFLLENBQUNXLE1BQU0sR0FBRyxZQUFZO1VBQ3pCTyxNQUFNLENBQUNDLElBQUksQ0FBQ3RMLGNBQWMsQ0FBQ0EsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFK0ssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDdkRRLFlBQVksRUFBRXBCLEtBQUssQ0FBQ29CLFlBQVk7WUFDaENDLGFBQWEsRUFBRXJCLEtBQUssQ0FBQ3FCO1VBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVEckIsS0FBSyxDQUFDYSxPQUFPLEdBQUcsWUFBWTtVQUMxQkssTUFBTSxDQUFDWixJQUFJLENBQUMsSUFBSTdHLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFRHVHLEtBQUssQ0FBQ2MsT0FBTyxHQUFHLFlBQVk7VUFDMUJJLE1BQU0sQ0FBQ1osSUFBSSxDQUFDLElBQUk3RyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztRQUNIOztRQUdBLElBQUlxQyxNQUFNLENBQUN3RixTQUFTLElBQUkscUNBQXFDLENBQUNqRixJQUFJLENBQUNQLE1BQU0sQ0FBQ3dGLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLEVBQUU7VUFDOUY7VUFDQXZCLEtBQUssQ0FBQ3dCLFdBQVcsR0FBRyxXQUFXO1FBQ2pDO1FBRUF4QixLQUFLLENBQUN5QixHQUFHLEdBQUczQixJQUFJLENBQUM0QixJQUFJO1FBQ3JCMUIsS0FBSyxDQUFDMkIsR0FBRyxHQUFHZixJQUFJLENBQUNKLEdBQUc7TUFDdEI7SUFDRixDQUFDLEVBQUU7TUFDRHBLLEdBQUcsRUFBRSxNQUFNO01BQ1htQixLQUFLLEVBQUUsU0FBUzRKLElBQUksQ0FBQ1MsS0FBSyxFQUFFO1FBQzFCLElBQUlDLE1BQU0sR0FBRyxJQUFJO1FBRWpCLElBQUlULFlBQVksR0FBR1EsS0FBSyxDQUFDUixZQUFZO1VBQ2pDQyxhQUFhLEdBQUdPLEtBQUssQ0FBQ1AsYUFBYTtVQUNuQ1MsWUFBWSxHQUFHRixLQUFLLENBQUNsRCxNQUFNO1VBQzNCQSxNQUFNLEdBQUdvRCxZQUFZLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHQSxZQUFZO1VBQ25EQyxZQUFZLEdBQUdILEtBQUssQ0FBQ2pELE1BQU07VUFDM0JBLE1BQU0sR0FBR29ELFlBQVksS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUdBLFlBQVk7VUFDbkRDLFlBQVksR0FBR0osS0FBSyxDQUFDaEQsTUFBTTtVQUMzQkEsTUFBTSxHQUFHb0QsWUFBWSxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBR0EsWUFBWTtRQUN2RCxJQUFJbEMsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSTtVQUNoQkUsS0FBSyxHQUFHLElBQUksQ0FBQ0EsS0FBSztVQUNsQkQsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztRQUMxQixJQUFJa0MsTUFBTSxHQUFHcEcsUUFBUSxDQUFDcUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUM3QyxJQUFJQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztRQUNyQyxJQUFJQyxrQkFBa0IsR0FBR3JELElBQUksQ0FBQ3NELEdBQUcsQ0FBQzVELE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFO1FBQ3RELElBQUk2RCxTQUFTLEdBQUcsQ0FBQ3hDLE9BQU8sQ0FBQzNFLE1BQU0sS0FBSyxTQUFTLElBQUkyRSxPQUFPLENBQUMzRSxNQUFNLEtBQUssT0FBTyxLQUFLVyxnQkFBZ0IsQ0FBQ2dFLE9BQU8sQ0FBQzlFLEtBQUssQ0FBQyxJQUFJYyxnQkFBZ0IsQ0FBQ2dFLE9BQU8sQ0FBQzVFLE1BQU0sQ0FBQztRQUNuSixJQUFJUCxRQUFRLEdBQUdvRSxJQUFJLENBQUN3RCxHQUFHLENBQUN6QyxPQUFPLENBQUNuRixRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUlDLFFBQVE7UUFDeEQsSUFBSUMsU0FBUyxHQUFHa0UsSUFBSSxDQUFDd0QsR0FBRyxDQUFDekMsT0FBTyxDQUFDakYsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJRCxRQUFRO1FBQzFELElBQUlFLFFBQVEsR0FBR2lFLElBQUksQ0FBQ3dELEdBQUcsQ0FBQ3pDLE9BQU8sQ0FBQ2hGLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pELElBQUlDLFNBQVMsR0FBR2dFLElBQUksQ0FBQ3dELEdBQUcsQ0FBQ3pDLE9BQU8sQ0FBQy9FLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25ELElBQUlvRSxXQUFXLEdBQUdnQyxZQUFZLEdBQUdDLGFBQWE7UUFDOUMsSUFBSXBHLEtBQUssR0FBRzhFLE9BQU8sQ0FBQzlFLEtBQUs7VUFDckJFLE1BQU0sR0FBRzRFLE9BQU8sQ0FBQzVFLE1BQU07UUFFM0IsSUFBSWtILGtCQUFrQixFQUFFO1VBQ3RCLElBQUlJLEtBQUssR0FBRyxDQUFDM0gsU0FBUyxFQUFFRixRQUFRLENBQUM7VUFDakNBLFFBQVEsR0FBRzZILEtBQUssQ0FBQyxDQUFDLENBQUM7VUFDbkIzSCxTQUFTLEdBQUcySCxLQUFLLENBQUMsQ0FBQyxDQUFDO1VBQ3BCLElBQUlDLEtBQUssR0FBRyxDQUFDMUgsU0FBUyxFQUFFRCxRQUFRLENBQUM7VUFDakNBLFFBQVEsR0FBRzJILEtBQUssQ0FBQyxDQUFDLENBQUM7VUFDbkIxSCxTQUFTLEdBQUcwSCxLQUFLLENBQUMsQ0FBQyxDQUFDO1VBQ3BCLElBQUlDLEtBQUssR0FBRyxDQUFDeEgsTUFBTSxFQUFFRixLQUFLLENBQUM7VUFDM0JBLEtBQUssR0FBRzBILEtBQUssQ0FBQyxDQUFDLENBQUM7VUFDaEJ4SCxNQUFNLEdBQUd3SCxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25CO1FBRUEsSUFBSUosU0FBUyxFQUFFO1VBQ2JuRCxXQUFXLEdBQUduRSxLQUFLLEdBQUdFLE1BQU07UUFDOUI7UUFFQSxJQUFJeUgsaUJBQWlCLEdBQUcxRCxnQkFBZ0IsQ0FBQztVQUN2Q0UsV0FBVyxFQUFFQSxXQUFXO1VBQ3hCbkUsS0FBSyxFQUFFTCxRQUFRO1VBQ2ZPLE1BQU0sRUFBRUw7UUFDVixDQUFDLEVBQUUsU0FBUyxDQUFDO1FBRWJGLFFBQVEsR0FBR2dJLGlCQUFpQixDQUFDM0gsS0FBSztRQUNsQ0gsU0FBUyxHQUFHOEgsaUJBQWlCLENBQUN6SCxNQUFNO1FBRXBDLElBQUkwSCxrQkFBa0IsR0FBRzNELGdCQUFnQixDQUFDO1VBQ3hDRSxXQUFXLEVBQUVBLFdBQVc7VUFDeEJuRSxLQUFLLEVBQUVGLFFBQVE7VUFDZkksTUFBTSxFQUFFSDtRQUNWLENBQUMsRUFBRSxPQUFPLENBQUM7UUFFWEQsUUFBUSxHQUFHOEgsa0JBQWtCLENBQUM1SCxLQUFLO1FBQ25DRCxTQUFTLEdBQUc2SCxrQkFBa0IsQ0FBQzFILE1BQU07UUFFckMsSUFBSW9ILFNBQVMsRUFBRTtVQUNiLElBQUlPLGtCQUFrQixHQUFHNUQsZ0JBQWdCLENBQUM7WUFDeENFLFdBQVcsRUFBRUEsV0FBVztZQUN4Qm5FLEtBQUssRUFBRUEsS0FBSztZQUNaRSxNQUFNLEVBQUVBO1VBQ1YsQ0FBQyxFQUFFNEUsT0FBTyxDQUFDM0UsTUFBTSxDQUFDO1VBRWxCSCxLQUFLLEdBQUc2SCxrQkFBa0IsQ0FBQzdILEtBQUs7VUFDaENFLE1BQU0sR0FBRzJILGtCQUFrQixDQUFDM0gsTUFBTTtRQUNwQyxDQUFDLE1BQU07VUFDTCxJQUFJNEgsa0JBQWtCLEdBQUc3RCxnQkFBZ0IsQ0FBQztZQUN4Q0UsV0FBVyxFQUFFQSxXQUFXO1lBQ3hCbkUsS0FBSyxFQUFFQSxLQUFLO1lBQ1pFLE1BQU0sRUFBRUE7VUFDVixDQUFDLENBQUM7VUFFRixJQUFJNkgscUJBQXFCLEdBQUdELGtCQUFrQixDQUFDOUgsS0FBSztVQUNwREEsS0FBSyxHQUFHK0gscUJBQXFCLEtBQUssS0FBSyxDQUFDLEdBQUc1QixZQUFZLEdBQUc0QixxQkFBcUI7VUFDL0UsSUFBSUMscUJBQXFCLEdBQUdGLGtCQUFrQixDQUFDNUgsTUFBTTtVQUNyREEsTUFBTSxHQUFHOEgscUJBQXFCLEtBQUssS0FBSyxDQUFDLEdBQUc1QixhQUFhLEdBQUc0QixxQkFBcUI7UUFDbkY7UUFFQWhJLEtBQUssR0FBRytELElBQUksQ0FBQ2tFLEtBQUssQ0FBQ3BFLHNCQUFzQixDQUFDRSxJQUFJLENBQUNtRSxHQUFHLENBQUNuRSxJQUFJLENBQUN3RCxHQUFHLENBQUN2SCxLQUFLLEVBQUVGLFFBQVEsQ0FBQyxFQUFFSCxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pGTyxNQUFNLEdBQUc2RCxJQUFJLENBQUNrRSxLQUFLLENBQUNwRSxzQkFBc0IsQ0FBQ0UsSUFBSSxDQUFDbUUsR0FBRyxDQUFDbkUsSUFBSSxDQUFDd0QsR0FBRyxDQUFDckgsTUFBTSxFQUFFSCxTQUFTLENBQUMsRUFBRUYsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJc0ksS0FBSyxHQUFHLENBQUNuSSxLQUFLLEdBQUcsQ0FBQztRQUN0QixJQUFJb0ksS0FBSyxHQUFHLENBQUNsSSxNQUFNLEdBQUcsQ0FBQztRQUN2QixJQUFJbUksU0FBUyxHQUFHckksS0FBSztRQUNyQixJQUFJc0ksVUFBVSxHQUFHcEksTUFBTTtRQUN2QixJQUFJcUksTUFBTSxHQUFHLEVBQUU7UUFFZixJQUFJakIsU0FBUyxFQUFFO1VBQ2IsSUFBSWtCLElBQUksR0FBRyxDQUFDO1VBQ1osSUFBSUMsSUFBSSxHQUFHLENBQUM7VUFDWixJQUFJQyxRQUFRLEdBQUd2QyxZQUFZO1VBQzNCLElBQUl3QyxTQUFTLEdBQUd2QyxhQUFhO1VBRTdCLElBQUl3QyxrQkFBa0IsR0FBRzNFLGdCQUFnQixDQUFDO1lBQ3hDRSxXQUFXLEVBQUVBLFdBQVc7WUFDeEJuRSxLQUFLLEVBQUVtRyxZQUFZO1lBQ25CakcsTUFBTSxFQUFFa0c7VUFDVixDQUFDLEVBQUU7WUFDRHlDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCQyxLQUFLLEVBQUU7VUFDVCxDQUFDLENBQUNoRSxPQUFPLENBQUMzRSxNQUFNLENBQUMsQ0FBQztVQUVsQnVJLFFBQVEsR0FBR0Usa0JBQWtCLENBQUM1SSxLQUFLO1VBQ25DMkksU0FBUyxHQUFHQyxrQkFBa0IsQ0FBQzFJLE1BQU07VUFDckNzSSxJQUFJLEdBQUcsQ0FBQ3JDLFlBQVksR0FBR3VDLFFBQVEsSUFBSSxDQUFDO1VBQ3BDRCxJQUFJLEdBQUcsQ0FBQ3JDLGFBQWEsR0FBR3VDLFNBQVMsSUFBSSxDQUFDO1VBQ3RDSixNQUFNLENBQUM3TixJQUFJLENBQUM4TixJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLENBQUM7UUFDOUM7UUFFQUosTUFBTSxDQUFDN04sSUFBSSxDQUFDeU4sS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxDQUFDO1FBRWhELElBQUlsQixrQkFBa0IsRUFBRTtVQUN0QixJQUFJMkIsS0FBSyxHQUFHLENBQUM3SSxNQUFNLEVBQUVGLEtBQUssQ0FBQztVQUMzQkEsS0FBSyxHQUFHK0ksS0FBSyxDQUFDLENBQUMsQ0FBQztVQUNoQjdJLE1BQU0sR0FBRzZJLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkI7UUFFQS9CLE1BQU0sQ0FBQ2hILEtBQUssR0FBR0EsS0FBSztRQUNwQmdILE1BQU0sQ0FBQzlHLE1BQU0sR0FBR0EsTUFBTTtRQUV0QixJQUFJLENBQUNpQixXQUFXLENBQUMyRCxPQUFPLENBQUMxRSxRQUFRLENBQUMsRUFBRTtVQUNsQzBFLE9BQU8sQ0FBQzFFLFFBQVEsR0FBR3lFLElBQUksQ0FBQ2pHLElBQUk7UUFDOUI7UUFFQSxJQUFJb0ssU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDOztRQUUvQixJQUFJbkUsSUFBSSxDQUFDeEgsSUFBSSxHQUFHeUgsT0FBTyxDQUFDeEUsV0FBVyxJQUFJd0UsT0FBTyxDQUFDekUsWUFBWSxDQUFDNEksT0FBTyxDQUFDbkUsT0FBTyxDQUFDMUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1VBQzFGMEUsT0FBTyxDQUFDMUUsUUFBUSxHQUFHLFlBQVk7UUFDakM7UUFFQSxJQUFJMEUsT0FBTyxDQUFDMUUsUUFBUSxLQUFLLFlBQVksRUFBRTtVQUNyQzRJLFNBQVMsR0FBRyxNQUFNO1FBQ3BCLENBQUMsQ0FBQzs7UUFHRjlCLE9BQU8sQ0FBQzhCLFNBQVMsR0FBR0EsU0FBUztRQUM3QjlCLE9BQU8sQ0FBQ2dDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFbEosS0FBSyxFQUFFRSxNQUFNLENBQUM7UUFFckMsSUFBSTRFLE9BQU8sQ0FBQ3ZFLFVBQVUsRUFBRTtVQUN0QnVFLE9BQU8sQ0FBQ3ZFLFVBQVUsQ0FBQzdELElBQUksQ0FBQyxJQUFJLEVBQUV3SyxPQUFPLEVBQUVGLE1BQU0sQ0FBQztRQUNoRDtRQUVBLElBQUksSUFBSSxDQUFDL0IsT0FBTyxFQUFFO1VBQ2hCO1FBQ0Y7UUFFQWlDLE9BQU8sQ0FBQ2lDLElBQUksRUFBRTtRQUNkakMsT0FBTyxDQUFDa0MsU0FBUyxDQUFDcEosS0FBSyxHQUFHLENBQUMsRUFBRUUsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN4Q2dILE9BQU8sQ0FBQ3pELE1BQU0sQ0FBQ0EsTUFBTSxHQUFHTSxJQUFJLENBQUNzRixFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ3RDbkMsT0FBTyxDQUFDb0MsS0FBSyxDQUFDNUYsTUFBTSxFQUFFQyxNQUFNLENBQUM7UUFDN0J1RCxPQUFPLENBQUNxQyxTQUFTLENBQUM1TyxLQUFLLENBQUN1TSxPQUFPLEVBQUUsQ0FBQ25DLEtBQUssQ0FBQyxDQUFDdkQsTUFBTSxDQUFDK0csTUFBTSxDQUFDLENBQUM7UUFDeERyQixPQUFPLENBQUNzQyxPQUFPLEVBQUU7UUFFakIsSUFBSTFFLE9BQU8sQ0FBQ3RFLElBQUksRUFBRTtVQUNoQnNFLE9BQU8sQ0FBQ3RFLElBQUksQ0FBQzlELElBQUksQ0FBQyxJQUFJLEVBQUV3SyxPQUFPLEVBQUVGLE1BQU0sQ0FBQztRQUMxQztRQUVBLElBQUksSUFBSSxDQUFDL0IsT0FBTyxFQUFFO1VBQ2hCO1FBQ0Y7UUFFQSxJQUFJd0UsSUFBSSxHQUFHLFNBQVNBLElBQUksQ0FBQ3ZFLE1BQU0sRUFBRTtVQUMvQixJQUFJLENBQUMwQixNQUFNLENBQUMzQixPQUFPLEVBQUU7WUFDbkIyQixNQUFNLENBQUM2QyxJQUFJLENBQUM7Y0FDVnRELFlBQVksRUFBRUEsWUFBWTtjQUMxQkMsYUFBYSxFQUFFQSxhQUFhO2NBQzVCbEIsTUFBTSxFQUFFQTtZQUNWLENBQUMsQ0FBQztVQUNKO1FBQ0YsQ0FBQztRQUVELElBQUk4QixNQUFNLENBQUNqSSxNQUFNLEVBQUU7VUFDakJpSSxNQUFNLENBQUNqSSxNQUFNLENBQUMwSyxJQUFJLEVBQUUzRSxPQUFPLENBQUMxRSxRQUFRLEVBQUUwRSxPQUFPLENBQUM1RixPQUFPLENBQUM7UUFDeEQsQ0FBQyxNQUFNO1VBQ0x1SyxJQUFJLENBQUMxSyxNQUFNLENBQUNpSSxNQUFNLENBQUM1SCxTQUFTLENBQUMwRixPQUFPLENBQUMxRSxRQUFRLEVBQUUwRSxPQUFPLENBQUM1RixPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25FO01BQ0Y7SUFDRixDQUFDLEVBQUU7TUFDRC9ELEdBQUcsRUFBRSxNQUFNO01BQ1htQixLQUFLLEVBQUUsU0FBU21OLElBQUksQ0FBQ0MsS0FBSyxFQUFFO1FBQzFCLElBQUl2RCxZQUFZLEdBQUd1RCxLQUFLLENBQUN2RCxZQUFZO1VBQ2pDQyxhQUFhLEdBQUdzRCxLQUFLLENBQUN0RCxhQUFhO1VBQ25DbEIsTUFBTSxHQUFHd0UsS0FBSyxDQUFDeEUsTUFBTTtRQUN6QixJQUFJTCxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJO1VBQ2hCRSxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLO1VBQ2xCRCxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPO1FBRTFCLElBQUlMLEdBQUcsSUFBSSxDQUFDSyxPQUFPLENBQUNwRixnQkFBZ0IsRUFBRTtVQUNwQytFLEdBQUcsQ0FBQ2tGLGVBQWUsQ0FBQzVFLEtBQUssQ0FBQzJCLEdBQUcsQ0FBQztRQUNoQztRQUVBLElBQUl4QixNQUFNLEVBQUU7VUFDVjtVQUNBLElBQUlKLE9BQU8sQ0FBQ3JGLE1BQU0sSUFBSXlGLE1BQU0sQ0FBQzdILElBQUksR0FBR3dILElBQUksQ0FBQ3hILElBQUksSUFBSXlILE9BQU8sQ0FBQzFFLFFBQVEsS0FBS3lFLElBQUksQ0FBQ2pHLElBQUksSUFBSSxFQUFFa0csT0FBTyxDQUFDOUUsS0FBSyxHQUFHbUcsWUFBWSxJQUFJckIsT0FBTyxDQUFDNUUsTUFBTSxHQUFHa0csYUFBYSxJQUFJdEIsT0FBTyxDQUFDaEYsUUFBUSxHQUFHcUcsWUFBWSxJQUFJckIsT0FBTyxDQUFDL0UsU0FBUyxHQUFHcUcsYUFBYSxJQUFJdEIsT0FBTyxDQUFDbkYsUUFBUSxHQUFHd0csWUFBWSxJQUFJckIsT0FBTyxDQUFDakYsU0FBUyxHQUFHdUcsYUFBYSxDQUFDLEVBQUU7WUFDcFNsQixNQUFNLEdBQUdMLElBQUk7VUFDZixDQUFDLE1BQU07WUFDTCxJQUFJK0UsSUFBSSxHQUFHLElBQUlDLElBQUksRUFBRTtZQUNyQjNFLE1BQU0sQ0FBQzRFLFlBQVksR0FBR0YsSUFBSSxDQUFDRyxPQUFPLEVBQUU7WUFDcEM3RSxNQUFNLENBQUM4RSxnQkFBZ0IsR0FBR0osSUFBSTtZQUM5QjFFLE1BQU0sQ0FBQ3VCLElBQUksR0FBRzVCLElBQUksQ0FBQzRCLElBQUksQ0FBQyxDQUFDOztZQUV6QixJQUFJdkIsTUFBTSxDQUFDdUIsSUFBSSxJQUFJdkIsTUFBTSxDQUFDdEcsSUFBSSxLQUFLaUcsSUFBSSxDQUFDakcsSUFBSSxFQUFFO2NBQzVDc0csTUFBTSxDQUFDdUIsSUFBSSxHQUFHdkIsTUFBTSxDQUFDdUIsSUFBSSxDQUFDd0QsT0FBTyxDQUFDdEYsZ0JBQWdCLEVBQUV0RCxvQkFBb0IsQ0FBQzZELE1BQU0sQ0FBQ3RHLElBQUksQ0FBQyxDQUFDO1lBQ3hGO1VBQ0Y7UUFDRixDQUFDLE1BQU07VUFDTDtVQUNBc0csTUFBTSxHQUFHTCxJQUFJO1FBQ2Y7UUFFQSxJQUFJLENBQUNLLE1BQU0sR0FBR0EsTUFBTTtRQUVwQixJQUFJSixPQUFPLENBQUNyRSxPQUFPLEVBQUU7VUFDbkJxRSxPQUFPLENBQUNyRSxPQUFPLENBQUMvRCxJQUFJLENBQUMsSUFBSSxFQUFFd0ksTUFBTSxDQUFDO1FBQ3BDO01BQ0Y7SUFDRixDQUFDLEVBQUU7TUFDRC9KLEdBQUcsRUFBRSxNQUFNO01BQ1htQixLQUFLLEVBQUUsU0FBUytJLElBQUksQ0FBQzZFLEdBQUcsRUFBRTtRQUN4QixJQUFJcEYsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztRQUUxQixJQUFJQSxPQUFPLENBQUNwRSxLQUFLLEVBQUU7VUFDakJvRSxPQUFPLENBQUNwRSxLQUFLLENBQUNoRSxJQUFJLENBQUMsSUFBSSxFQUFFd04sR0FBRyxDQUFDO1FBQy9CLENBQUMsTUFBTTtVQUNMLE1BQU1BLEdBQUc7UUFDWDtNQUNGO0lBQ0YsQ0FBQyxFQUFFO01BQ0QvTyxHQUFHLEVBQUUsT0FBTztNQUNabUIsS0FBSyxFQUFFLFNBQVM2TixLQUFLLEdBQUc7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQ2xGLE9BQU8sRUFBRTtVQUNqQixJQUFJLENBQUNBLE9BQU8sR0FBRyxJQUFJO1VBRW5CLElBQUksSUFBSSxDQUFDUSxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUNBLE1BQU0sQ0FBQzBFLEtBQUssRUFBRTtVQUNyQixDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQ3BGLEtBQUssQ0FBQ3FGLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUNyRixLQUFLLENBQUNXLE1BQU0sR0FBRyxJQUFJO1lBQ3hCLElBQUksQ0FBQ1gsS0FBSyxDQUFDYSxPQUFPLEVBQUU7VUFDdEIsQ0FBQyxNQUFNO1lBQ0wsSUFBSSxDQUFDUCxJQUFJLENBQUMsSUFBSTdHLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1VBQ25FO1FBQ0Y7TUFDRjtNQUNBO0FBQ047QUFDQTtBQUNBO0lBRUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztNQUNIckQsR0FBRyxFQUFFLFlBQVk7TUFDakJtQixLQUFLLEVBQUUsU0FBUytOLFVBQVUsR0FBRztRQUMzQnpOLE1BQU0sQ0FBQzlDLFVBQVUsR0FBRzhLLGlCQUFpQjtRQUNyQyxPQUFPOUssVUFBVTtNQUNuQjtNQUNBO0FBQ047QUFDQTtBQUNBO0lBRUksQ0FBQyxFQUFFO01BQ0RxQixHQUFHLEVBQUUsYUFBYTtNQUNsQm1CLEtBQUssRUFBRSxTQUFTZ08sV0FBVyxDQUFDeEYsT0FBTyxFQUFFO1FBQ25DdkksUUFBUSxDQUFDaUQsUUFBUSxFQUFFc0YsT0FBTyxDQUFDO01BQzdCO0lBQ0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPaEwsVUFBVTtFQUNuQixDQUFDLEVBQUU7RUFFSCxPQUFPQSxVQUFVO0FBRW5CLENBQUMsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdGpDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUl5USxRQUFRLEdBQUcsWUFBVztFQUN0QkEsUUFBUSxHQUFHcFEsTUFBTSxDQUFDcUMsTUFBTSxJQUFJLFNBQVMrTixRQUFRLENBQUNDLENBQUMsRUFBRTtJQUM3QyxLQUFLLElBQUlDLENBQUMsRUFBRTNQLENBQUMsR0FBRyxDQUFDLEVBQUU0UCxDQUFDLEdBQUczUCxTQUFTLENBQUNDLE1BQU0sRUFBRUYsQ0FBQyxHQUFHNFAsQ0FBQyxFQUFFNVAsQ0FBQyxFQUFFLEVBQUU7TUFDakQyUCxDQUFDLEdBQUcxUCxTQUFTLENBQUNELENBQUMsQ0FBQztNQUNoQixLQUFLLElBQUk2UCxDQUFDLElBQUlGLENBQUMsRUFBRSxJQUFJdFEsTUFBTSxDQUFDaUMsU0FBUyxDQUFDSyxjQUFjLENBQUNDLElBQUksQ0FBQytOLENBQUMsRUFBRUUsQ0FBQyxDQUFDLEVBQUVILENBQUMsQ0FBQ0csQ0FBQyxDQUFDLEdBQUdGLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDO0lBQ2hGO0lBQ0EsT0FBT0gsQ0FBQztFQUNaLENBQUM7RUFDRCxPQUFPRCxRQUFRLENBQUM1UCxLQUFLLENBQUMsSUFBSSxFQUFFSSxTQUFTLENBQUM7QUFDMUMsQ0FBQztBQUVELElBQUk2UCxpQkFBaUIsR0FBRyxhQUFlLFlBQVk7RUFDL0MsU0FBU0EsaUJBQWlCLENBQUM5RixPQUFPLEVBQUU7SUFDaEMsSUFBSSxDQUFDQSxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDK0YsU0FBUyxHQUFHLENBQUMsQ0FBQztFQUN2QjtFQUNBRCxpQkFBaUIsQ0FBQ3hPLFNBQVMsQ0FBQzBPLEVBQUUsR0FBRyxVQUFVQyxTQUFTLEVBQUVDLEVBQUUsRUFBRTtJQUN0RCxJQUFJQyxTQUFTLEdBQUcsSUFBSSxDQUFDSixTQUFTLENBQUNFLFNBQVMsQ0FBQyxJQUFJLEVBQUU7SUFDL0MsSUFBSSxDQUFDRixTQUFTLENBQUNFLFNBQVMsQ0FBQyxHQUFHRSxTQUFTLENBQUN6SixNQUFNLENBQUMsQ0FBQ3dKLEVBQUUsQ0FBQyxDQUFDO0VBQ3RELENBQUM7RUFDREosaUJBQWlCLENBQUN4TyxTQUFTLENBQUM4TyxZQUFZLEdBQUcsVUFBVUgsU0FBUyxFQUFFSSxLQUFLLEVBQUU7SUFDbkUsSUFBSS9GLEtBQUssR0FBRyxJQUFJO0lBQ2hCLElBQUk2RixTQUFTLEdBQUcsSUFBSSxDQUFDSixTQUFTLENBQUNFLFNBQVMsQ0FBQyxJQUFJLEVBQUU7SUFDL0NFLFNBQVMsQ0FBQy9QLE9BQU8sQ0FBQyxVQUFVOFAsRUFBRSxFQUFFO01BQUUsT0FBT0EsRUFBRSxDQUFDO1FBQUVuUSxNQUFNLEVBQUV1SyxLQUFLO1FBQUUrRixLQUFLLEVBQUVBO01BQU0sQ0FBQyxDQUFDO0lBQUUsQ0FBQyxDQUFDO0VBQ3BGLENBQUM7RUFDRCxPQUFPUCxpQkFBaUI7QUFDNUIsQ0FBQyxFQUFHO0FBQ0osSUFBSVEsZUFBZTtBQUNuQixDQUFDLFVBQVVBLGVBQWUsRUFBRTtFQUN4QkEsZUFBZSxDQUFDQSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSztFQUNuREEsZUFBZSxDQUFDQSxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUTtBQUM3RCxDQUFDLEVBQUVBLGVBQWUsS0FBS0EsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsSUFBSUMsVUFBVSxHQUFHLGFBQWUsWUFBWTtFQUN4QyxTQUFTQSxVQUFVLEdBQUc7SUFDbEIsSUFBSSxDQUFDQyxhQUFhLEdBQUcsRUFBRTtFQUMzQjtFQUNBRCxVQUFVLENBQUNqUCxTQUFTLENBQUMxQixJQUFJLEdBQUcsVUFBVTZRLElBQUksRUFBRTtJQUN4QyxJQUFJLENBQUNELGFBQWEsQ0FBQzVRLElBQUksQ0FBQzZRLElBQUksQ0FBQztJQUM3QixJQUFJLENBQUNDLFFBQVEsQ0FBQ0QsSUFBSSxFQUFFSCxlQUFlLENBQUNLLEdBQUcsRUFBRSxJQUFJLENBQUNILGFBQWEsQ0FBQztFQUNoRSxDQUFDO0VBQ0RELFVBQVUsQ0FBQ2pQLFNBQVMsQ0FBQ3NQLE1BQU0sR0FBRyxVQUFVQyxLQUFLLEVBQUVDLEdBQUcsRUFBRTtJQUNoRCxJQUFJTCxJQUFJLEdBQUcsSUFBSSxDQUFDRCxhQUFhLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSSxDQUFDSixRQUFRLENBQUNELElBQUksRUFBRUgsZUFBZSxDQUFDUyxNQUFNLEVBQUUsSUFBSSxDQUFDUCxhQUFhLENBQUM7SUFDL0QsT0FBT0MsSUFBSTtFQUNmLENBQUM7RUFDREYsVUFBVSxDQUFDalAsU0FBUyxDQUFDNk0sT0FBTyxHQUFHLFVBQVVzQyxJQUFJLEVBQUU7SUFDM0MsT0FBTyxJQUFJLENBQUNELGFBQWEsQ0FBQ3JDLE9BQU8sQ0FBQ3NDLElBQUksQ0FBQztFQUMzQyxDQUFDO0VBQ0RGLFVBQVUsQ0FBQ2pQLFNBQVMsQ0FBQzBQLFFBQVEsR0FBRyxVQUFVQyxFQUFFLEVBQUU7SUFDMUMsSUFBSSxDQUFDUCxRQUFRLEdBQUdPLEVBQUU7RUFDdEIsQ0FBQztFQUNELE9BQU9WLFVBQVU7QUFDckIsQ0FBQyxFQUFHO0FBRUosSUFBSVcsVUFBVTtBQUNkLENBQUMsVUFBVUEsVUFBVSxFQUFFO0VBQ25CQSxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUztFQUNqQ0EsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU87QUFDakMsQ0FBQyxFQUFFQSxVQUFVLEtBQUtBLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLElBQUlDLGVBQWUsR0FBRztFQUNsQkMsS0FBSyxFQUFFLENBQ0g7SUFDSXROLElBQUksRUFBRSxTQUFTO0lBQ2Z1TixTQUFTLEVBQUUsdUJBQXVCO0lBQ2xDQyxlQUFlLEVBQUUsU0FBUztJQUMxQkMsSUFBSSxFQUFFO01BQ0ZGLFNBQVMsRUFBRSxzQkFBc0I7TUFDakNHLE9BQU8sRUFBRTtJQUNiO0VBQ0osQ0FBQyxFQUNEO0lBQ0kxTixJQUFJLEVBQUUsT0FBTztJQUNidU4sU0FBUyxFQUFFLHFCQUFxQjtJQUNoQ0MsZUFBZSxFQUFFLFNBQVM7SUFDMUJDLElBQUksRUFBRTtNQUNGRixTQUFTLEVBQUUsb0JBQW9CO01BQy9CRyxPQUFPLEVBQUU7SUFDYjtFQUNKLENBQUMsQ0FDSjtFQUNEQyxRQUFRLEVBQUUsSUFBSTtFQUNkQyxNQUFNLEVBQUUsSUFBSTtFQUNaQyxRQUFRLEVBQUU7SUFDTkMsQ0FBQyxFQUFFLE9BQU87SUFDVkMsQ0FBQyxFQUFFO0VBQ1AsQ0FBQztFQUNEQyxXQUFXLEVBQUU7QUFDakIsQ0FBQztBQUVELElBQUlDLFNBQVMsR0FBRyxhQUFlLFlBQVk7RUFDdkMsU0FBU0EsU0FBUyxHQUFHO0lBQ2pCLElBQUksQ0FBQ3ZCLGFBQWEsR0FBRyxFQUFFO0lBQ3ZCLElBQUksQ0FBQ3dCLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxDQUFDQyxtQkFBbUIsR0FBRztNQUN2QkMsSUFBSSxFQUFFLFlBQVk7TUFDbEJDLE1BQU0sRUFBRSxRQUFRO01BQ2hCQyxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQ0QsSUFBSSxDQUFDQyxtQkFBbUIsR0FBRztNQUN2QkMsR0FBRyxFQUFFLFlBQVk7TUFDakJILE1BQU0sRUFBRSxRQUFRO01BQ2hCSSxNQUFNLEVBQUU7SUFDWixDQUFDO0lBQ0Q7SUFDQSxJQUFJQyxPQUFPLEdBQUcxTSxRQUFRLENBQUMyTSxzQkFBc0IsRUFBRTtJQUMvQyxJQUFJQyxjQUFjLEdBQUcsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQztNQUFFbkIsT0FBTyxFQUFFLEtBQUs7TUFBRUgsU0FBUyxFQUFFO0lBQVEsQ0FBQyxDQUFDO0lBQ3BGbUIsT0FBTyxDQUFDSSxXQUFXLENBQUNGLGNBQWMsQ0FBQztJQUNuQzVNLFFBQVEsQ0FBQytNLElBQUksQ0FBQ0QsV0FBVyxDQUFDSixPQUFPLENBQUM7SUFDbEMsSUFBSSxDQUFDTSxTQUFTLEdBQUdKLGNBQWM7SUFDL0I7SUFDQSxJQUFJLENBQUNLLHFCQUFxQixHQUFHLElBQUksQ0FBQ0MseUJBQXlCLEVBQUU7SUFDN0QsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTtFQUMvQjtFQUNBbEIsU0FBUyxDQUFDelEsU0FBUyxDQUFDME8sRUFBRSxHQUFHLFVBQVVLLEtBQUssRUFBRUgsRUFBRSxFQUFFO0lBQzFDLElBQUlnRCxFQUFFO0lBQ04sSUFBSSxDQUFDbEIsTUFBTSxHQUFHdkMsUUFBUSxDQUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDdUMsTUFBTSxDQUFDLEdBQUdrQixFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUVBLEVBQUUsQ0FBQzdDLEtBQUssQ0FBQyxHQUFHSCxFQUFFLEVBQUVnRCxFQUFFLEVBQUU7RUFDcEYsQ0FBQztFQUNEbkIsU0FBUyxDQUFDelEsU0FBUyxDQUFDNlIsTUFBTSxHQUFHLFVBQVVDLFlBQVksRUFBRXRQLElBQUksRUFBRTtJQUN2RCxJQUFJQSxJQUFJLEtBQUt3TSxlQUFlLENBQUNLLEdBQUcsRUFBRTtNQUM5QixJQUFJLENBQUMwQyxlQUFlLENBQUNELFlBQVksQ0FBQztJQUN0QyxDQUFDLE1BQ0ksSUFBSXRQLElBQUksS0FBS3dNLGVBQWUsQ0FBQ1MsTUFBTSxFQUFFO01BQ3RDLElBQUksQ0FBQ3VDLGtCQUFrQixDQUFDRixZQUFZLENBQUM7SUFDekM7RUFDSixDQUFDO0VBQ0RyQixTQUFTLENBQUN6USxTQUFTLENBQUNnUyxrQkFBa0IsR0FBRyxVQUFVRixZQUFZLEVBQUU7SUFDN0QsSUFBSTlJLEtBQUssR0FBRyxJQUFJO0lBQ2hCLElBQUlpSixvQkFBb0IsR0FBRyxJQUFJLENBQUNDLHdCQUF3QixDQUFDSixZQUFZLENBQUM7SUFDdEUsSUFBSUssSUFBSTtJQUNSLElBQUksQ0FBQ0Ysb0JBQW9CLEVBQUU7TUFDdkI7SUFDSjtJQUNBRSxJQUFJLEdBQUdGLG9CQUFvQixDQUFDRSxJQUFJO0lBQ2hDQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixDQUFDO0lBQzdDLElBQUlDLFdBQVc7SUFDZkgsSUFBSSxDQUFDSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNkLHFCQUFxQixFQUFHYSxXQUFXLEdBQUcsVUFBVXZELEtBQUssRUFBRTtNQUM5RSxJQUFJQSxLQUFLLENBQUN0USxNQUFNLEtBQUswVCxJQUFJLEVBQUU7UUFDdkJBLElBQUksQ0FBQ0ssbUJBQW1CLENBQUN4SixLQUFLLENBQUN5SSxxQkFBcUIsRUFBRWEsV0FBVyxDQUFDO1FBQ2xFdEosS0FBSyxDQUFDd0ksU0FBUyxDQUFDaUIsV0FBVyxDQUFDTixJQUFJLENBQUM7TUFDckM7SUFDSixDQUFDLENBQUU7RUFDUCxDQUFDO0VBQ0QxQixTQUFTLENBQUN6USxTQUFTLENBQUMrUixlQUFlLEdBQUcsVUFBVUQsWUFBWSxFQUFFO0lBQzFELElBQUlLLElBQUksR0FBRyxJQUFJLENBQUNPLG1CQUFtQixDQUFDWixZQUFZLENBQUM7SUFDakQsSUFBSSxDQUFDNUMsYUFBYSxDQUFDNVEsSUFBSSxDQUFDO01BQUV3VCxZQUFZLEVBQUVBLFlBQVk7TUFBRUssSUFBSSxFQUFFQTtJQUFLLENBQUMsQ0FBQztJQUNuRTtJQUNBO0lBQ0EsSUFBSSxDQUFDUSxTQUFTLENBQUNiLFlBQVksQ0FBQ3BKLE9BQU8sQ0FBQ2tLLE9BQU8sSUFBSSxjQUFjLENBQUM7RUFDbEUsQ0FBQztFQUNEbkMsU0FBUyxDQUFDelEsU0FBUyxDQUFDMFMsbUJBQW1CLEdBQUcsVUFBVVosWUFBWSxFQUFFO0lBQzlELElBQUlGLEVBQUU7SUFDTixJQUFJaUIsSUFBSSxHQUFHLElBQUksQ0FBQ0Msc0JBQXNCLENBQUNoQixZQUFZLENBQUM7SUFDcEQsSUFBSS9CLFNBQVMsR0FBRytCLFlBQVksQ0FBQ3BKLE9BQU8sQ0FBQ3FILFNBQVM7SUFDOUMsSUFBSUEsU0FBUyxFQUFFO01BQ1gsQ0FBQzZCLEVBQUUsR0FBR2lCLElBQUksQ0FBQ1QsU0FBUyxFQUFFQyxHQUFHLENBQUM5VCxLQUFLLENBQUNxVCxFQUFFLEVBQUU3QixTQUFTLENBQUNnRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0Q7SUFDQSxJQUFJLENBQUN2QixTQUFTLENBQUNGLFdBQVcsQ0FBQ3VCLElBQUksQ0FBQztJQUNoQyxPQUFPQSxJQUFJO0VBQ2YsQ0FBQztFQUNEcEMsU0FBUyxDQUFDelEsU0FBUyxDQUFDa1Msd0JBQXdCLEdBQUcsVUFBVUosWUFBWSxFQUFFO0lBQ25FLElBQUlrQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1osS0FBSyxJQUFJdFUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ3dRLGFBQWEsQ0FBQ3RRLE1BQU0sSUFBSW9VLEdBQUcsR0FBRyxDQUFDLEVBQUV0VSxDQUFDLEVBQUUsRUFBRTtNQUMzRCxJQUFJLElBQUksQ0FBQ3dRLGFBQWEsQ0FBQ3hRLENBQUMsQ0FBQyxDQUFDb1QsWUFBWSxLQUFLQSxZQUFZLEVBQUU7UUFDckRrQixHQUFHLEdBQUd0VSxDQUFDO01BQ1g7SUFDSjtJQUNBLElBQUlzVSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7TUFDWixPQUFPLElBQUksQ0FBQzlELGFBQWEsQ0FBQ0ksTUFBTSxDQUFDMEQsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQztJQUNBO0VBQ0osQ0FBQztFQUNEdkMsU0FBUyxDQUFDelEsU0FBUyxDQUFDaVQsWUFBWSxHQUFHLFVBQVV2SyxPQUFPLEVBQUU7SUFDbEQsSUFBSWtKLEVBQUU7SUFDTixPQUFPLENBQUMsQ0FBQ0EsRUFBRSxHQUFHbEosT0FBTyxLQUFLLElBQUksSUFBSUEsT0FBTyxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxPQUFPLENBQUMySCxRQUFRLE1BQU0sSUFBSSxJQUFJdUIsRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxFQUFFLENBQUN0QixDQUFDLEtBQUssT0FBTztFQUMzSSxDQUFDO0VBQ0RHLFNBQVMsQ0FBQ3pRLFNBQVMsQ0FBQ2tULFlBQVksR0FBRyxVQUFVeEssT0FBTyxFQUFFO0lBQ2xELElBQUlrSixFQUFFO0lBQ04sT0FBTyxDQUFDLENBQUNBLEVBQUUsR0FBR2xKLE9BQU8sS0FBSyxJQUFJLElBQUlBLE9BQU8sS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsT0FBTyxDQUFDMkgsUUFBUSxNQUFNLElBQUksSUFBSXVCLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsRUFBRSxDQUFDckIsQ0FBQyxLQUFLLFFBQVE7RUFDNUksQ0FBQztFQUNERSxTQUFTLENBQUN6USxTQUFTLENBQUNtVCx3QkFBd0IsR0FBRyxVQUFVekssT0FBTyxFQUFFO0lBQzlELElBQUkwSyxLQUFLLEdBQUcsSUFBSSxDQUFDekMsbUJBQW1CLENBQUMsSUFBSSxDQUFDc0MsWUFBWSxDQUFDdkssT0FBTyxDQUFDLENBQUM7SUFDaEUsSUFBSTJLLE9BQU8sR0FBRyxJQUFJLENBQUN0QyxtQkFBbUIsQ0FBQyxJQUFJLENBQUNtQyxZQUFZLENBQUN4SyxPQUFPLENBQUMsQ0FBQztJQUNsRSxJQUFJNEssS0FBSyxHQUFHLElBQUksQ0FBQzlCLFNBQVMsQ0FBQzhCLEtBQUs7SUFDaENBLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGlCQUFpQixFQUFFRixPQUFPLENBQUM7SUFDN0NDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGFBQWEsRUFBRUgsS0FBSyxDQUFDO0VBQzNDLENBQUM7RUFDRDNDLFNBQVMsQ0FBQ3pRLFNBQVMsQ0FBQzhTLHNCQUFzQixHQUFHLFVBQVVoQixZQUFZLEVBQUU7SUFDakUsSUFBSTlJLEtBQUssR0FBRyxJQUFJO0lBQ2hCLElBQUlOLE9BQU8sR0FBR29KLFlBQVksQ0FBQ3BKLE9BQU87SUFDbEMsSUFBSThLLFFBQVEsR0FBRzlLLE9BQU8sQ0FBQ3VILElBQUk7SUFDM0I7SUFDQSxJQUFJLENBQUNrRCx3QkFBd0IsQ0FBQ3pLLE9BQU8sQ0FBQztJQUN0QztJQUNBLElBQUkrSyxnQkFBZ0IsR0FBRyxJQUFJLENBQUNwQyxrQkFBa0IsQ0FBQztNQUFFbkIsT0FBTyxFQUFFLEtBQUs7TUFBRUgsU0FBUyxFQUFFO0lBQWUsQ0FBQyxDQUFDO0lBQzdGLElBQUlLLE1BQU0sR0FBRyxJQUFJLENBQUNpQixrQkFBa0IsQ0FBQztNQUFFbkIsT0FBTyxFQUFFLEtBQUs7TUFBRUgsU0FBUyxFQUFFO0lBQWdCLENBQUMsQ0FBQztJQUNwRixJQUFJMkQsT0FBTyxHQUFHLElBQUksQ0FBQ3JDLGtCQUFrQixDQUFDO01BQUVuQixPQUFPLEVBQUUsS0FBSztNQUFFSCxTQUFTLEVBQUU7SUFBaUIsQ0FBQyxDQUFDO0lBQ3RGLElBQUk2QyxPQUFPLEdBQUcsSUFBSSxDQUFDdkIsa0JBQWtCLENBQUM7TUFBRW5CLE9BQU8sRUFBRSxLQUFLO01BQUVILFNBQVMsRUFBRTtJQUFpQixDQUFDLENBQUM7SUFDdEY2QyxPQUFPLENBQUNlLFNBQVMsR0FBR2pMLE9BQU8sQ0FBQ2tLLE9BQU8sSUFBSSxFQUFFO0lBQ3pDLElBQUlnQixTQUFTLEdBQUdsTCxPQUFPLENBQUNtTCxVQUFVLElBQUluTCxPQUFPLENBQUNzSCxlQUFlO0lBQzdEO0lBQ0EsSUFBSXdELFFBQVEsRUFBRTtNQUNWLElBQUlNLGFBQWEsR0FBRyxJQUFJLENBQUN6QyxrQkFBa0IsQ0FBQztRQUFFbkIsT0FBTyxFQUFFLEtBQUs7UUFBRUgsU0FBUyxFQUFFO01BQWMsQ0FBQyxDQUFDO01BQ3pGLElBQUksT0FBT3lELFFBQVEsS0FBSyxRQUFRLElBQUlBLFFBQVEsWUFBWWxPLE1BQU0sRUFDMUR3TyxhQUFhLENBQUNILFNBQVMsR0FBRyxJQUFJck8sTUFBTSxDQUFDa08sUUFBUSxDQUFDLENBQUNPLE9BQU8sRUFBRTtNQUM1RCxJQUFJLE9BQU9QLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDOUIsSUFBSTVCLEVBQUUsR0FBRzRCLFFBQVEsQ0FBQ3RELE9BQU87VUFBRUEsT0FBTyxHQUFHMEIsRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBR0EsRUFBRTtVQUFFb0MsV0FBVyxHQUFHUixRQUFRLENBQUN6RCxTQUFTO1VBQUVrRSxJQUFJLEdBQUdULFFBQVEsQ0FBQ1MsSUFBSTtVQUFFQyxFQUFFLEdBQUdWLFFBQVEsQ0FBQ1csS0FBSztVQUFFQSxLQUFLLEdBQUdELEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBR04sU0FBUyxHQUFHTSxFQUFFO1FBQ2xMLElBQUlFLFdBQVcsR0FBRyxJQUFJLENBQUMvQyxrQkFBa0IsQ0FBQztVQUFFbkIsT0FBTyxFQUFFQSxPQUFPO1VBQUVILFNBQVMsRUFBRWlFLFdBQVc7VUFBRUMsSUFBSSxFQUFFQTtRQUFLLENBQUMsQ0FBQztRQUNuRyxJQUFJRSxLQUFLLEVBQ0xDLFdBQVcsQ0FBQ2QsS0FBSyxDQUFDYSxLQUFLLEdBQUdBLEtBQUs7UUFDbkNMLGFBQWEsQ0FBQ3hDLFdBQVcsQ0FBQzhDLFdBQVcsQ0FBQztNQUMxQztNQUNBVixPQUFPLENBQUNwQyxXQUFXLENBQUN3QyxhQUFhLENBQUM7SUFDdEM7SUFDQUosT0FBTyxDQUFDcEMsV0FBVyxDQUFDc0IsT0FBTyxDQUFDO0lBQzVCYSxnQkFBZ0IsQ0FBQ25DLFdBQVcsQ0FBQ29DLE9BQU8sQ0FBQztJQUNyQztJQUNBLElBQUlFLFNBQVMsRUFBRTtNQUNYLElBQUlsTCxPQUFPLENBQUMwSCxNQUFNLEVBQUU7UUFDaEJBLE1BQU0sQ0FBQ2tELEtBQUssQ0FBQ08sVUFBVSxHQUFHRCxTQUFTO1FBQ25DSCxnQkFBZ0IsQ0FBQ25DLFdBQVcsQ0FBQ2xCLE1BQU0sQ0FBQztNQUN4QyxDQUFDLE1BQ0k7UUFDRHFELGdCQUFnQixDQUFDSCxLQUFLLENBQUNPLFVBQVUsR0FBR0QsU0FBUztNQUNqRDtJQUNKO0lBQ0E7SUFDQSxJQUFJbEwsT0FBTyxDQUFDOEgsV0FBVyxFQUFFO01BQ3JCLElBQUk2RCxjQUFjLEdBQUcsSUFBSSxDQUFDaEQsa0JBQWtCLENBQUM7UUFBRW5CLE9BQU8sRUFBRSxLQUFLO1FBQUVILFNBQVMsRUFBRTtNQUFpQixDQUFDLENBQUM7TUFDN0YsSUFBSXVFLGFBQWEsR0FBRyxJQUFJLENBQUNqRCxrQkFBa0IsQ0FBQztRQUN4Q25CLE9BQU8sRUFBRSxRQUFRO1FBQ2pCSCxTQUFTLEVBQUU7TUFDZixDQUFDLENBQUM7TUFDRnNFLGNBQWMsQ0FBQy9DLFdBQVcsQ0FBQ2dELGFBQWEsQ0FBQztNQUN6Q1osT0FBTyxDQUFDcEMsV0FBVyxDQUFDK0MsY0FBYyxDQUFDO01BQ25DWixnQkFBZ0IsQ0FBQ3JCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO01BQzNEaUMsYUFBYSxDQUFDL0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVV4RCxLQUFLLEVBQUU7UUFDckQsSUFBSTZDLEVBQUUsRUFBRXNDLEVBQUU7UUFDVixDQUFDQSxFQUFFLEdBQUcsQ0FBQ3RDLEVBQUUsR0FBRzVJLEtBQUssQ0FBQzBILE1BQU0sRUFBRWQsVUFBVSxDQUFDMkUsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJTCxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLEVBQUUsQ0FBQzVULElBQUksQ0FBQ3NSLEVBQUUsRUFBRTtVQUFFblQsTUFBTSxFQUFFcVQsWUFBWTtVQUFFL0MsS0FBSyxFQUFFQTtRQUFNLENBQUMsQ0FBQztRQUN2SUEsS0FBSyxDQUFDeUYsZUFBZSxFQUFFO01BQzNCLENBQUMsQ0FBQztJQUNOO0lBQ0FmLGdCQUFnQixDQUFDbEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVV4RCxLQUFLLEVBQUU7TUFBRSxJQUFJNkMsRUFBRSxFQUFFc0MsRUFBRTtNQUFFLE9BQU8sQ0FBQ0EsRUFBRSxHQUFHLENBQUN0QyxFQUFFLEdBQUc1SSxLQUFLLENBQUMwSCxNQUFNLEVBQUVkLFVBQVUsQ0FBQzZFLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSVAsRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxFQUFFLENBQUM1VCxJQUFJLENBQUNzUixFQUFFLEVBQUU7UUFBRW5ULE1BQU0sRUFBRXFULFlBQVk7UUFBRS9DLEtBQUssRUFBRUE7TUFBTSxDQUFDLENBQUM7SUFBRSxDQUFDLENBQUM7SUFDMU47SUFDQSxJQUFJZ0IsU0FBUyxHQUFHLElBQUksQ0FBQ21ELFlBQVksQ0FBQ3hLLE9BQU8sQ0FBQyxLQUFLLEtBQUssR0FBRyxPQUFPLEdBQUcsT0FBTztJQUN4RStLLGdCQUFnQixDQUFDckIsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUd0QyxTQUFTLENBQUM7SUFDNUQsT0FBTzBELGdCQUFnQjtFQUMzQixDQUFDO0VBQ0RoRCxTQUFTLENBQUN6USxTQUFTLENBQUNxUixrQkFBa0IsR0FBRyxVQUFVTyxFQUFFLEVBQUU7SUFDbkQsSUFBSTFCLE9BQU8sR0FBRzBCLEVBQUUsQ0FBQzFCLE9BQU87TUFBRUgsU0FBUyxHQUFHNkIsRUFBRSxDQUFDN0IsU0FBUztNQUFFa0UsSUFBSSxHQUFHckMsRUFBRSxDQUFDcUMsSUFBSTtJQUNsRSxJQUFJOUUsSUFBSSxHQUFHM0ssUUFBUSxDQUFDcUcsYUFBYSxDQUFDcUYsT0FBTyxDQUFDO0lBQzFDLElBQUlILFNBQVMsRUFBRTtNQUNYWixJQUFJLENBQUNZLFNBQVMsR0FBR0EsU0FBUztJQUM5QjtJQUNBWixJQUFJLENBQUN1RixXQUFXLEdBQUdULElBQUksSUFBSSxJQUFJO0lBQy9CLE9BQU85RSxJQUFJO0VBQ2YsQ0FBQztFQUNEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lzQixTQUFTLENBQUN6USxTQUFTLENBQUMyUixvQkFBb0IsR0FBRyxZQUFZO0lBQ25ELElBQUlnRCxhQUFhLEdBQUcsSUFBSSxDQUFDdEQsa0JBQWtCLENBQUM7TUFBRW5CLE9BQU8sRUFBRSxLQUFLO01BQUVILFNBQVMsRUFBRTtJQUFrQixDQUFDLENBQUM7SUFDN0Y0RSxhQUFhLENBQUNDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO0lBQ2pERCxhQUFhLENBQUNDLFlBQVksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDO0lBQ2pEO0lBQ0E7SUFDQUQsYUFBYSxDQUFDckIsS0FBSyxDQUFDdUIsTUFBTSxHQUFHLEdBQUc7SUFDaENGLGFBQWEsQ0FBQ3JCLEtBQUssQ0FBQ3dCLElBQUksR0FBRyxlQUFlO0lBQzFDSCxhQUFhLENBQUNyQixLQUFLLENBQUN4UCxNQUFNLEdBQUcsS0FBSztJQUNsQzZRLGFBQWEsQ0FBQ3JCLEtBQUssQ0FBQ3lCLE1BQU0sR0FBRyxNQUFNO0lBQ25DSixhQUFhLENBQUNyQixLQUFLLENBQUMwQixRQUFRLEdBQUcsUUFBUTtJQUN2Q0wsYUFBYSxDQUFDckIsS0FBSyxDQUFDMkIsT0FBTyxHQUFHLEdBQUc7SUFDakNOLGFBQWEsQ0FBQ3JCLEtBQUssQ0FBQ2pELFFBQVEsR0FBRyxVQUFVO0lBQ3pDc0UsYUFBYSxDQUFDckIsS0FBSyxDQUFDMVAsS0FBSyxHQUFHLEtBQUs7SUFDakMrUSxhQUFhLENBQUNyQixLQUFLLENBQUM0QixPQUFPLEdBQUcsR0FBRztJQUNqQzFRLFFBQVEsQ0FBQytNLElBQUksQ0FBQ0QsV0FBVyxDQUFDcUQsYUFBYSxDQUFDO0lBQ3hDLElBQUksQ0FBQ0EsYUFBYSxHQUFHQSxhQUFhO0VBQ3RDLENBQUM7RUFDRDtBQUNKO0FBQ0E7RUFDSWxFLFNBQVMsQ0FBQ3pRLFNBQVMsQ0FBQzJTLFNBQVMsR0FBRyxVQUFVQyxPQUFPLEVBQUU7SUFDL0MsSUFBSTVKLEtBQUssR0FBRyxJQUFJO0lBQ2hCLElBQUksQ0FBQzJMLGFBQWEsQ0FBQ0QsV0FBVyxHQUFHLEVBQUU7SUFDbkM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EzUixVQUFVLENBQUMsWUFBWTtNQUNuQmlHLEtBQUssQ0FBQzJMLGFBQWEsQ0FBQ0QsV0FBVyxHQUFHOUIsT0FBTztJQUM3QyxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1gsQ0FBQztFQUNEO0FBQ0o7QUFDQTtFQUNJbkMsU0FBUyxDQUFDelEsU0FBUyxDQUFDMFIseUJBQXlCLEdBQUcsWUFBWTtJQUN4RCxJQUFJeUQsRUFBRSxHQUFHM1EsUUFBUSxDQUFDcUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUN4QyxJQUFJdUssV0FBVyxHQUFHO01BQ2RDLGFBQWEsRUFBRSxjQUFjO01BQzdCQyxXQUFXLEVBQUUsZUFBZTtNQUM1QkMsZ0JBQWdCLEVBQUUsb0JBQW9CO01BQ3RDQyxVQUFVLEVBQUU7SUFDaEIsQ0FBQztJQUNELElBQUlwSCxDQUFDO0lBQ0wsS0FBS0EsQ0FBQyxJQUFJZ0gsV0FBVyxFQUFFO01BQ25CLElBQUlELEVBQUUsQ0FBQzdCLEtBQUssQ0FBQ2xGLENBQUMsQ0FBQyxLQUFLdkssU0FBUyxFQUFFO1FBQzNCLE9BQU91UixXQUFXLENBQUNoSCxDQUFDLENBQUM7TUFDekI7SUFDSjtJQUNBO0lBQ0EsT0FBTyxjQUFjO0VBQ3pCLENBQUM7RUFDRCxPQUFPcUMsU0FBUztBQUNwQixDQUFDLEVBQUc7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSWdGLEtBQUssR0FBRyxhQUFlLFlBQVk7RUFDbkMsU0FBU0EsS0FBSyxDQUFDQyxJQUFJLEVBQUU7SUFDakIsSUFBSTFNLEtBQUssR0FBRyxJQUFJO0lBQ2hCLElBQUksQ0FBQzJNLE9BQU8sR0FBRyxJQUFJLENBQUNDLG1CQUFtQjtJQUN2QyxJQUFJLENBQUMxRyxhQUFhLEdBQUcsSUFBSUQsVUFBVSxFQUFFO0lBQ3JDLElBQUksQ0FBQzRHLElBQUksR0FBRyxJQUFJcEYsU0FBUyxFQUFFO0lBQzNCLElBQUlYLEtBQUssR0FBRyxJQUFJLENBQUNnRyxhQUFhLENBQUNKLElBQUksQ0FBQztJQUNwQyxJQUFJLENBQUNoTixPQUFPLEdBQUd5RixRQUFRLENBQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTBCLGVBQWUsQ0FBQyxFQUFFNkYsSUFBSSxDQUFDO0lBQzVELElBQUksQ0FBQ2hOLE9BQU8sQ0FBQ29ILEtBQUssR0FBR0EsS0FBSztJQUMxQixJQUFJLENBQUNaLGFBQWEsQ0FBQ1EsUUFBUSxDQUFDLFVBQVVQLElBQUksRUFBRTNNLElBQUksRUFBRTtNQUFFLE9BQU93RyxLQUFLLENBQUM2TSxJQUFJLENBQUNoRSxNQUFNLENBQUMxQyxJQUFJLEVBQUUzTSxJQUFJLENBQUM7SUFBRSxDQUFDLENBQUM7SUFDNUYsSUFBSSxDQUFDcVQsSUFBSSxDQUFDbkgsRUFBRSxDQUFDa0IsVUFBVSxDQUFDMkUsT0FBTyxFQUFFLFVBQVUzQyxFQUFFLEVBQUU7TUFDM0MsSUFBSW5ULE1BQU0sR0FBR21ULEVBQUUsQ0FBQ25ULE1BQU07UUFBRXNRLEtBQUssR0FBRzZDLEVBQUUsQ0FBQzdDLEtBQUs7TUFDeEMvRixLQUFLLENBQUM0TSxtQkFBbUIsQ0FBQ25YLE1BQU0sQ0FBQztNQUNqQztNQUNBQSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUNtUixVQUFVLENBQUMyRSxPQUFPLEVBQUV4RixLQUFLLENBQUM7SUFDckQsQ0FBQyxDQUFDO0lBQ0Y7SUFDQSxJQUFJLENBQUM4RyxJQUFJLENBQUNuSCxFQUFFLENBQUNrQixVQUFVLENBQUM2RSxLQUFLLEVBQUUsVUFBVTdDLEVBQUUsRUFBRTtNQUN6QyxJQUFJblQsTUFBTSxHQUFHbVQsRUFBRSxDQUFDblQsTUFBTTtRQUFFc1EsS0FBSyxHQUFHNkMsRUFBRSxDQUFDN0MsS0FBSztNQUN4QyxPQUFPdFEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDbVIsVUFBVSxDQUFDNkUsS0FBSyxFQUFFMUYsS0FBSyxDQUFDO0lBQzFELENBQUMsQ0FBQztFQUNOO0VBQ0EwRyxLQUFLLENBQUN6VixTQUFTLENBQUNzRSxLQUFLLEdBQUcsVUFBVXlSLE9BQU8sRUFBRTtJQUN2QyxJQUFJck4sT0FBTyxHQUFHLElBQUksQ0FBQ3NOLGdCQUFnQixDQUFDLE9BQU8sRUFBRUQsT0FBTyxDQUFDO0lBQ3JELE9BQU8sSUFBSSxDQUFDRSxJQUFJLENBQUN2TixPQUFPLENBQUM7RUFDN0IsQ0FBQztFQUNEK00sS0FBSyxDQUFDelYsU0FBUyxDQUFDcUUsT0FBTyxHQUFHLFVBQVUwUixPQUFPLEVBQUU7SUFDekMsSUFBSXJOLE9BQU8sR0FBRyxJQUFJLENBQUNzTixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVELE9BQU8sQ0FBQztJQUN2RCxPQUFPLElBQUksQ0FBQ0UsSUFBSSxDQUFDdk4sT0FBTyxDQUFDO0VBQzdCLENBQUM7RUFDRCtNLEtBQUssQ0FBQ3pWLFNBQVMsQ0FBQ2lXLElBQUksR0FBRyxVQUFVdk4sT0FBTyxFQUFFO0lBQ3RDLElBQUl3TixXQUFXLEdBQUcsSUFBSSxDQUFDeE4sT0FBTyxDQUFDb0gsS0FBSyxDQUFDcUcsSUFBSSxDQUFDLFVBQVV2RSxFQUFFLEVBQUU7TUFDcEQsSUFBSXBQLElBQUksR0FBR29QLEVBQUUsQ0FBQ3BQLElBQUk7TUFDbEIsT0FBT0EsSUFBSSxLQUFLa0csT0FBTyxDQUFDbEcsSUFBSTtJQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDUixJQUFJNFQsTUFBTSxHQUFHakksUUFBUSxDQUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUrSCxXQUFXLENBQUMsRUFBRXhOLE9BQU8sQ0FBQztJQUN6RCxJQUFJLENBQUMyTixXQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxFQUFFRCxNQUFNLENBQUM7SUFDL0QsSUFBSXRFLFlBQVksR0FBRyxJQUFJdEQsaUJBQWlCLENBQUM0SCxNQUFNLENBQUM7SUFDaEQsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQ3hFLFlBQVksQ0FBQztJQUNwQyxPQUFPQSxZQUFZO0VBQ3ZCLENBQUM7RUFDRDJELEtBQUssQ0FBQ3pWLFNBQVMsQ0FBQ3VXLFVBQVUsR0FBRyxZQUFZO0lBQ3JDLE9BQU8sSUFBSSxDQUFDckgsYUFBYSxDQUFDSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNsQztFQUNSLENBQUM7RUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ltRyxLQUFLLENBQUN6VixTQUFTLENBQUNxVyxXQUFXLEdBQUcsVUFBVTVXLEtBQUssRUFBRTJXLE1BQU0sRUFBRTtJQUNuRCxJQUFJcE4sS0FBSyxHQUFHLElBQUk7SUFDaEJ2SixLQUFLLENBQUNYLE9BQU8sQ0FBQyxVQUFVMFgsSUFBSSxFQUFFO01BQzFCO01BQ0FKLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHeE4sS0FBSyxDQUFDTixPQUFPLENBQUM4TixJQUFJLENBQUMsR0FBR0osTUFBTSxDQUFDSSxJQUFJLENBQUM7SUFDNUUsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUNEZixLQUFLLENBQUN6VixTQUFTLENBQUNzVyxpQkFBaUIsR0FBRyxVQUFVeEUsWUFBWSxFQUFFO0lBQ3hELElBQUk5SSxLQUFLLEdBQUcsSUFBSTtJQUNoQixJQUFJLENBQUNrRyxhQUFhLENBQUM1USxJQUFJLENBQUN3VCxZQUFZLENBQUM7SUFDckMsSUFBSTNCLFFBQVEsR0FBRzJCLFlBQVksQ0FBQ3BKLE9BQU8sQ0FBQ3lILFFBQVEsS0FBS3RNLFNBQVMsR0FBR2lPLFlBQVksQ0FBQ3BKLE9BQU8sQ0FBQ3lILFFBQVEsR0FBRyxJQUFJLENBQUN6SCxPQUFPLENBQUN5SCxRQUFRO0lBQ2xILElBQUlBLFFBQVEsRUFBRTtNQUNWcE4sVUFBVSxDQUFDLFlBQVk7UUFBRSxPQUFPaUcsS0FBSyxDQUFDNE0sbUJBQW1CLENBQUM5RCxZQUFZLENBQUM7TUFBRSxDQUFDLEVBQUUzQixRQUFRLENBQUM7SUFDekY7RUFDSixDQUFDO0VBQ0RzRixLQUFLLENBQUN6VixTQUFTLENBQUM0VixtQkFBbUIsR0FBRyxVQUFVOUQsWUFBWSxFQUFFO0lBQzFELElBQUl2QyxLQUFLLEdBQUcsSUFBSSxDQUFDTCxhQUFhLENBQUNyQyxPQUFPLENBQUNpRixZQUFZLENBQUM7SUFDcEQsSUFBSXZDLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtNQUNkLElBQUksQ0FBQ0wsYUFBYSxDQUFDSSxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkM7RUFDSixDQUFDO0VBQ0RrRyxLQUFLLENBQUN6VixTQUFTLENBQUNnVyxnQkFBZ0IsR0FBRyxVQUFVeFQsSUFBSSxFQUFFdVQsT0FBTyxFQUFFO0lBQ3hELElBQUlyTixPQUFPLEdBQUc7TUFBRWxHLElBQUksRUFBRUE7SUFBSyxDQUFDO0lBQzVCLElBQUksT0FBT3VULE9BQU8sS0FBSyxRQUFRLEVBQUU7TUFDN0JyTixPQUFPLENBQUNrSyxPQUFPLEdBQUdtRCxPQUFPO0lBQzdCLENBQUMsTUFDSSxJQUFJLE9BQU9BLE9BQU8sS0FBSyxRQUFRLEVBQUU7TUFDbENyTixPQUFPLEdBQUd5RixRQUFRLENBQUNBLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRXpGLE9BQU8sQ0FBQyxFQUFFcU4sT0FBTyxDQUFDO0lBQ3REO0lBQ0EsT0FBT3JOLE9BQU87RUFDbEIsQ0FBQztFQUNEK00sS0FBSyxDQUFDelYsU0FBUyxDQUFDOFYsYUFBYSxHQUFHLFVBQVVKLElBQUksRUFBRTtJQUM1QyxJQUFJZSxhQUFhLEdBQUcsQ0FBRWYsSUFBSSxJQUFJQSxJQUFJLENBQUM1RixLQUFLLElBQUssRUFBRSxFQUFFek4sS0FBSyxFQUFFO0lBQ3hELElBQUlxVSxpQkFBaUIsR0FBRzdHLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDNkcsR0FBRyxDQUFDLFVBQVVDLFdBQVcsRUFBRTtNQUNyRTtNQUNBO01BQ0EsSUFBSUMsV0FBVyxHQUFHLENBQUMsQ0FBQztNQUNwQkosYUFBYSxDQUFDM1gsT0FBTyxDQUFDLFVBQVVzUCxDQUFDLEVBQUU0RSxHQUFHLEVBQUU7UUFDcEMsSUFBSTVFLENBQUMsQ0FBQzVMLElBQUksS0FBS29VLFdBQVcsQ0FBQ3BVLElBQUksRUFDM0JxVSxXQUFXLEdBQUc3RCxHQUFHO01BQ3pCLENBQUMsQ0FBQztNQUNGLElBQUk4RCxRQUFRLEdBQUdELFdBQVcsS0FBSyxDQUFDLENBQUMsR0FBR0osYUFBYSxDQUFDbkgsTUFBTSxDQUFDdUgsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNoRixPQUFPMUksUUFBUSxDQUFDQSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUV5SSxXQUFXLENBQUMsRUFBRUUsUUFBUSxDQUFDO0lBQ3hELENBQUMsQ0FBQztJQUNGLE9BQU9KLGlCQUFpQixDQUFDdFIsTUFBTSxDQUFDcVIsYUFBYSxDQUFDO0VBQ2xELENBQUM7RUFDRCxPQUFPaEIsS0FBSztBQUNoQixDQUFDLEVBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RiMEI7QUFDSTtBQUNsQyxpRUFBZSxNQUFNO0VBQ25CLElBQU11QixPQUFPLEdBQUd4UyxRQUFRLENBQUN5UyxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQ3ZELElBQUlELE9BQU8sRUFBRTtJQUNYLElBQU1FLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFDL0MsSUFBSSxDQUFDUCwrQ0FBTyxDQUFDRyxJQUFJLENBQUMsRUFBRTtNQUNsQixJQUFNSyxLQUFLLEdBQUcsSUFBSTlCLHdDQUFLLENBQUM7UUFBRXRGLFFBQVEsRUFBRTtNQUFLLENBQUMsQ0FBQztNQUMzQ3BTLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDb1osSUFBSSxDQUFDLENBQUNQLEdBQUcsQ0FBQzVYLEdBQUcsSUFBSTtRQUMzQm1ZLElBQUksQ0FBQ25ZLEdBQUcsQ0FBQyxDQUFDNFgsR0FBRyxDQUFDVyxNQUFNLElBQUk7VUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQ0UsUUFBUSxDQUFDelksR0FBRyxDQUFDLEVBQUV3WSxLQUFLLENBQUNqVCxLQUFLLENBQUNnVCxNQUFNLENBQUMxRSxPQUFPLENBQUM7VUFDakUsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQzRFLFFBQVEsQ0FBQ3pZLEdBQUcsQ0FBQyxFQUFFd1ksS0FBSyxDQUFDbFQsT0FBTyxDQUFDaVQsTUFBTSxDQUFDMUUsT0FBTyxDQUFDO1FBQ3RFLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNKO0VBQ0Y7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcUM7QUFFL0IsSUFBTW1FLE9BQU8sR0FBRzlXLEdBQUcsSUFDeEIsQ0FBQ2xDLE1BQU0sRUFBRTRHLEtBQUssQ0FBQyxDQUFDNlMsUUFBUSxDQUFDLENBQUN2WCxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUV3WCxXQUFXLENBQUMsSUFDakQsQ0FBQzFaLE1BQU0sQ0FBQzJaLE9BQU8sQ0FBQ3pYLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDckIsTUFBTTtBQUM1QixJQUFNK1ksWUFBWSxHQUFHeE8sR0FBRyxJQUFJO0VBQ2pDLE9BQU95TyxLQUFLLENBQUN6TyxHQUFHLENBQUMsQ0FBQzBPLElBQUksQ0FBQ0MsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRSxDQUFDO0FBQzNDLENBQUM7QUFFTSxJQUFNQyxTQUFTLEdBQUcsTUFBTTtFQUM3QixPQUFPeFQsUUFBUSxDQUNaeVQsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQ3hDQyxZQUFZLENBQUMsU0FBUyxDQUFDO0FBQzVCLENBQUM7QUFFTSxTQUFTQyxNQUFNLEdBQUc7RUFDdkIsT0FBTyxzQ0FBc0MsQ0FBQ3RLLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBU3VLLENBQUMsRUFBRTtJQUN6RSxJQUFJQyxDQUFDLEdBQUkxUSxJQUFJLENBQUMyUSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUksQ0FBQztNQUM5QkMsQ0FBQyxHQUFHSCxDQUFDLElBQUksR0FBRyxHQUFHQyxDQUFDLEdBQUlBLENBQUMsR0FBRyxHQUFHLEdBQUksR0FBRztJQUNwQyxPQUFPRSxDQUFDLENBQUNwVixRQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3ZCLENBQUMsQ0FBQztBQUNKO0FBRU8sSUFBTXFWLFlBQVksR0FBRy9QLElBQUksSUFBSTtFQUNsQyxPQUFPLElBQUlnUSxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEtBQUs7SUFDdEMsSUFBSWpiLHFEQUFVLENBQUMrSyxJQUFJLEVBQUU7TUFDbkIzRixPQUFPLEVBQUUsR0FBRztNQUNadUIsT0FBTyxDQUFDeUUsTUFBTSxFQUFFO1FBQ2Q0UCxPQUFPLENBQUM1UCxNQUFNLENBQUM7TUFDakIsQ0FBQztNQUNEeEUsS0FBSyxDQUFDd0osR0FBRyxFQUFFO1FBQ1Q0SyxPQUFPLENBQUNqUSxJQUFJLENBQUM7TUFDZjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFTSxJQUFNbVEsV0FBVyxHQUFHLENBQUNDLFFBQVEsRUFBRTlJLFNBQVMsS0FBSztFQUNsRCxJQUFJLENBQUM4SSxRQUFRLElBQUksQ0FBQzlJLFNBQVMsRUFBRTtFQUM3QixJQUFNK0ksUUFBUSxHQUFHdFUsUUFBUSxDQUFDeVQsYUFBYSxDQUFDWSxRQUFRLENBQUM7RUFDakQsSUFBSUMsUUFBUSxDQUFDMUcsU0FBUyxDQUFDMkcsUUFBUSxDQUFDaEosU0FBUyxDQUFDLEVBQUU7SUFDMUMrSSxRQUFRLENBQUMxRyxTQUFTLENBQUM0RyxNQUFNLENBQUNqSixTQUFTLENBQUM7SUFDcEM7RUFDRjtFQUVBK0ksUUFBUSxDQUFDMUcsU0FBUyxDQUFDQyxHQUFHLENBQUN0QyxTQUFTLENBQUM7QUFDbkMsQ0FBQztBQUVNLFNBQVNrSixTQUFTLENBQUN2WCxPQUFPLEVBQUU7RUFDakMsSUFBSUssVUFBVSxHQUFHUCxJQUFJLENBQUNFLE9BQU8sQ0FBQ3FSLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM1QyxJQUFJbUcsRUFBRSxHQUFHLElBQUl6WCxXQUFXLENBQUNNLFVBQVUsQ0FBQ25ELE1BQU0sQ0FBQztFQUMzQyxJQUFJdWEsRUFBRSxHQUFHLElBQUluWSxVQUFVLENBQUNrWSxFQUFFLENBQUM7RUFFM0IsS0FBSyxJQUFJeGEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcUQsVUFBVSxDQUFDbkQsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtJQUMxQ3lhLEVBQUUsQ0FBQ3phLENBQUMsQ0FBQyxHQUFHcUQsVUFBVSxDQUFDUSxVQUFVLENBQUM3RCxDQUFDLENBQUM7RUFDbEM7RUFDQSxPQUFPLElBQUlrQyxJQUFJLENBQUMsQ0FBQ3NZLEVBQUUsQ0FBQyxFQUFFO0lBQUUxVyxJQUFJLEVBQUU7RUFBYSxDQUFDLENBQUM7QUFDL0M7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QjtBQUU1QixJQUFNNlcsQ0FBQyxHQUFHN1UsUUFBUSxDQUFDeVQsYUFBYSxDQUFDcUIsSUFBSSxDQUFDOVUsUUFBUSxDQUFDO0FBQy9DaEUsTUFBTSxDQUFDNlksQ0FBQyxHQUFHQSxDQUFDO0FBRVo3VSxRQUFRLENBQUMrTixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELElBQUkvTixRQUFRLENBQUMrVSxVQUFVLEtBQUssVUFBVSxFQUFFO0lBQ3RDSCxrREFBSyxFQUFFO0VBQ1Q7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3BlcnR5LWxpc3RpbmctZGFzaGJvYXJkLy4vbm9kZV9tb2R1bGVzL2NvbXByZXNzb3Jqcy9kaXN0L2NvbXByZXNzb3IuanMiLCJ3ZWJwYWNrOi8vcHJvcGVydHktbGlzdGluZy1kYXNoYm9hcmQvLi9ub2RlX21vZHVsZXMvbm90eWYvbm90eWYuZXMuanMiLCJ3ZWJwYWNrOi8vcHJvcGVydHktbGlzdGluZy1kYXNoYm9hcmQvLi9zcmMvYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9mbGFzaC5qcyIsIndlYnBhY2s6Ly9wcm9wZXJ0eS1saXN0aW5nLWRhc2hib2FyZC8uL3NyYy9hcHAvYXNzZXRzL2phdmFzY3JpcHRzL3V0aWxzLmpzIiwid2VicGFjazovL3Byb3BlcnR5LWxpc3RpbmctZGFzaGJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb3BlcnR5LWxpc3RpbmctZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb3BlcnR5LWxpc3RpbmctZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9wZXJ0eS1saXN0aW5nLWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb3BlcnR5LWxpc3RpbmctZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvcGVydHktbGlzdGluZy1kYXNoYm9hcmQvLi9zcmMvYXBwL2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHBsaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENvbXByZXNzb3IuanMgdjEuMS4xXG4gKiBodHRwczovL2Zlbmd5dWFuY2hlbi5naXRodWIuaW8vY29tcHJlc3NvcmpzXG4gKlxuICogQ29weXJpZ2h0IDIwMTgtcHJlc2VudCBDaGVuIEZlbmd5dWFuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDIxLTEwLTA1VDAyOjMyOjQwLjIxMlpcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Db21wcmVzc29yID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG5cbiAgICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgICBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzO1xuICB9XG5cbiAgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgICBpZiAoaSAlIDIpIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHZhciBjYW52YXNUb0Jsb2IgPSB7ZXhwb3J0czoge319O1xuXG4gIC8qXG4gICAqIEphdmFTY3JpcHQgQ2FudmFzIHRvIEJsb2JcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1DYW52YXMtdG8tQmxvYlxuICAgKlxuICAgKiBDb3B5cmlnaHQgMjAxMiwgU2ViYXN0aWFuIFRzY2hhblxuICAgKiBodHRwczovL2JsdWVpbXAubmV0XG4gICAqXG4gICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAgICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAgICpcbiAgICogQmFzZWQgb24gc3RhY2tvdmVyZmxvdyB1c2VyIFN0b2l2ZSdzIGNvZGUgc25pcHBldDpcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvNDk5ODkwOFxuICAgKi9cblxuICAoZnVuY3Rpb24gKG1vZHVsZSkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAgIChmdW5jdGlvbiAod2luZG93KSB7XG5cbiAgICAgIHZhciBDYW52YXNQcm90b3R5cGUgPSB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQgJiYgd2luZG93LkhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZTtcblxuICAgICAgdmFyIGhhc0Jsb2JDb25zdHJ1Y3RvciA9IHdpbmRvdy5CbG9iICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gQm9vbGVhbihuZXcgQmxvYigpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSgpO1xuXG4gICAgICB2YXIgaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA9IGhhc0Jsb2JDb25zdHJ1Y3RvciAmJiB3aW5kb3cuVWludDhBcnJheSAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheSgxMDApXSkuc2l6ZSA9PT0gMTAwO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KCk7XG5cbiAgICAgIHZhciBCbG9iQnVpbGRlciA9IHdpbmRvdy5CbG9iQnVpbGRlciB8fCB3aW5kb3cuV2ViS2l0QmxvYkJ1aWxkZXIgfHwgd2luZG93Lk1vekJsb2JCdWlsZGVyIHx8IHdpbmRvdy5NU0Jsb2JCdWlsZGVyO1xuICAgICAgdmFyIGRhdGFVUklQYXR0ZXJuID0gL15kYXRhOigoLio/KSg7Y2hhcnNldD0uKj8pPykoO2Jhc2U2NCk/LC87XG5cbiAgICAgIHZhciBkYXRhVVJMdG9CbG9iID0gKGhhc0Jsb2JDb25zdHJ1Y3RvciB8fCBCbG9iQnVpbGRlcikgJiYgd2luZG93LmF0b2IgJiYgd2luZG93LkFycmF5QnVmZmVyICYmIHdpbmRvdy5VaW50OEFycmF5ICYmIGZ1bmN0aW9uIChkYXRhVVJJKSB7XG4gICAgICAgIHZhciBtYXRjaGVzLCBtZWRpYVR5cGUsIGlzQmFzZTY0LCBkYXRhU3RyaW5nLCBieXRlU3RyaW5nLCBhcnJheUJ1ZmZlciwgaW50QXJyYXksIGksIGJiOyAvLyBQYXJzZSB0aGUgZGF0YVVSSSBjb21wb25lbnRzIGFzIHBlciBSRkMgMjM5N1xuXG4gICAgICAgIG1hdGNoZXMgPSBkYXRhVVJJLm1hdGNoKGRhdGFVUklQYXR0ZXJuKTtcblxuICAgICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgZGF0YSBVUkknKTtcbiAgICAgICAgfSAvLyBEZWZhdWx0IHRvIHRleHQvcGxhaW47Y2hhcnNldD1VUy1BU0NJSVxuXG5cbiAgICAgICAgbWVkaWFUeXBlID0gbWF0Y2hlc1syXSA/IG1hdGNoZXNbMV0gOiAndGV4dC9wbGFpbicgKyAobWF0Y2hlc1szXSB8fCAnO2NoYXJzZXQ9VVMtQVNDSUknKTtcbiAgICAgICAgaXNCYXNlNjQgPSAhIW1hdGNoZXNbNF07XG4gICAgICAgIGRhdGFTdHJpbmcgPSBkYXRhVVJJLnNsaWNlKG1hdGNoZXNbMF0ubGVuZ3RoKTtcblxuICAgICAgICBpZiAoaXNCYXNlNjQpIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZzpcbiAgICAgICAgICBieXRlU3RyaW5nID0gYXRvYihkYXRhU3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhc2U2NC9VUkxFbmNvZGVkIGRhdGEgY29tcG9uZW50IHRvIHJhdyBiaW5hcnk6XG4gICAgICAgICAgYnl0ZVN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChkYXRhU3RyaW5nKTtcbiAgICAgICAgfSAvLyBXcml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhbiBBcnJheUJ1ZmZlcjpcblxuXG4gICAgICAgIGFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfSAvLyBXcml0ZSB0aGUgQXJyYXlCdWZmZXIgKG9yIEFycmF5QnVmZmVyVmlldykgdG8gYSBibG9iOlxuXG5cbiAgICAgICAgaWYgKGhhc0Jsb2JDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgIHJldHVybiBuZXcgQmxvYihbaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA/IGludEFycmF5IDogYXJyYXlCdWZmZXJdLCB7XG4gICAgICAgICAgICB0eXBlOiBtZWRpYVR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJiID0gbmV3IEJsb2JCdWlsZGVyKCk7XG4gICAgICAgIGJiLmFwcGVuZChhcnJheUJ1ZmZlcik7XG4gICAgICAgIHJldHVybiBiYi5nZXRCbG9iKG1lZGlhVHlwZSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAod2luZG93LkhUTUxDYW52YXNFbGVtZW50ICYmICFDYW52YXNQcm90b3R5cGUudG9CbG9iKSB7XG4gICAgICAgIGlmIChDYW52YXNQcm90b3R5cGUubW96R2V0QXNGaWxlKSB7XG4gICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChxdWFsaXR5ICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1vekdldEFzRmlsZSgnYmxvYicsIHR5cGUpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChDYW52YXNQcm90b3R5cGUudG9EYXRhVVJMICYmIGRhdGFVUkx0b0Jsb2IpIHtcbiAgICAgICAgICBpZiAoQ2FudmFzUHJvdG90eXBlLm1zVG9CbG9iKSB7XG4gICAgICAgICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlICYmIHR5cGUgIT09ICdpbWFnZS9wbmcnIHx8IHF1YWxpdHkpICYmIENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLm1zVG9CbG9iKHR5cGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ2FudmFzUHJvdG90eXBlLnRvQmxvYiA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdHlwZSwgcXVhbGl0eSkge1xuICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFVUkx0b0Jsb2Ioc2VsZi50b0RhdGFVUkwodHlwZSwgcXVhbGl0eSkpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkYXRhVVJMdG9CbG9iO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmRhdGFVUkx0b0Jsb2IgPSBkYXRhVVJMdG9CbG9iO1xuICAgICAgfVxuICAgIH0pKHdpbmRvdyk7XG4gIH0pKGNhbnZhc1RvQmxvYik7XG5cbiAgdmFyIHRvQmxvYiA9IGNhbnZhc1RvQmxvYi5leHBvcnRzO1xuXG4gIHZhciBpc0Jsb2IgPSBmdW5jdGlvbiBpc0Jsb2IodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIEJsb2IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQmxvYiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCbG9iXSc7XG4gIH07XG5cbiAgdmFyIERFRkFVTFRTID0ge1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiBvdXRwdXQgdGhlIG9yaWdpbmFsIGltYWdlIGluc3RlYWQgb2YgdGhlIGNvbXByZXNzZWQgb25lXG4gICAgICogd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29tcHJlc3NlZCBpbWFnZSBpcyBncmVhdGVyIHRoYW4gdGhlIG9yaWdpbmFsIG9uZSdzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RyaWN0OiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHJlYWQgdGhlIGltYWdlJ3MgRXhpZiBPcmllbnRhdGlvbiBpbmZvcm1hdGlvbixcbiAgICAgKiBhbmQgdGhlbiByb3RhdGUgb3IgZmxpcCB0aGUgaW1hZ2UgYXV0b21hdGljYWxseS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjaGVja09yaWVudGF0aW9uOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heCB3aWR0aCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWF4V2lkdGg6IEluZmluaXR5LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heCBoZWlnaHQgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heEhlaWdodDogSW5maW5pdHksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluIHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW4gaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtaW5IZWlnaHQ6IDAsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgbmF0dXJhbCB3aWR0aCBvZiB0aGUgc291cmNlIGltYWdlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHdpZHRoOiB1bmRlZmluZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogSWYgbm90IHNwZWNpZmllZCwgdGhlIG5hdHVyYWwgaGVpZ2h0IG9mIHRoZSBzb3VyY2UgaW1hZ2Ugd2lsbCBiZSB1c2VkLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGhvdyB0aGUgc2l6ZSBvZiB0aGUgaW1hZ2Ugc2hvdWxkIGJlIHJlc2l6ZWQgdG8gdGhlIGNvbnRhaW5lclxuICAgICAqIHNwZWNpZmllZCBieSB0aGUgYHdpZHRoYCBhbmQgYGhlaWdodGAgb3B0aW9ucy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHJlc2l6ZTogJ25vbmUnLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHF1YWxpdHkgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBJdCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gYDBgIGFuZCBgMWAsXG4gICAgICogYW5kIG9ubHkgYXZhaWxhYmxlIGZvciBgaW1hZ2UvanBlZ2AgYW5kIGBpbWFnZS93ZWJwYCBpbWFnZXMuXG4gICAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTENhbnZhc0VsZW1lbnQvdG9CbG9iIGNhbnZhcy50b0Jsb2J9LlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgcXVhbGl0eTogMC44LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBvcmlnaW5hbCBtaW1lIHR5cGUgb2YgdGhlIHNvdXJjZSBpbWFnZSBmaWxlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIG1pbWVUeXBlOiAnYXV0bycsXG5cbiAgICAvKipcbiAgICAgKiBGaWxlcyB3aG9zZSBmaWxlIHR5cGUgaXMgaW5jbHVkZWQgaW4gdGhpcyBsaXN0LFxuICAgICAqIGFuZCB3aG9zZSBmaWxlIHNpemUgZXhjZWVkcyB0aGUgYGNvbnZlcnRTaXplYCB2YWx1ZSB3aWxsIGJlIGNvbnZlcnRlZCB0byBKUEVHcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5n772cQXJyYXl9XG4gICAgICovXG4gICAgY29udmVydFR5cGVzOiBbJ2ltYWdlL3BuZyddLFxuXG4gICAgLyoqXG4gICAgICogUE5HIGZpbGVzIG92ZXIgdGhpcyBzaXplICg1IE1CIGJ5IGRlZmF1bHQpIHdpbGwgYmUgY29udmVydGVkIHRvIEpQRUdzLlxuICAgICAqIFRvIGRpc2FibGUgdGhpcywganVzdCBzZXQgdGhlIHZhbHVlIHRvIGBJbmZpbml0eWAuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBjb252ZXJ0U2l6ZTogNTAwMDAwMCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYmVmb3JlIGRyYXcgdGhlIGltYWdlIGludG8gdGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0IC0gVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IG9mIHRoZSBjYW52YXMuXG4gICAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIC0gVGhlIGNhbnZhcyBmb3IgY29tcHJlc3Npb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoY29udGV4dCwgY2FudmFzKSB7XG4gICAgICogICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgKiB9XG4gICAgICovXG4gICAgYmVmb3JlRHJhdzogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZHJldyB0aGUgaW1hZ2UgaW50byB0aGUgY2FudmFzIGZvciBjb21wcmVzc2lvbi5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHQgLSBUaGUgMmQgcmVuZGVyaW5nIGNvbnRleHQgb2YgdGhlIGNhbnZhcy5cbiAgICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgLSBUaGUgY2FudmFzIGZvciBjb21wcmVzc2lvbi5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGZ1bmN0aW9uIChjb250ZXh0LCBjYW52YXMpIHtcbiAgICAgKiAgIGNvbnRleHQuZmlsdGVyID0gJ2dyYXlzY2FsZSgxMDAlKSc7XG4gICAgICogfVxuICAgICAqL1xuICAgIGRyZXc6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gc3VjY2VzcyB0byBjb21wcmVzcyB0aGUgaW1hZ2UuXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7RmlsZX0gZmlsZSAtIFRoZSBjb21wcmVzc2VkIGltYWdlIEZpbGUgb2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgKiAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBzdWNjZXNzOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhvb2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGZhaWwgdG8gY29tcHJlc3MgdGhlIGltYWdlLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnIgLSBBbiBFcnJvciBvYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICogICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICogfVxuICAgICAqL1xuICAgIGVycm9yOiBudWxsXG4gIH07XG5cbiAgdmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIFdJTkRPVyA9IElTX0JST1dTRVIgPyB3aW5kb3cgOiB7fTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuXG4gIHZhciBpc1Bvc2l0aXZlTnVtYmVyID0gZnVuY3Rpb24gaXNQb3NpdGl2ZU51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+IDAgJiYgdmFsdWUgPCBJbmZpbml0eTtcbiAgfTtcbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICAvKipcbiAgICogQ29udmVydCBhcnJheS1saWtlIG9yIGl0ZXJhYmxlIG9iamVjdCB0byBhbiBhcnJheS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSA/IEFycmF5LmZyb20odmFsdWUpIDogc2xpY2UuY2FsbCh2YWx1ZSk7XG4gIH1cbiAgdmFyIFJFR0VYUF9JTUFHRV9UWVBFID0gL15pbWFnZVxcLy4rJC87XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gaXMgYSBtaW1lIHR5cGUgb2YgaW1hZ2UsIGVsc2UgYGZhbHNlYC5cbiAgICovXG5cbiAgZnVuY3Rpb24gaXNJbWFnZVR5cGUodmFsdWUpIHtcbiAgICByZXR1cm4gUkVHRVhQX0lNQUdFX1RZUEUudGVzdCh2YWx1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgaW1hZ2UgdHlwZSB0byBleHRlbnNpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBpbWFnZSB0eXBlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRoZSBpbWFnZSBleHRlbnNpb24uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGltYWdlVHlwZVRvRXh0ZW5zaW9uKHZhbHVlKSB7XG4gICAgdmFyIGV4dGVuc2lvbiA9IGlzSW1hZ2VUeXBlKHZhbHVlKSA/IHZhbHVlLnN1YnN0cig2KSA6ICcnO1xuXG4gICAgaWYgKGV4dGVuc2lvbiA9PT0gJ2pwZWcnKSB7XG4gICAgICBleHRlbnNpb24gPSAnanBnJztcbiAgICB9XG5cbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KGV4dGVuc2lvbik7XG4gIH1cbiAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG4gIC8qKlxuICAgKiBHZXQgc3RyaW5nIGZyb20gY2hhciBjb2RlIGluIGRhdGEgdmlldy5cbiAgICogQHBhcmFtIHtEYXRhVmlld30gZGF0YVZpZXcgLSBUaGUgZGF0YSB2aWV3IGZvciByZWFkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgLSBUaGUgc3RhcnQgaW5kZXguXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBUaGUgcmVhZCBsZW5ndGguXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZWFkIHJlc3VsdC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBpO1xuICAgIGxlbmd0aCArPSBzdGFydDtcblxuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHN0ciArPSBmcm9tQ2hhckNvZGUoZGF0YVZpZXcuZ2V0VWludDgoaSkpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgdmFyIGJ0b2EgPSBXSU5ET1cuYnRvYTtcbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBhcnJheSBidWZmZXIgdG8gRGF0YSBVUkwuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSAtIFRoZSBtaW1lIHR5cGUgb2YgdGhlIERhdGEgVVJMLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVzdWx0IERhdGEgVVJMLlxuICAgKi9cblxuICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvRGF0YVVSTChhcnJheUJ1ZmZlciwgbWltZVR5cGUpIHtcbiAgICB2YXIgY2h1bmtzID0gW107XG4gICAgdmFyIGNodW5rU2l6ZSA9IDgxOTI7XG4gICAgdmFyIHVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXG4gICAgd2hpbGUgKHVpbnQ4Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFhYWDogQmFiZWwncyBgdG9Db25zdW1hYmxlQXJyYXlgIGhlbHBlciB3aWxsIHRocm93IGVycm9yIGluIElFIG9yIFNhZmFyaSA5XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgY2h1bmtzLnB1c2goZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHRvQXJyYXkodWludDguc3ViYXJyYXkoMCwgY2h1bmtTaXplKSkpKTtcbiAgICAgIHVpbnQ4ID0gdWludDguc3ViYXJyYXkoY2h1bmtTaXplKTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJkYXRhOlwiLmNvbmNhdChtaW1lVHlwZSwgXCI7YmFzZTY0LFwiKS5jb25jYXQoYnRvYShjaHVua3Muam9pbignJykpKTtcbiAgfVxuICAvKipcbiAgICogR2V0IG9yaWVudGF0aW9uIHZhbHVlIGZyb20gZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAgICogQHJldHVybnMge251bWJlcn0gVGhlIHJlYWQgb3JpZW50YXRpb24gdmFsdWUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgIHZhciBvcmllbnRhdGlvbjsgLy8gSWdub3JlcyByYW5nZSBlcnJvciB3aGVuIHRoZSBpbWFnZSBkb2VzIG5vdCBoYXZlIGNvcnJlY3QgRXhpZiBpbmZvcm1hdGlvblxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBsaXR0bGVFbmRpYW47XG4gICAgICB2YXIgYXBwMVN0YXJ0O1xuICAgICAgdmFyIGlmZFN0YXJ0OyAvLyBPbmx5IGhhbmRsZSBKUEVHIGltYWdlIChzdGFydCBieSAweEZGRDgpXG5cbiAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OCgwKSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OCgxKSA9PT0gMHhEOCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gZGF0YVZpZXcuYnl0ZUxlbmd0aDtcbiAgICAgICAgdmFyIG9mZnNldCA9IDI7XG5cbiAgICAgICAgd2hpbGUgKG9mZnNldCArIDEgPCBsZW5ndGgpIHtcbiAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OChvZmZzZXQgKyAxKSA9PT0gMHhFMSkge1xuICAgICAgICAgICAgYXBwMVN0YXJ0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2Zmc2V0ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFwcDFTdGFydCkge1xuICAgICAgICB2YXIgZXhpZklEQ29kZSA9IGFwcDFTdGFydCArIDQ7XG4gICAgICAgIHZhciB0aWZmT2Zmc2V0ID0gYXBwMVN0YXJ0ICsgMTA7XG5cbiAgICAgICAgaWYgKGdldFN0cmluZ0Zyb21DaGFyQ29kZShkYXRhVmlldywgZXhpZklEQ29kZSwgNCkgPT09ICdFeGlmJykge1xuICAgICAgICAgIHZhciBlbmRpYW5uZXNzID0gZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQpO1xuICAgICAgICAgIGxpdHRsZUVuZGlhbiA9IGVuZGlhbm5lc3MgPT09IDB4NDk0OTtcblxuICAgICAgICAgIGlmIChsaXR0bGVFbmRpYW4gfHwgZW5kaWFubmVzcyA9PT0gMHg0RDREXG4gICAgICAgICAgLyogYmlnRW5kaWFuICovXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCBsaXR0bGVFbmRpYW4pID09PSAweDAwMkEpIHtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgICAgICAgIGlmIChmaXJzdElGRE9mZnNldCA+PSAweDAwMDAwMDA4KSB7XG4gICAgICAgICAgICAgICAgaWZkU3RhcnQgPSB0aWZmT2Zmc2V0ICsgZmlyc3RJRkRPZmZzZXQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlmZFN0YXJ0KSB7XG4gICAgICAgIHZhciBfbGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDE2KGlmZFN0YXJ0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgIHZhciBfb2Zmc2V0O1xuXG4gICAgICAgIHZhciBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBfbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBfb2Zmc2V0ID0gaWZkU3RhcnQgKyBpICogMTIgKyAyO1xuXG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pID09PSAweDAxMTJcbiAgICAgICAgICAvKiBPcmllbnRhdGlvbiAqL1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gOCBpcyB0aGUgb2Zmc2V0IG9mIHRoZSBjdXJyZW50IHRhZydzIHZhbHVlXG4gICAgICAgICAgICBfb2Zmc2V0ICs9IDg7IC8vIEdldCB0aGUgb3JpZ2luYWwgb3JpZW50YXRpb24gdmFsdWVcblxuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBkYXRhVmlldy5nZXRVaW50MTYoX29mZnNldCwgbGl0dGxlRW5kaWFuKTsgLy8gT3ZlcnJpZGUgdGhlIG9yaWVudGF0aW9uIHdpdGggaXRzIGRlZmF1bHQgdmFsdWVcblxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KF9vZmZzZXQsIDEsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcmllbnRhdGlvbiA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBQYXJzZSBFeGlmIE9yaWVudGF0aW9uIHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gb3JpZW50YXRpb24gLSBUaGUgb3JpZW50YXRpb24gdG8gcGFyc2UuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwYXJzZWQgcmVzdWx0LlxuICAgKi9cblxuICBmdW5jdGlvbiBwYXJzZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gICAgdmFyIHJvdGF0ZSA9IDA7XG4gICAgdmFyIHNjYWxlWCA9IDE7XG4gICAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyBGbGlwIGhvcml6b250YWxcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gUm90YXRlIGxlZnQgMTgwwrBcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByb3RhdGUgPSAtMTgwO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIEZsaXAgdmVydGljYWxcblxuICAgICAgY2FzZSA0OlxuICAgICAgICBzY2FsZVkgPSAtMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBGbGlwIHZlcnRpY2FsIGFuZCByb3RhdGUgcmlnaHQgOTDCsFxuXG4gICAgICBjYXNlIDU6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBzY2FsZVkgPSAtMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBSb3RhdGUgcmlnaHQgOTDCsFxuXG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIEZsaXAgaG9yaXpvbnRhbCBhbmQgcm90YXRlIHJpZ2h0IDkwwrBcblxuICAgICAgY2FzZSA3OlxuICAgICAgICByb3RhdGUgPSA5MDtcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gUm90YXRlIGxlZnQgOTDCsFxuXG4gICAgICBjYXNlIDg6XG4gICAgICAgIHJvdGF0ZSA9IC05MDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdGF0ZTogcm90YXRlLFxuICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICBzY2FsZVk6IHNjYWxlWVxuICAgIH07XG4gIH1cbiAgdmFyIFJFR0VYUF9ERUNJTUFMUyA9IC9cXC5cXGQqKD86MHw5KXsxMn1cXGQqJC87XG4gIC8qKlxuICAgKiBOb3JtYWxpemUgZGVjaW1hbCBudW1iZXIuXG4gICAqIENoZWNrIG91dCB7QGxpbmsgaHR0cHM6Ly8wLjMwMDAwMDAwMDAwMDAwMDA0LmNvbS99XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBub3JtYWxpemUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZXM9MTAwMDAwMDAwMDAwXSAtIFRoZSB0aW1lcyBmb3Igbm9ybWFsaXppbmcuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgbnVtYmVyLlxuICAgKi9cblxuICBmdW5jdGlvbiBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIHRpbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwMDAwMDAwMDA7XG4gICAgcmV0dXJuIFJFR0VYUF9ERUNJTUFMUy50ZXN0KHZhbHVlKSA/IE1hdGgucm91bmQodmFsdWUgKiB0aW1lcykgLyB0aW1lcyA6IHZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIG1heCBzaXplcyBpbiBhIHJlY3RhbmdsZSB1bmRlciB0aGUgZ2l2ZW4gYXNwZWN0IHJhdGlvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBvcmlnaW5hbCBzaXplcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlPSdjb250YWluJ10gLSBUaGUgYWRqdXN0IHR5cGUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgc2l6ZXMuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldEFkanVzdGVkU2l6ZXMoX3JlZikge1xuICAgIHZhciBhc3BlY3RSYXRpbyA9IF9yZWYuYXNwZWN0UmF0aW8sXG4gICAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgICB3aWR0aCA9IF9yZWYud2lkdGg7XG4gICAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdub25lJztcbiAgICB2YXIgaXNWYWxpZFdpZHRoID0gaXNQb3NpdGl2ZU51bWJlcih3aWR0aCk7XG4gICAgdmFyIGlzVmFsaWRIZWlnaHQgPSBpc1Bvc2l0aXZlTnVtYmVyKGhlaWdodCk7XG5cbiAgICBpZiAoaXNWYWxpZFdpZHRoICYmIGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHZhciBhZGp1c3RlZFdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG5cbiAgICAgIGlmICgodHlwZSA9PT0gJ2NvbnRhaW4nIHx8IHR5cGUgPT09ICdub25lJykgJiYgYWRqdXN0ZWRXaWR0aCA+IHdpZHRoIHx8IHR5cGUgPT09ICdjb3ZlcicgJiYgYWRqdXN0ZWRXaWR0aCA8IHdpZHRoKSB7XG4gICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZFdpZHRoKSB7XG4gICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEhlaWdodCkge1xuICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgdmFyIEFycmF5QnVmZmVyJDEgPSBXSU5ET1cuQXJyYXlCdWZmZXIsXG4gICAgICBGaWxlUmVhZGVyID0gV0lORE9XLkZpbGVSZWFkZXI7XG4gIHZhciBVUkwgPSBXSU5ET1cuVVJMIHx8IFdJTkRPVy53ZWJraXRVUkw7XG4gIHZhciBSRUdFWFBfRVhURU5TSU9OID0gL1xcLlxcdyskLztcbiAgdmFyIEFub3RoZXJDb21wcmVzc29yID0gV0lORE9XLkNvbXByZXNzb3I7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGltYWdlIGNvbXByZXNzb3IuXG4gICAqIEBjbGFzc1xuICAgKi9cblxuICB2YXIgQ29tcHJlc3NvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIG9mIENvbXByZXNzb3IuXG4gICAgICogQHBhcmFtIHtGaWxlfEJsb2J9IGZpbGUgLSBUaGUgdGFyZ2V0IGltYWdlIGZpbGUgZm9yIGNvbXByZXNzaW5nLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucyBmb3IgY29tcHJlc3NpbmcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29tcHJlc3NvcihmaWxlLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcHJlc3Nvcik7XG5cbiAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgREVGQVVMVFMpLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuYWJvcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbXByZXNzb3IsIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGZpbGUgPSB0aGlzLmZpbGUsXG4gICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIGlmICghaXNCbG9iKGZpbGUpKSB7XG4gICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBGaWxlIG9yIEJsb2Igb2JqZWN0LicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWltZVR5cGUgPSBmaWxlLnR5cGU7XG5cbiAgICAgICAgaWYgKCFpc0ltYWdlVHlwZShtaW1lVHlwZSkpIHtcbiAgICAgICAgICB0aGlzLmZhaWwobmV3IEVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBpbWFnZSBGaWxlIG9yIEJsb2Igb2JqZWN0LicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIVVSTCB8fCAhRmlsZVJlYWRlcikge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBjdXJyZW50IGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpbWFnZSBjb21wcmVzc2lvbi4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFBcnJheUJ1ZmZlciQxKSB7XG4gICAgICAgICAgb3B0aW9ucy5jaGVja09yaWVudGF0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVVJMICYmICFvcHRpb25zLmNoZWNrT3JpZW50YXRpb24pIHtcbiAgICAgICAgICB0aGlzLmxvYWQoe1xuICAgICAgICAgICAgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgdmFyIGNoZWNrT3JpZW50YXRpb24gPSBvcHRpb25zLmNoZWNrT3JpZW50YXRpb24gJiYgbWltZVR5cGUgPT09ICdpbWFnZS9qcGVnJztcbiAgICAgICAgICB0aGlzLnJlYWRlciA9IHJlYWRlcjtcblxuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IF9yZWYudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgb3JpZW50YXRpb24gdmFsdWUgdG8gaXRzIGRlZmF1bHQgdmFsdWUgMVxuICAgICAgICAgICAgICAvLyBhcyBzb21lIGlPUyBicm93c2VycyB3aWxsIHJlbmRlciBpbWFnZSB3aXRoIGl0cyBvcmllbnRhdGlvblxuICAgICAgICAgICAgICB2YXIgb3JpZW50YXRpb24gPSByZXNldEFuZEdldE9yaWVudGF0aW9uKHJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID4gMSB8fCAhVVJMKSB7XG4gICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgVVJMIHdoaWNoIGhhcyB0aGUgZGVmYXVsdCBvcmllbnRhdGlvbiB2YWx1ZVxuICAgICAgICAgICAgICAgIGRhdGEudXJsID0gYXJyYXlCdWZmZXJUb0RhdGFVUkwocmVzdWx0LCBtaW1lVHlwZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPiAxKSB7XG4gICAgICAgICAgICAgICAgICBfZXh0ZW5kcyhkYXRhLCBwYXJzZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEudXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGF0YS51cmwgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmxvYWQoZGF0YSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZmFpbChuZXcgRXJyb3IoJ0Fib3J0ZWQgdG8gcmVhZCB0aGUgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIHJlYWQgdGhlIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWFkZXIgPSBudWxsO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibG9hZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZTtcblxuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmRyYXcoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGRhdGEpLCB7fSwge1xuICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBpbWFnZS5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiBpbWFnZS5uYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGltYWdlLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmZhaWwobmV3IEVycm9yKCdBYm9ydGVkIHRvIGxvYWQgdGhlIGltYWdlLicpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5mYWlsKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgdGhlIGltYWdlLicpKTtcbiAgICAgICAgfTsgLy8gTWF0Y2ggYWxsIGJyb3dzZXJzIHRoYXQgdXNlIFdlYktpdCBhcyB0aGUgbGF5b3V0IGVuZ2luZSBpbiBpT1MgZGV2aWNlcyxcbiAgICAgICAgLy8gc3VjaCBhcyBTYWZhcmkgZm9yIGlPUywgQ2hyb21lIGZvciBpT1MsIGFuZCBpbi1hcHAgYnJvd3NlcnMuXG5cblxuICAgICAgICBpZiAoV0lORE9XLm5hdmlnYXRvciAmJiAvKD86aVBhZHxpUGhvbmV8aVBvZCkuKj9BcHBsZVdlYktpdC9pLnRlc3QoV0lORE9XLm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgLy8gRml4IHRoZSBgVGhlIG9wZXJhdGlvbiBpcyBpbnNlY3VyZWAgZXJyb3IgKCM1NylcbiAgICAgICAgICBpbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2UuYWx0ID0gZmlsZS5uYW1lO1xuICAgICAgICBpbWFnZS5zcmMgPSBkYXRhLnVybDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZHJhd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXcoX3JlZjIpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWYyLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmMi5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgX3JlZjIkcm90YXRlID0gX3JlZjIucm90YXRlLFxuICAgICAgICAgICAgcm90YXRlID0gX3JlZjIkcm90YXRlID09PSB2b2lkIDAgPyAwIDogX3JlZjIkcm90YXRlLFxuICAgICAgICAgICAgX3JlZjIkc2NhbGVYID0gX3JlZjIuc2NhbGVYLFxuICAgICAgICAgICAgc2NhbGVYID0gX3JlZjIkc2NhbGVYID09PSB2b2lkIDAgPyAxIDogX3JlZjIkc2NhbGVYLFxuICAgICAgICAgICAgX3JlZjIkc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgICAgICAgc2NhbGVZID0gX3JlZjIkc2NhbGVZID09PSB2b2lkIDAgPyAxIDogX3JlZjIkc2NhbGVZO1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGlzOTBEZWdyZWVzUm90YXRlZCA9IE1hdGguYWJzKHJvdGF0ZSkgJSAxODAgPT09IDkwO1xuICAgICAgICB2YXIgcmVzaXphYmxlID0gKG9wdGlvbnMucmVzaXplID09PSAnY29udGFpbicgfHwgb3B0aW9ucy5yZXNpemUgPT09ICdjb3ZlcicpICYmIGlzUG9zaXRpdmVOdW1iZXIob3B0aW9ucy53aWR0aCkgJiYgaXNQb3NpdGl2ZU51bWJlcihvcHRpb25zLmhlaWdodCk7XG4gICAgICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWF4KG9wdGlvbnMubWF4V2lkdGgsIDApIHx8IEluZmluaXR5O1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5tYXhIZWlnaHQsIDApIHx8IEluZmluaXR5O1xuICAgICAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1heChvcHRpb25zLm1pbldpZHRoLCAwKSB8fCAwO1xuICAgICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5tYXgob3B0aW9ucy5taW5IZWlnaHQsIDApIHx8IDA7XG4gICAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG5hdHVyYWxXaWR0aCAvIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAgICAgICBpZiAoaXM5MERlZ3JlZXNSb3RhdGVkKSB7XG4gICAgICAgICAgdmFyIF9yZWYzID0gW21heEhlaWdodCwgbWF4V2lkdGhdO1xuICAgICAgICAgIG1heFdpZHRoID0gX3JlZjNbMF07XG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX3JlZjNbMV07XG4gICAgICAgICAgdmFyIF9yZWY0ID0gW21pbkhlaWdodCwgbWluV2lkdGhdO1xuICAgICAgICAgIG1pbldpZHRoID0gX3JlZjRbMF07XG4gICAgICAgICAgbWluSGVpZ2h0ID0gX3JlZjRbMV07XG4gICAgICAgICAgdmFyIF9yZWY1ID0gW2hlaWdodCwgd2lkdGhdO1xuICAgICAgICAgIHdpZHRoID0gX3JlZjVbMF07XG4gICAgICAgICAgaGVpZ2h0ID0gX3JlZjVbMV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzaXphYmxlKSB7XG4gICAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfSwgJ2NvbnRhaW4nKTtcblxuICAgICAgICBtYXhXaWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzLndpZHRoO1xuICAgICAgICBtYXhIZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplcy5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzMiA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWluV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgICAgICAgfSwgJ2NvdmVyJyk7XG5cbiAgICAgICAgbWluV2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczIud2lkdGg7XG4gICAgICAgIG1pbkhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzMi5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHJlc2l6YWJsZSkge1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgfSwgb3B0aW9ucy5yZXNpemUpO1xuXG4gICAgICAgICAgd2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczMud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMzLmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM0ID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzNCR3aSA9IF9nZXRBZGp1c3RlZFNpemVzNC53aWR0aDtcbiAgICAgICAgICB3aWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzNCR3aSA9PT0gdm9pZCAwID8gbmF0dXJhbFdpZHRoIDogX2dldEFkanVzdGVkU2l6ZXM0JHdpO1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczQkaGUgPSBfZ2V0QWRqdXN0ZWRTaXplczQuaGVpZ2h0O1xuICAgICAgICAgIGhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzNCRoZSA9PT0gdm9pZCAwID8gbmF0dXJhbEhlaWdodCA6IF9nZXRBZGp1c3RlZFNpemVzNCRoZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpZHRoID0gTWF0aC5mbG9vcihub3JtYWxpemVEZWNpbWFsTnVtYmVyKE1hdGgubWluKE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksIG1heFdpZHRoKSkpO1xuICAgICAgICBoZWlnaHQgPSBNYXRoLmZsb29yKG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCBtaW5IZWlnaHQpLCBtYXhIZWlnaHQpKSk7XG4gICAgICAgIHZhciBkZXN0WCA9IC13aWR0aCAvIDI7XG4gICAgICAgIHZhciBkZXN0WSA9IC1oZWlnaHQgLyAyO1xuICAgICAgICB2YXIgZGVzdFdpZHRoID0gd2lkdGg7XG4gICAgICAgIHZhciBkZXN0SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgICAgaWYgKHJlc2l6YWJsZSkge1xuICAgICAgICAgIHZhciBzcmNYID0gMDtcbiAgICAgICAgICB2YXIgc3JjWSA9IDA7XG4gICAgICAgICAgdmFyIHNyY1dpZHRoID0gbmF0dXJhbFdpZHRoO1xuICAgICAgICAgIHZhciBzcmNIZWlnaHQgPSBuYXR1cmFsSGVpZ2h0O1xuXG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzNSA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgd2lkdGg6IG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogbmF0dXJhbEhlaWdodFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNvbnRhaW46ICdjb3ZlcicsXG4gICAgICAgICAgICBjb3ZlcjogJ2NvbnRhaW4nXG4gICAgICAgICAgfVtvcHRpb25zLnJlc2l6ZV0pO1xuXG4gICAgICAgICAgc3JjV2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczUud2lkdGg7XG4gICAgICAgICAgc3JjSGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXM1LmhlaWdodDtcbiAgICAgICAgICBzcmNYID0gKG5hdHVyYWxXaWR0aCAtIHNyY1dpZHRoKSAvIDI7XG4gICAgICAgICAgc3JjWSA9IChuYXR1cmFsSGVpZ2h0IC0gc3JjSGVpZ2h0KSAvIDI7XG4gICAgICAgICAgcGFyYW1zLnB1c2goc3JjWCwgc3JjWSwgc3JjV2lkdGgsIHNyY0hlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXMucHVzaChkZXN0WCwgZGVzdFksIGRlc3RXaWR0aCwgZGVzdEhlaWdodCk7XG5cbiAgICAgICAgaWYgKGlzOTBEZWdyZWVzUm90YXRlZCkge1xuICAgICAgICAgIHZhciBfcmVmNiA9IFtoZWlnaHQsIHdpZHRoXTtcbiAgICAgICAgICB3aWR0aCA9IF9yZWY2WzBdO1xuICAgICAgICAgIGhlaWdodCA9IF9yZWY2WzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgaWYgKCFpc0ltYWdlVHlwZShvcHRpb25zLm1pbWVUeXBlKSkge1xuICAgICAgICAgIG9wdGlvbnMubWltZVR5cGUgPSBmaWxlLnR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlsbFN0eWxlID0gJ3RyYW5zcGFyZW50JzsgLy8gQ29udmVydHMgUE5HIGZpbGVzIG92ZXIgdGhlIGBjb252ZXJ0U2l6ZWAgdG8gSlBFR3MuXG5cbiAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IG9wdGlvbnMuY29udmVydFNpemUgJiYgb3B0aW9ucy5jb252ZXJ0VHlwZXMuaW5kZXhPZihvcHRpb25zLm1pbWVUeXBlKSA+PSAwKSB7XG4gICAgICAgICAgb3B0aW9ucy5taW1lVHlwZSA9ICdpbWFnZS9qcGVnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLm1pbWVUeXBlID09PSAnaW1hZ2UvanBlZycpIHtcbiAgICAgICAgICBmaWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgIH0gLy8gT3ZlcnJpZGUgdGhlIGRlZmF1bHQgZmlsbCBjb2xvciAoIzAwMCwgYmxhY2spXG5cblxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5iZWZvcmVEcmF3KSB7XG4gICAgICAgICAgb3B0aW9ucy5iZWZvcmVEcmF3LmNhbGwodGhpcywgY29udGV4dCwgY2FudmFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29udGV4dC50cmFuc2xhdGUod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICAgICAgY29udGV4dC5yb3RhdGUocm90YXRlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGNvbnRleHQuc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZS5hcHBseShjb250ZXh0LCBbaW1hZ2VdLmNvbmNhdChwYXJhbXMpKTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZHJldykge1xuICAgICAgICAgIG9wdGlvbnMuZHJldy5jYWxsKHRoaXMsIGNvbnRleHQsIGNhbnZhcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hYm9ydGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRvbmUgPSBmdW5jdGlvbiBkb25lKHJlc3VsdCkge1xuICAgICAgICAgIGlmICghX3RoaXMzLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIF90aGlzMy5kb25lKHtcbiAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoOiBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQ6IG5hdHVyYWxIZWlnaHQsXG4gICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNhbnZhcy50b0Jsb2IpIHtcbiAgICAgICAgICBjYW52YXMudG9CbG9iKGRvbmUsIG9wdGlvbnMubWltZVR5cGUsIG9wdGlvbnMucXVhbGl0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9uZSh0b0Jsb2IoY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLm1pbWVUeXBlLCBvcHRpb25zLnF1YWxpdHkpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZG9uZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvbmUoX3JlZjcpIHtcbiAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IF9yZWY3Lm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfcmVmNy5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgcmVzdWx0ID0gX3JlZjcucmVzdWx0O1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgaWYgKFVSTCAmJiAhb3B0aW9ucy5jaGVja09yaWVudGF0aW9uKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChpbWFnZS5zcmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIC8vIFJldHVybnMgb3JpZ2luYWwgZmlsZSBpZiB0aGUgcmVzdWx0IGlzIGdyZWF0ZXIgdGhhbiBpdCBhbmQgd2l0aG91dCBzaXplIHJlbGF0ZWQgb3B0aW9uc1xuICAgICAgICAgIGlmIChvcHRpb25zLnN0cmljdCAmJiByZXN1bHQuc2l6ZSA+IGZpbGUuc2l6ZSAmJiBvcHRpb25zLm1pbWVUeXBlID09PSBmaWxlLnR5cGUgJiYgIShvcHRpb25zLndpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMuaGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1pbldpZHRoID4gbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWluSGVpZ2h0ID4gbmF0dXJhbEhlaWdodCB8fCBvcHRpb25zLm1heFdpZHRoIDwgbmF0dXJhbFdpZHRoIHx8IG9wdGlvbnMubWF4SGVpZ2h0IDwgbmF0dXJhbEhlaWdodCkpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZpbGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5sYXN0TW9kaWZpZWQgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5sYXN0TW9kaWZpZWREYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIHJlc3VsdC5uYW1lID0gZmlsZS5uYW1lOyAvLyBDb252ZXJ0IHRoZSBleHRlbnNpb24gdG8gbWF0Y2ggaXRzIHR5cGVcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5uYW1lICYmIHJlc3VsdC50eXBlICE9PSBmaWxlLnR5cGUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZS5yZXBsYWNlKFJFR0VYUF9FWFRFTlNJT04sIGltYWdlVHlwZVRvRXh0ZW5zaW9uKHJlc3VsdC50eXBlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJldHVybnMgb3JpZ2luYWwgZmlsZSBpZiB0aGUgcmVzdWx0IGlzIG51bGwgaW4gc29tZSBjYXNlcy5cbiAgICAgICAgICByZXN1bHQgPSBmaWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICAgIG9wdGlvbnMuc3VjY2Vzcy5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZmFpbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZhaWwoZXJyKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgICAgb3B0aW9ucy5lcnJvci5jYWxsKHRoaXMsIGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFib3J0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5hYm9ydGVkKSB7XG4gICAgICAgICAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmICh0aGlzLnJlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5yZWFkZXIuYWJvcnQoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmltYWdlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmltYWdlLm9uYWJvcnQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGNvbXByZXNzaW9uIHByb2Nlc3MgaGFzIGJlZW4gYWJvcnRlZC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEdldCB0aGUgbm8gY29uZmxpY3QgY29tcHJlc3NvciBjbGFzcy5cbiAgICAgICAqIEByZXR1cm5zIHtDb21wcmVzc29yfSBUaGUgY29tcHJlc3NvciBjbGFzcy5cbiAgICAgICAqL1xuXG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwibm9Db25mbGljdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHdpbmRvdy5Db21wcmVzc29yID0gQW5vdGhlckNvbXByZXNzb3I7XG4gICAgICAgIHJldHVybiBDb21wcmVzc29yO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBDaGFuZ2UgdGhlIGRlZmF1bHQgb3B0aW9ucy5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVGhlIG5ldyBkZWZhdWx0IG9wdGlvbnMuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXREZWZhdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlZmF1bHRzKG9wdGlvbnMpIHtcbiAgICAgICAgX2V4dGVuZHMoREVGQVVMVFMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb21wcmVzc29yO1xuICB9KCk7XG5cbiAgcmV0dXJuIENvbXByZXNzb3I7XG5cbn0pKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xuXG52YXIgTm90eWZOb3RpZmljYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOb3R5Zk5vdGlmaWNhdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xyXG4gICAgfVxyXG4gICAgTm90eWZOb3RpZmljYXRpb24ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50VHlwZSwgY2IpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXSB8fCBbXTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdID0gY2FsbGJhY2tzLmNvbmNhdChbY2JdKTtcclxuICAgIH07XHJcbiAgICBOb3R5Zk5vdGlmaWNhdGlvbi5wcm90b3R5cGUudHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50VHlwZSwgZXZlbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdIHx8IFtdO1xyXG4gICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyByZXR1cm4gY2IoeyB0YXJnZXQ6IF90aGlzLCBldmVudDogZXZlbnQgfSk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBOb3R5Zk5vdGlmaWNhdGlvbjtcclxufSgpKTtcclxudmFyIE5vdHlmQXJyYXlFdmVudDtcclxuKGZ1bmN0aW9uIChOb3R5ZkFycmF5RXZlbnQpIHtcclxuICAgIE5vdHlmQXJyYXlFdmVudFtOb3R5ZkFycmF5RXZlbnRbXCJBZGRcIl0gPSAwXSA9IFwiQWRkXCI7XHJcbiAgICBOb3R5ZkFycmF5RXZlbnRbTm90eWZBcnJheUV2ZW50W1wiUmVtb3ZlXCJdID0gMV0gPSBcIlJlbW92ZVwiO1xyXG59KShOb3R5ZkFycmF5RXZlbnQgfHwgKE5vdHlmQXJyYXlFdmVudCA9IHt9KSk7XHJcbnZhciBOb3R5ZkFycmF5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTm90eWZBcnJheSgpIHtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBbXTtcclxuICAgIH1cclxuICAgIE5vdHlmQXJyYXkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5wdXNoKGVsZW0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm4oZWxlbSwgTm90eWZBcnJheUV2ZW50LkFkZCwgdGhpcy5ub3RpZmljYXRpb25zKTtcclxuICAgIH07XHJcbiAgICBOb3R5ZkFycmF5LnByb3RvdHlwZS5zcGxpY2UgPSBmdW5jdGlvbiAoaW5kZXgsIG51bSkge1xyXG4gICAgICAgIHZhciBlbGVtID0gdGhpcy5ub3RpZmljYXRpb25zLnNwbGljZShpbmRleCwgbnVtKVswXTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZuKGVsZW0sIE5vdHlmQXJyYXlFdmVudC5SZW1vdmUsIHRoaXMubm90aWZpY2F0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW07XHJcbiAgICB9O1xyXG4gICAgTm90eWZBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9ucy5pbmRleE9mKGVsZW0pO1xyXG4gICAgfTtcclxuICAgIE5vdHlmQXJyYXkucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGbiA9IGZuO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBOb3R5ZkFycmF5O1xyXG59KCkpO1xuXG52YXIgTm90eWZFdmVudDtcclxuKGZ1bmN0aW9uIChOb3R5ZkV2ZW50KSB7XHJcbiAgICBOb3R5ZkV2ZW50W1wiRGlzbWlzc1wiXSA9IFwiZGlzbWlzc1wiO1xyXG4gICAgTm90eWZFdmVudFtcIkNsaWNrXCJdID0gXCJjbGlja1wiO1xyXG59KShOb3R5ZkV2ZW50IHx8IChOb3R5ZkV2ZW50ID0ge30pKTtcclxudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcclxuICAgIHR5cGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25vdHlmX190b2FzdC0tc3VjY2VzcycsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzZGM3NjMnLFxyXG4gICAgICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdub3R5Zl9faWNvbi0tc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0YWdOYW1lOiAnaScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25vdHlmX190b2FzdC0tZXJyb3InLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWQzZDNkJyxcclxuICAgICAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbm90eWZfX2ljb24tLWVycm9yJyxcclxuICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgcmlwcGxlOiB0cnVlLFxyXG4gICAgcG9zaXRpb246IHtcclxuICAgICAgICB4OiAncmlnaHQnLFxyXG4gICAgICAgIHk6ICdib3R0b20nLFxyXG4gICAgfSxcclxuICAgIGRpc21pc3NpYmxlOiBmYWxzZSxcclxufTtcblxudmFyIE5vdHlmVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5vdHlmVmlldygpIHtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuWF9QT1NJVElPTl9GTEVYX01BUCA9IHtcclxuICAgICAgICAgICAgbGVmdDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgICAgICBjZW50ZXI6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICByaWdodDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuWV9QT1NJVElPTl9GTEVYX01BUCA9IHtcclxuICAgICAgICAgICAgdG9wOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgICAgIGNlbnRlcjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJ2ZsZXgtZW5kJyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIENyZWF0ZXMgdGhlIG1haW4gbm90aWZpY2F0aW9ucyBjb250YWluZXJcclxuICAgICAgICB2YXIgZG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICB2YXIgbm90eWZDb250YWluZXIgPSB0aGlzLl9jcmVhdGVIVE1MRWxlbWVudCh7IHRhZ05hbWU6ICdkaXYnLCBjbGFzc05hbWU6ICdub3R5ZicgfSk7XHJcbiAgICAgICAgZG9jRnJhZy5hcHBlbmRDaGlsZChub3R5ZkNvbnRhaW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2NGcmFnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5vdHlmQ29udGFpbmVyO1xyXG4gICAgICAgIC8vIElkZW50aWZpZXMgdGhlIG1haW4gYW5pbWF0aW9uIGVuZCBldmVudFxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kRXZlbnROYW1lID0gdGhpcy5fZ2V0QW5pbWF0aW9uRW5kRXZlbnROYW1lKCk7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlQTExeUNvbnRhaW5lcigpO1xyXG4gICAgfVxyXG4gICAgTm90eWZWaWV3LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudCwgY2IpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5ldmVudHMpLCAoX2EgPSB7fSwgX2FbZXZlbnRdID0gY2IsIF9hKSk7XHJcbiAgICB9O1xyXG4gICAgTm90eWZWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uLCB0eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IE5vdHlmQXJyYXlFdmVudC5BZGQpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gTm90eWZBcnJheUV2ZW50LlJlbW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBOb3R5ZlZpZXcucHJvdG90eXBlLnJlbW92ZU5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciByZW5kZXJlZE5vdGlmaWNhdGlvbiA9IHRoaXMuX3BvcFJlbmRlcmVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgdmFyIG5vZGU7XHJcbiAgICAgICAgaWYgKCFyZW5kZXJlZE5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUgPSByZW5kZXJlZE5vdGlmaWNhdGlvbi5ub2RlO1xyXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnbm90eWZfX3RvYXN0LS1kaXNhcHBlYXInKTtcclxuICAgICAgICB2YXIgaGFuZGxlRXZlbnQ7XHJcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKHRoaXMuYW5pbWF0aW9uRW5kRXZlbnROYW1lLCAoaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKF90aGlzLmFuaW1hdGlvbkVuZEV2ZW50TmFtZSwgaGFuZGxlRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxuICAgIE5vdHlmVmlldy5wcm90b3R5cGUuYWRkTm90aWZpY2F0aW9uID0gZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5fcmVuZGVyTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLnB1c2goeyBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvbiwgbm9kZTogbm9kZSB9KTtcclxuICAgICAgICAvLyBGb3IgYTExeSBwdXJwb3Nlcywgd2Ugc3RpbGwgd2FudCB0byBhbm5vdW5jZSB0aGF0IHRoZXJlJ3MgYSBub3RpZmljYXRpb24gaW4gdGhlIHNjcmVlblxyXG4gICAgICAgIC8vIGV2ZW4gaWYgaXQgY29tZXMgd2l0aCBubyBtZXNzYWdlLlxyXG4gICAgICAgIHRoaXMuX2Fubm91bmNlKG5vdGlmaWNhdGlvbi5vcHRpb25zLm1lc3NhZ2UgfHwgJ05vdGlmaWNhdGlvbicpO1xyXG4gICAgfTtcclxuICAgIE5vdHlmVmlldy5wcm90b3R5cGUuX3JlbmRlck5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdmFyIGNhcmQgPSB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbkNhcmQobm90aWZpY2F0aW9uKTtcclxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gbm90aWZpY2F0aW9uLm9wdGlvbnMuY2xhc3NOYW1lO1xyXG4gICAgICAgIGlmIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgKF9hID0gY2FyZC5jbGFzc0xpc3QpLmFkZC5hcHBseShfYSwgY2xhc3NOYW1lLnNwbGl0KCcgJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICByZXR1cm4gY2FyZDtcclxuICAgIH07XHJcbiAgICBOb3R5ZlZpZXcucHJvdG90eXBlLl9wb3BSZW5kZXJlZE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcclxuICAgICAgICB2YXIgaWR4ID0gLTE7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoICYmIGlkeCA8IDA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25zW2ldLm5vdGlmaWNhdGlvbiA9PT0gbm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZHggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbnMuc3BsaWNlKGlkeCwgMSlbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICBOb3R5ZlZpZXcucHJvdG90eXBlLmdldFhQb3NpdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnBvc2l0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EueCkgfHwgJ3JpZ2h0JztcclxuICAgIH07XHJcbiAgICBOb3R5ZlZpZXcucHJvdG90eXBlLmdldFlQb3NpdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnBvc2l0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EueSkgfHwgJ2JvdHRvbSc7XHJcbiAgICB9O1xyXG4gICAgTm90eWZWaWV3LnByb3RvdHlwZS5hZGp1c3RDb250YWluZXJBbGlnbm1lbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBhbGlnbiA9IHRoaXMuWF9QT1NJVElPTl9GTEVYX01BUFt0aGlzLmdldFhQb3NpdGlvbihvcHRpb25zKV07XHJcbiAgICAgICAgdmFyIGp1c3RpZnkgPSB0aGlzLllfUE9TSVRJT05fRkxFWF9NQVBbdGhpcy5nZXRZUG9zaXRpb24ob3B0aW9ucyldO1xyXG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMuY29udGFpbmVyLnN0eWxlO1xyXG4gICAgICAgIHN0eWxlLnNldFByb3BlcnR5KCdqdXN0aWZ5LWNvbnRlbnQnLCBqdXN0aWZ5KTtcclxuICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eSgnYWxpZ24taXRlbXMnLCBhbGlnbik7XHJcbiAgICB9O1xyXG4gICAgTm90eWZWaWV3LnByb3RvdHlwZS5fYnVpbGROb3RpZmljYXRpb25DYXJkID0gZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBub3RpZmljYXRpb24ub3B0aW9ucztcclxuICAgICAgICB2YXIgaWNvbk9wdHMgPSBvcHRpb25zLmljb247XHJcbiAgICAgICAgLy8gQWRqdXN0IGNvbnRhaW5lciBhY2NvcmRpbmcgdG8gcG9zaXRpb24gKGUuZy4gdG9wLWxlZnQsIGJvdHRvbS1jZW50ZXIsIGV0YylcclxuICAgICAgICB0aGlzLmFkanVzdENvbnRhaW5lckFsaWdubWVudChvcHRpb25zKTtcclxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudHNcclxuICAgICAgICB2YXIgbm90aWZpY2F0aW9uRWxlbSA9IHRoaXMuX2NyZWF0ZUhUTUxFbGVtZW50KHsgdGFnTmFtZTogJ2RpdicsIGNsYXNzTmFtZTogJ25vdHlmX190b2FzdCcgfSk7XHJcbiAgICAgICAgdmFyIHJpcHBsZSA9IHRoaXMuX2NyZWF0ZUhUTUxFbGVtZW50KHsgdGFnTmFtZTogJ2RpdicsIGNsYXNzTmFtZTogJ25vdHlmX19yaXBwbGUnIH0pO1xyXG4gICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5fY3JlYXRlSFRNTEVsZW1lbnQoeyB0YWdOYW1lOiAnZGl2JywgY2xhc3NOYW1lOiAnbm90eWZfX3dyYXBwZXInIH0pO1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5fY3JlYXRlSFRNTEVsZW1lbnQoeyB0YWdOYW1lOiAnZGl2JywgY2xhc3NOYW1lOiAnbm90eWZfX21lc3NhZ2UnIH0pO1xyXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gb3B0aW9ucy5tZXNzYWdlIHx8ICcnO1xyXG4gICAgICAgIHZhciBtYWluQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmQgfHwgb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgLy8gQnVpbGQgdGhlIGljb24gYW5kIGFwcGVuZCBpdCB0byB0aGUgY2FyZFxyXG4gICAgICAgIGlmIChpY29uT3B0cykge1xyXG4gICAgICAgICAgICB2YXIgaWNvbkNvbnRhaW5lciA9IHRoaXMuX2NyZWF0ZUhUTUxFbGVtZW50KHsgdGFnTmFtZTogJ2RpdicsIGNsYXNzTmFtZTogJ25vdHlmX19pY29uJyB9KTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpY29uT3B0cyA9PT0gJ3N0cmluZycgfHwgaWNvbk9wdHMgaW5zdGFuY2VvZiBTdHJpbmcpXHJcbiAgICAgICAgICAgICAgICBpY29uQ29udGFpbmVyLmlubmVySFRNTCA9IG5ldyBTdHJpbmcoaWNvbk9wdHMpLnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpY29uT3B0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IGljb25PcHRzLnRhZ05hbWUsIHRhZ05hbWUgPSBfYSA9PT0gdm9pZCAwID8gJ2knIDogX2EsIGNsYXNzTmFtZV8xID0gaWNvbk9wdHMuY2xhc3NOYW1lLCB0ZXh0ID0gaWNvbk9wdHMudGV4dCwgX2IgPSBpY29uT3B0cy5jb2xvciwgY29sb3IgPSBfYiA9PT0gdm9pZCAwID8gbWFpbkNvbG9yIDogX2I7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWNvbkVsZW1lbnQgPSB0aGlzLl9jcmVhdGVIVE1MRWxlbWVudCh7IHRhZ05hbWU6IHRhZ05hbWUsIGNsYXNzTmFtZTogY2xhc3NOYW1lXzEsIHRleHQ6IHRleHQgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbkVsZW1lbnQuc3R5bGUuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uRWxlbS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgICAgICAvLyBBZGQgcmlwcGxlIGlmIGFwcGxpY2FibGUsIGVsc2UganVzdCBwYWludCB0aGUgZnVsbCB0b2FzdFxyXG4gICAgICAgIGlmIChtYWluQ29sb3IpIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucmlwcGxlKSB7XHJcbiAgICAgICAgICAgICAgICByaXBwbGUuc3R5bGUuYmFja2dyb3VuZCA9IG1haW5Db2xvcjtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkVsZW0uYXBwZW5kQ2hpbGQocmlwcGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkVsZW0uc3R5bGUuYmFja2dyb3VuZCA9IG1haW5Db2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgZGlzbWlzcyBidXR0b25cclxuICAgICAgICBpZiAob3B0aW9ucy5kaXNtaXNzaWJsZSkge1xyXG4gICAgICAgICAgICB2YXIgZGlzbWlzc1dyYXBwZXIgPSB0aGlzLl9jcmVhdGVIVE1MRWxlbWVudCh7IHRhZ05hbWU6ICdkaXYnLCBjbGFzc05hbWU6ICdub3R5Zl9fZGlzbWlzcycgfSk7XHJcbiAgICAgICAgICAgIHZhciBkaXNtaXNzQnV0dG9uID0gdGhpcy5fY3JlYXRlSFRNTEVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgdGFnTmFtZTogJ2J1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdub3R5Zl9fZGlzbWlzcy1idG4nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzbWlzc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZGlzbWlzc0J1dHRvbik7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGlzbWlzc1dyYXBwZXIpO1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb25FbGVtLmNsYXNzTGlzdC5hZGQoXCJub3R5Zl9fdG9hc3QtLWRpc21pc3NpYmxlXCIpO1xyXG4gICAgICAgICAgICBkaXNtaXNzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMuZXZlbnRzKVtOb3R5ZkV2ZW50LkRpc21pc3NdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgeyB0YXJnZXQ6IG5vdGlmaWNhdGlvbiwgZXZlbnQ6IGV2ZW50IH0pO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub3RpZmljYXRpb25FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7IHZhciBfYSwgX2I7IHJldHVybiAoX2IgPSAoX2EgPSBfdGhpcy5ldmVudHMpW05vdHlmRXZlbnQuQ2xpY2tdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgeyB0YXJnZXQ6IG5vdGlmaWNhdGlvbiwgZXZlbnQ6IGV2ZW50IH0pOyB9KTtcclxuICAgICAgICAvLyBBZGp1c3QgbWFyZ2lucyBkZXBlbmRpbmcgb24gd2hldGhlciBpdHMgYW4gdXBwZXIgb3IgbG93ZXIgbm90aWZpY2F0aW9uXHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuZ2V0WVBvc2l0aW9uKG9wdGlvbnMpID09PSAndG9wJyA/ICd1cHBlcicgOiAnbG93ZXInO1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbkVsZW0uY2xhc3NMaXN0LmFkZChcIm5vdHlmX190b2FzdC0tXCIgKyBjbGFzc05hbWUpO1xyXG4gICAgICAgIHJldHVybiBub3RpZmljYXRpb25FbGVtO1xyXG4gICAgfTtcclxuICAgIE5vdHlmVmlldy5wcm90b3R5cGUuX2NyZWF0ZUhUTUxFbGVtZW50ID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIHRhZ05hbWUgPSBfYS50YWdOYW1lLCBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHRleHQgPSBfYS50ZXh0O1xyXG4gICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtLnRleHRDb250ZW50ID0gdGV4dCB8fCBudWxsO1xyXG4gICAgICAgIHJldHVybiBlbGVtO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnZpc2libGUgY29udGFpbmVyIHdoaWNoIHdpbGwgYW5ub3VuY2UgdGhlIG5vdHlmcyB0b1xyXG4gICAgICogc2NyZWVuIHJlYWRlcnNcclxuICAgICAqL1xyXG4gICAgTm90eWZWaWV3LnByb3RvdHlwZS5fY3JlYXRlQTExeUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYTExeUNvbnRhaW5lciA9IHRoaXMuX2NyZWF0ZUhUTUxFbGVtZW50KHsgdGFnTmFtZTogJ2RpdicsIGNsYXNzTmFtZTogJ25vdHlmLWFubm91bmNlcicgfSk7XHJcbiAgICAgICAgYTExeUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtYXRvbWljJywgJ3RydWUnKTtcclxuICAgICAgICBhMTF5Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xyXG4gICAgICAgIC8vIFNldCB0aGUgYTExeSBjb250YWluZXIgdG8gYmUgdmlzaWJsZSBoaWRkZW4uIENhbid0IHVzZSBkaXNwbGF5OiBub25lIGFzXHJcbiAgICAgICAgLy8gc2NyZWVuIHJlYWRlcnMgd29uJ3QgcmVhZCBpdC5cclxuICAgICAgICBhMTF5Q29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICcwJztcclxuICAgICAgICBhMTF5Q29udGFpbmVyLnN0eWxlLmNsaXAgPSAncmVjdCgwIDAgMCAwKSc7XHJcbiAgICAgICAgYTExeUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMXB4JztcclxuICAgICAgICBhMTF5Q29udGFpbmVyLnN0eWxlLm1hcmdpbiA9ICctMXB4JztcclxuICAgICAgICBhMTF5Q29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgYTExeUNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzAnO1xyXG4gICAgICAgIGExMXlDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIGExMXlDb250YWluZXIuc3R5bGUud2lkdGggPSAnMXB4JztcclxuICAgICAgICBhMTF5Q29udGFpbmVyLnN0eWxlLm91dGxpbmUgPSAnMCc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhMTF5Q29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmExMXlDb250YWluZXIgPSBhMTF5Q29udGFpbmVyO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQW5ub3VuY2VzIGEgbWVzc2FnZSB0byBzY3JlZW5yZWFkZXJzLlxyXG4gICAgICovXHJcbiAgICBOb3R5ZlZpZXcucHJvdG90eXBlLl9hbm5vdW5jZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmExMXlDb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAvLyBUaGlzIDEwMG1zIHRpbWVvdXQgaXMgbmVjZXNzYXJ5IGZvciBzb21lIGJyb3dzZXIgKyBzY3JlZW4tcmVhZGVyIGNvbWJpbmF0aW9uczpcclxuICAgICAgICAvLyAtIEJvdGggSkFXUyBhbmQgTlZEQSBvdmVyIElFMTEgd2lsbCBub3QgYW5ub3VuY2UgYW55dGhpbmcgd2l0aG91dCBhIG5vbi16ZXJvIHRpbWVvdXQuXHJcbiAgICAgICAgLy8gLSBXaXRoIENocm9tZSBhbmQgSUUxMSB3aXRoIE5WREEgb3IgSkFXUywgYSByZXBlYXRlZCAoaWRlbnRpY2FsKSBtZXNzYWdlIHdvbid0IGJlIHJlYWQgYVxyXG4gICAgICAgIC8vICAgc2Vjb25kIHRpbWUgd2l0aG91dCBjbGVhcmluZyBhbmQgdGhlbiB1c2luZyBhIG5vbi16ZXJvIGRlbGF5LlxyXG4gICAgICAgIC8vICh1c2luZyBKQVdTIDE3IGF0IHRpbWUgb2YgdGhpcyB3cml0aW5nKS5cclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvYmxvYi9tYXN0ZXIvc3JjL2Nkay9hMTF5L2xpdmUtYW5ub3VuY2VyL2xpdmUtYW5ub3VuY2VyLnRzXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmExMXlDb250YWluZXIudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgd2hpY2ggYW5pbWF0aW9uZW5kIGV2ZW50IGlzIHN1cHBvcnRlZFxyXG4gICAgICovXHJcbiAgICBOb3R5ZlZpZXcucHJvdG90eXBlLl9nZXRBbmltYXRpb25FbmRFdmVudE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnX2Zha2UnKTtcclxuICAgICAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIE1velRyYW5zaXRpb246ICdhbmltYXRpb25lbmQnLFxyXG4gICAgICAgICAgICBPVHJhbnNpdGlvbjogJ29BbmltYXRpb25FbmQnLFxyXG4gICAgICAgICAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FuaW1hdGlvbmVuZCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdDtcclxuICAgICAgICBmb3IgKHQgaW4gdHJhbnNpdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBObyBzdXBwb3J0ZWQgYW5pbWF0aW9uIGVuZCBldmVudC4gVXNpbmcgXCJhbmltYXRpb25lbmRcIiBhcyBhIGZhbGxiYWNrXHJcbiAgICAgICAgcmV0dXJuICdhbmltYXRpb25lbmQnO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBOb3R5ZlZpZXc7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBNYWluIGNvbnRyb2xsZXIgY2xhc3MuIERlZmluZXMgdGhlIG1haW4gTm90eWYgQVBJLlxyXG4gKi9cclxudmFyIE5vdHlmID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTm90eWYob3B0cykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5kaXNtaXNzID0gdGhpcy5fcmVtb3ZlTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IG5ldyBOb3R5ZkFycmF5KCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IE5vdHlmVmlldygpO1xyXG4gICAgICAgIHZhciB0eXBlcyA9IHRoaXMucmVnaXN0ZXJUeXBlcyhvcHRzKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TKSwgb3B0cyk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnR5cGVzID0gdHlwZXM7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zLm9uVXBkYXRlKGZ1bmN0aW9uIChlbGVtLCB0eXBlKSB7IHJldHVybiBfdGhpcy52aWV3LnVwZGF0ZShlbGVtLCB0eXBlKTsgfSk7XHJcbiAgICAgICAgdGhpcy52aWV3Lm9uKE5vdHlmRXZlbnQuRGlzbWlzcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfYS50YXJnZXQsIGV2ZW50ID0gX2EuZXZlbnQ7XHJcbiAgICAgICAgICAgIF90aGlzLl9yZW1vdmVOb3RpZmljYXRpb24odGFyZ2V0KTtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxyXG4gICAgICAgICAgICB0YXJnZXRbJ3RyaWdnZXJFdmVudCddKE5vdHlmRXZlbnQuRGlzbWlzcywgZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcclxuICAgICAgICB0aGlzLnZpZXcub24oTm90eWZFdmVudC5DbGljaywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfYS50YXJnZXQsIGV2ZW50ID0gX2EuZXZlbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbJ3RyaWdnZXJFdmVudCddKE5vdHlmRXZlbnQuQ2xpY2ssIGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIE5vdHlmLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm5vcm1hbGl6ZU9wdGlvbnMoJ2Vycm9yJywgcGF5bG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbihvcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBOb3R5Zi5wcm90b3R5cGUuc3VjY2VzcyA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm5vcm1hbGl6ZU9wdGlvbnMoJ3N1Y2Nlc3MnLCBwYXlsb2FkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcGVuKG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIE5vdHlmLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZGVmYXVsdE9wdHMgPSB0aGlzLm9wdGlvbnMudHlwZXMuZmluZChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSBfYS50eXBlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gb3B0aW9ucy50eXBlO1xyXG4gICAgICAgIH0pIHx8IHt9O1xyXG4gICAgICAgIHZhciBjb25maWcgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdE9wdHMpLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmFzc2lnblByb3BzKFsncmlwcGxlJywgJ3Bvc2l0aW9uJywgJ2Rpc21pc3NpYmxlJ10sIGNvbmZpZyk7XHJcbiAgICAgICAgdmFyIG5vdGlmaWNhdGlvbiA9IG5ldyBOb3R5Zk5vdGlmaWNhdGlvbihjb25maWcpO1xyXG4gICAgICAgIHRoaXMuX3B1c2hOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcclxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xyXG4gICAgfTtcclxuICAgIE5vdHlmLnByb3RvdHlwZS5kaXNtaXNzQWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdoaWxlICh0aGlzLm5vdGlmaWNhdGlvbnMuc3BsaWNlKDAsIDEpKVxyXG4gICAgICAgICAgICA7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBBc3NpZ25zIHByb3BlcnRpZXMgdG8gYSBjb25maWcgb2JqZWN0IGJhc2VkIG9uIHR3byBydWxlczpcclxuICAgICAqIDEuIElmIHRoZSBjb25maWcgb2JqZWN0IGFscmVhZHkgc2V0cyB0aGF0IHByb3AsIGxlYXZlIGl0IGFzIHNvXHJcbiAgICAgKiAyLiBPdGhlcndpc2UsIHVzZSB0aGUgZGVmYXVsdCBwcm9wIGZyb20gdGhlIGdsb2JhbCBvcHRpb25zXHJcbiAgICAgKlxyXG4gICAgICogSXQncyBpbnRlbmRlZCB0byBidWlsZCB0aGUgZmluYWwgY29uZmlnIG9iamVjdCB0byBvcGVuIGEgbm90aWZpY2F0aW9uLiBlLmcuIGlmXHJcbiAgICAgKiAnZGlzbWlzc2libGUnIGlzIG5vdCBzZXQsIHRoZW4gdXNlIHRoZSB2YWx1ZSBmcm9tIHRoZSBnbG9iYWwgY29uZmlnLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHByb3BlcnRpZXMgdG8gYmUgYXNzaWduZWQgdG8gdGhlIGNvbmZpZyBvYmplY3RcclxuICAgICAqIEBwYXJhbSBjb25maWcgLSBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBuZWVkIHRvIGJlIHNldFxyXG4gICAgICovXHJcbiAgICBOb3R5Zi5wcm90b3R5cGUuYXNzaWduUHJvcHMgPSBmdW5jdGlvbiAocHJvcHMsIGNvbmZpZykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgICAvLyBpbnRlbnRpb25hbCBkb3VibGUgZXF1YWxpdHkgdG8gY2hlY2sgZm9yIGJvdGggbnVsbCBhbmQgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZ1twcm9wXSA9PSBudWxsID8gX3RoaXMub3B0aW9uc1twcm9wXSA6IGNvbmZpZ1twcm9wXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBOb3R5Zi5wcm90b3R5cGUuX3B1c2hOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMucHVzaChub3RpZmljYXRpb24pO1xyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IG5vdGlmaWNhdGlvbi5vcHRpb25zLmR1cmF0aW9uICE9PSB1bmRlZmluZWQgPyBub3RpZmljYXRpb24ub3B0aW9ucy5kdXJhdGlvbiA6IHRoaXMub3B0aW9ucy5kdXJhdGlvbjtcclxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fcmVtb3ZlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7IH0sIGR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTm90eWYucHJvdG90eXBlLl9yZW1vdmVOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5ub3RpZmljYXRpb25zLmluZGV4T2Yobm90aWZpY2F0aW9uKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBOb3R5Zi5wcm90b3R5cGUubm9ybWFsaXplT3B0aW9ucyA9IGZ1bmN0aW9uICh0eXBlLCBwYXlsb2FkKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHR5cGU6IHR5cGUgfTtcclxuICAgICAgICBpZiAodHlwZW9mIHBheWxvYWQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubWVzc2FnZSA9IHBheWxvYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCBwYXlsb2FkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9O1xyXG4gICAgTm90eWYucHJvdG90eXBlLnJlZ2lzdGVyVHlwZXMgPSBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgICAgIHZhciBpbmNvbWluZ1R5cGVzID0gKChvcHRzICYmIG9wdHMudHlwZXMpIHx8IFtdKS5zbGljZSgpO1xyXG4gICAgICAgIHZhciBmaW5hbERlZmF1bHRUeXBlcyA9IERFRkFVTFRfT1BUSU9OUy50eXBlcy5tYXAoZnVuY3Rpb24gKGRlZmF1bHRUeXBlKSB7XHJcbiAgICAgICAgICAgIC8vIGZpbmQgaWYgdGhlcmUncyBhIGRlZmF1bHQgdHlwZSB3aXRoaW4gdGhlIHVzZXIgaW5wdXQncyB0eXBlcywgaWYgc28sIGl0IG1lYW5zIHRoZSB1c2VyXHJcbiAgICAgICAgICAgIC8vIHdhbnRzIHRvIGNoYW5nZSBzb21lIG9mIHRoZSBkZWZhdWx0IHNldHRpbmdzXHJcbiAgICAgICAgICAgIHZhciB1c2VyVHlwZUlkeCA9IC0xO1xyXG4gICAgICAgICAgICBpbmNvbWluZ1R5cGVzLmZvckVhY2goZnVuY3Rpb24gKHQsIGlkeCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQudHlwZSA9PT0gZGVmYXVsdFR5cGUudHlwZSlcclxuICAgICAgICAgICAgICAgICAgICB1c2VyVHlwZUlkeCA9IGlkeDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciB1c2VyVHlwZSA9IHVzZXJUeXBlSWR4ICE9PSAtMSA/IGluY29taW5nVHlwZXMuc3BsaWNlKHVzZXJUeXBlSWR4LCAxKVswXSA6IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRUeXBlKSwgdXNlclR5cGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmaW5hbERlZmF1bHRUeXBlcy5jb25jYXQoaW5jb21pbmdUeXBlcyk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5vdHlmO1xyXG59KCkpO1xuXG5leHBvcnQgeyBERUZBVUxUX09QVElPTlMsIE5vdHlmLCBOb3R5ZkFycmF5LCBOb3R5ZkFycmF5RXZlbnQsIE5vdHlmRXZlbnQsIE5vdHlmTm90aWZpY2F0aW9uLCBOb3R5ZlZpZXcgfTtcbiIsImltcG9ydCB7IE5vdHlmIH0gZnJvbSBcIm5vdHlmXCI7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSBcIi4vdXRpbHNcIjtcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90aWZpY2F0aW9uXCIpO1xuICBpZiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQuZGF0YXNldC5ub3RpY2UpO1xuICAgIGlmICghaXNFbXB0eShqc29uKSkge1xuICAgICAgY29uc3Qgbm90eWYgPSBuZXcgTm90eWYoeyBkdXJhdGlvbjogNTAwMCB9KTtcbiAgICAgIE9iamVjdC5rZXlzKGpzb24pLm1hcChrZXkgPT4ge1xuICAgICAgICBqc29uW2tleV0ubWFwKG5vdGljZSA9PiB7XG4gICAgICAgICAgaWYgKFtcImFsZXJ0XCIsIFwiZXJyb3JcIl0uaW5jbHVkZXMoa2V5KSkgbm90eWYuZXJyb3Iobm90aWNlLm1lc3NhZ2UpO1xuICAgICAgICAgIGlmIChbXCJzdWNjZXNzXCIsIFwiaW5mb1wiXS5pbmNsdWRlcyhrZXkpKSBub3R5Zi5zdWNjZXNzKG5vdGljZS5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgQ29tcHJlc3NvciBmcm9tIFwiY29tcHJlc3NvcmpzXCI7XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gb2JqID0+XG4gIFtPYmplY3QsIEFycmF5XS5pbmNsdWRlcygob2JqIHx8IHt9KS5jb25zdHJ1Y3RvcikgJiZcbiAgIU9iamVjdC5lbnRyaWVzKG9iaiB8fCB7fSkubGVuZ3RoO1xuZXhwb3J0IGNvbnN0IGJhc2U2NFRvQmxvYiA9IHVybCA9PiB7XG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5ibG9iKCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNzcmZUb2tlbiA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgcmV0dXJuIFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG4gICAgdmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICB2ID0gYyA9PSBcInhcIiA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXByZXNzRmlsZSA9IGZpbGUgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5ldyBDb21wcmVzc29yKGZpbGUsIHtcbiAgICAgIHF1YWxpdHk6IDAuOCxcbiAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcihlcnIpIHtcbiAgICAgICAgcmVzb2x2ZShmaWxlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoc2VsZWN0b3IsIGNsYXNzTmFtZSkgPT4ge1xuICBpZiAoIXNlbGVjdG9yIHx8ICFjbGFzc05hbWUpIHJldHVybjtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYgKGVsZW1lbnRzLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgZWxlbWVudHMuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnRzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBiNjR0b0Jsb2IoZGF0YVVSSSkge1xuICB2YXIgYnl0ZVN0cmluZyA9IGF0b2IoZGF0YVVSSS5zcGxpdChcIixcIilbMV0pO1xuICB2YXIgYWIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICB2YXIgaWEgPSBuZXcgVWludDhBcnJheShhYik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgaWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBCbG9iKFthYl0sIHsgdHlwZTogXCJpbWFnZS9qcGVnXCIgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGZsYXNoIGZyb20gXCIuL2ZsYXNoXCI7XG5cbmNvbnN0ICQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yLmJpbmQoZG9jdW1lbnQpO1xud2luZG93LiQgPSAkO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICBmbGFzaCgpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImdsb2JhbFRoaXMiLCJzZWxmIiwiQ29tcHJlc3NvciIsIm93bktleXMiLCJvYmplY3QiLCJlbnVtZXJhYmxlT25seSIsImtleXMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2xzIiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQyIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImZvckVhY2giLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlZmluZVByb3BlcnR5IiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJvYmoiLCJ2YWx1ZSIsIl9leHRlbmRzIiwiYXNzaWduIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY2FudmFzVG9CbG9iIiwid2luZG93IiwiQ2FudmFzUHJvdG90eXBlIiwiSFRNTENhbnZhc0VsZW1lbnQiLCJoYXNCbG9iQ29uc3RydWN0b3IiLCJCbG9iIiwiQm9vbGVhbiIsImUiLCJoYXNBcnJheUJ1ZmZlclZpZXdTdXBwb3J0IiwiVWludDhBcnJheSIsInNpemUiLCJCbG9iQnVpbGRlciIsIldlYktpdEJsb2JCdWlsZGVyIiwiTW96QmxvYkJ1aWxkZXIiLCJNU0Jsb2JCdWlsZGVyIiwiZGF0YVVSSVBhdHRlcm4iLCJkYXRhVVJMdG9CbG9iIiwiYXRvYiIsIkFycmF5QnVmZmVyIiwiZGF0YVVSSSIsIm1hdGNoZXMiLCJtZWRpYVR5cGUiLCJpc0Jhc2U2NCIsImRhdGFTdHJpbmciLCJieXRlU3RyaW5nIiwiYXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImJiIiwibWF0Y2giLCJFcnJvciIsInNsaWNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckNvZGVBdCIsInR5cGUiLCJhcHBlbmQiLCJnZXRCbG9iIiwidG9CbG9iIiwibW96R2V0QXNGaWxlIiwiY2FsbGJhY2siLCJxdWFsaXR5Iiwic2V0VGltZW91dCIsInRvRGF0YVVSTCIsIm1zVG9CbG9iIiwiaXNCbG9iIiwidG9TdHJpbmciLCJERUZBVUxUUyIsInN0cmljdCIsImNoZWNrT3JpZW50YXRpb24iLCJtYXhXaWR0aCIsIkluZmluaXR5IiwibWF4SGVpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsInJlc2l6ZSIsIm1pbWVUeXBlIiwiY29udmVydFR5cGVzIiwiY29udmVydFNpemUiLCJiZWZvcmVEcmF3IiwiZHJldyIsInN1Y2Nlc3MiLCJlcnJvciIsIklTX0JST1dTRVIiLCJkb2N1bWVudCIsIldJTkRPVyIsImlzUG9zaXRpdmVOdW1iZXIiLCJBcnJheSIsInRvQXJyYXkiLCJmcm9tIiwiUkVHRVhQX0lNQUdFX1RZUEUiLCJpc0ltYWdlVHlwZSIsInRlc3QiLCJpbWFnZVR5cGVUb0V4dGVuc2lvbiIsImV4dGVuc2lvbiIsInN1YnN0ciIsImNvbmNhdCIsImZyb21DaGFyQ29kZSIsIlN0cmluZyIsImdldFN0cmluZ0Zyb21DaGFyQ29kZSIsImRhdGFWaWV3Iiwic3RhcnQiLCJzdHIiLCJnZXRVaW50OCIsImJ0b2EiLCJhcnJheUJ1ZmZlclRvRGF0YVVSTCIsImNodW5rcyIsImNodW5rU2l6ZSIsInVpbnQ4Iiwic3ViYXJyYXkiLCJqb2luIiwicmVzZXRBbmRHZXRPcmllbnRhdGlvbiIsIkRhdGFWaWV3Iiwib3JpZW50YXRpb24iLCJsaXR0bGVFbmRpYW4iLCJhcHAxU3RhcnQiLCJpZmRTdGFydCIsImJ5dGVMZW5ndGgiLCJvZmZzZXQiLCJleGlmSURDb2RlIiwidGlmZk9mZnNldCIsImVuZGlhbm5lc3MiLCJnZXRVaW50MTYiLCJmaXJzdElGRE9mZnNldCIsImdldFVpbnQzMiIsIl9sZW5ndGgiLCJfb2Zmc2V0Iiwic2V0VWludDE2IiwicGFyc2VPcmllbnRhdGlvbiIsInJvdGF0ZSIsInNjYWxlWCIsInNjYWxlWSIsIlJFR0VYUF9ERUNJTUFMUyIsIm5vcm1hbGl6ZURlY2ltYWxOdW1iZXIiLCJ0aW1lcyIsIk1hdGgiLCJyb3VuZCIsImdldEFkanVzdGVkU2l6ZXMiLCJfcmVmIiwiYXNwZWN0UmF0aW8iLCJpc1ZhbGlkV2lkdGgiLCJpc1ZhbGlkSGVpZ2h0IiwiYWRqdXN0ZWRXaWR0aCIsIkFycmF5QnVmZmVyJDEiLCJGaWxlUmVhZGVyIiwiVVJMIiwid2Via2l0VVJMIiwiUkVHRVhQX0VYVEVOU0lPTiIsIkFub3RoZXJDb21wcmVzc29yIiwiZmlsZSIsIm9wdGlvbnMiLCJpbWFnZSIsIkltYWdlIiwiYWJvcnRlZCIsInJlc3VsdCIsImluaXQiLCJfdGhpcyIsImZhaWwiLCJsb2FkIiwidXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVhZGVyIiwib25sb2FkIiwiZGF0YSIsIm9uYWJvcnQiLCJvbmVycm9yIiwib25sb2FkZW5kIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJyZWFkQXNEYXRhVVJMIiwiX3RoaXMyIiwiZHJhdyIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJjcm9zc09yaWdpbiIsImFsdCIsIm5hbWUiLCJzcmMiLCJfcmVmMiIsIl90aGlzMyIsIl9yZWYyJHJvdGF0ZSIsIl9yZWYyJHNjYWxlWCIsIl9yZWYyJHNjYWxlWSIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImlzOTBEZWdyZWVzUm90YXRlZCIsImFicyIsInJlc2l6YWJsZSIsIm1heCIsIl9yZWYzIiwiX3JlZjQiLCJfcmVmNSIsIl9nZXRBZGp1c3RlZFNpemVzIiwiX2dldEFkanVzdGVkU2l6ZXMyIiwiX2dldEFkanVzdGVkU2l6ZXMzIiwiX2dldEFkanVzdGVkU2l6ZXM0IiwiX2dldEFkanVzdGVkU2l6ZXM0JHdpIiwiX2dldEFkanVzdGVkU2l6ZXM0JGhlIiwiZmxvb3IiLCJtaW4iLCJkZXN0WCIsImRlc3RZIiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsInBhcmFtcyIsInNyY1giLCJzcmNZIiwic3JjV2lkdGgiLCJzcmNIZWlnaHQiLCJfZ2V0QWRqdXN0ZWRTaXplczUiLCJjb250YWluIiwiY292ZXIiLCJfcmVmNiIsImZpbGxTdHlsZSIsImluZGV4T2YiLCJmaWxsUmVjdCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJQSSIsInNjYWxlIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImRvbmUiLCJfcmVmNyIsInJldm9rZU9iamVjdFVSTCIsImRhdGUiLCJEYXRlIiwibGFzdE1vZGlmaWVkIiwiZ2V0VGltZSIsImxhc3RNb2RpZmllZERhdGUiLCJyZXBsYWNlIiwiZXJyIiwiYWJvcnQiLCJjb21wbGV0ZSIsIm5vQ29uZmxpY3QiLCJzZXREZWZhdWx0cyIsIl9fYXNzaWduIiwidCIsInMiLCJuIiwicCIsIk5vdHlmTm90aWZpY2F0aW9uIiwibGlzdGVuZXJzIiwib24iLCJldmVudFR5cGUiLCJjYiIsImNhbGxiYWNrcyIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwiTm90eWZBcnJheUV2ZW50IiwiTm90eWZBcnJheSIsIm5vdGlmaWNhdGlvbnMiLCJlbGVtIiwidXBkYXRlRm4iLCJBZGQiLCJzcGxpY2UiLCJpbmRleCIsIm51bSIsIlJlbW92ZSIsIm9uVXBkYXRlIiwiZm4iLCJOb3R5ZkV2ZW50IiwiREVGQVVMVF9PUFRJT05TIiwidHlwZXMiLCJjbGFzc05hbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpY29uIiwidGFnTmFtZSIsImR1cmF0aW9uIiwicmlwcGxlIiwicG9zaXRpb24iLCJ4IiwieSIsImRpc21pc3NpYmxlIiwiTm90eWZWaWV3IiwiZXZlbnRzIiwiWF9QT1NJVElPTl9GTEVYX01BUCIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsIllfUE9TSVRJT05fRkxFWF9NQVAiLCJ0b3AiLCJib3R0b20iLCJkb2NGcmFnIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIm5vdHlmQ29udGFpbmVyIiwiX2NyZWF0ZUhUTUxFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJib2R5IiwiY29udGFpbmVyIiwiYW5pbWF0aW9uRW5kRXZlbnROYW1lIiwiX2dldEFuaW1hdGlvbkVuZEV2ZW50TmFtZSIsIl9jcmVhdGVBMTF5Q29udGFpbmVyIiwiX2EiLCJ1cGRhdGUiLCJub3RpZmljYXRpb24iLCJhZGROb3RpZmljYXRpb24iLCJyZW1vdmVOb3RpZmljYXRpb24iLCJyZW5kZXJlZE5vdGlmaWNhdGlvbiIsIl9wb3BSZW5kZXJlZE5vdGlmaWNhdGlvbiIsIm5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJoYW5kbGVFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJfcmVuZGVyTm90aWZpY2F0aW9uIiwiX2Fubm91bmNlIiwibWVzc2FnZSIsImNhcmQiLCJfYnVpbGROb3RpZmljYXRpb25DYXJkIiwic3BsaXQiLCJpZHgiLCJnZXRYUG9zaXRpb24iLCJnZXRZUG9zaXRpb24iLCJhZGp1c3RDb250YWluZXJBbGlnbm1lbnQiLCJhbGlnbiIsImp1c3RpZnkiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiaWNvbk9wdHMiLCJub3RpZmljYXRpb25FbGVtIiwid3JhcHBlciIsImlubmVySFRNTCIsIm1haW5Db2xvciIsImJhY2tncm91bmQiLCJpY29uQ29udGFpbmVyIiwidmFsdWVPZiIsImNsYXNzTmFtZV8xIiwidGV4dCIsIl9iIiwiY29sb3IiLCJpY29uRWxlbWVudCIsImRpc21pc3NXcmFwcGVyIiwiZGlzbWlzc0J1dHRvbiIsIkRpc21pc3MiLCJzdG9wUHJvcGFnYXRpb24iLCJDbGljayIsInRleHRDb250ZW50IiwiYTExeUNvbnRhaW5lciIsInNldEF0dHJpYnV0ZSIsImJvcmRlciIsImNsaXAiLCJtYXJnaW4iLCJvdmVyZmxvdyIsInBhZGRpbmciLCJvdXRsaW5lIiwiZWwiLCJ0cmFuc2l0aW9ucyIsIk1velRyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsIldlYmtpdFRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiTm90eWYiLCJvcHRzIiwiZGlzbWlzcyIsIl9yZW1vdmVOb3RpZmljYXRpb24iLCJ2aWV3IiwicmVnaXN0ZXJUeXBlcyIsInBheWxvYWQiLCJub3JtYWxpemVPcHRpb25zIiwib3BlbiIsImRlZmF1bHRPcHRzIiwiZmluZCIsImNvbmZpZyIsImFzc2lnblByb3BzIiwiX3B1c2hOb3RpZmljYXRpb24iLCJkaXNtaXNzQWxsIiwicHJvcCIsImluY29taW5nVHlwZXMiLCJmaW5hbERlZmF1bHRUeXBlcyIsIm1hcCIsImRlZmF1bHRUeXBlIiwidXNlclR5cGVJZHgiLCJ1c2VyVHlwZSIsImlzRW1wdHkiLCJlbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiZGF0YXNldCIsIm5vdGljZSIsIm5vdHlmIiwiaW5jbHVkZXMiLCJjb25zdHJ1Y3RvciIsImVudHJpZXMiLCJiYXNlNjRUb0Jsb2IiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJibG9iIiwiY3NyZlRva2VuIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInV1aWR2NCIsImMiLCJyIiwicmFuZG9tIiwidiIsImNvbXByZXNzRmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidG9nZ2xlQ2xhc3MiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwiY29udGFpbnMiLCJyZW1vdmUiLCJiNjR0b0Jsb2IiLCJhYiIsImlhIiwiZmxhc2giLCIkIiwiYmluZCIsInJlYWR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9