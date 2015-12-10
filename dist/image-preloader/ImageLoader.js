System.register(['./Loadable.js', './PathLoader.js'], function (_export) {

    /**
     * @class ImageLoader
     */
    'use strict';

    var Loadable, PathLoader, ImageLoader;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_LoadableJs) {
            Loadable = _LoadableJs.Loadable;
        }, function (_PathLoaderJs) {
            PathLoader = _PathLoaderJs.PathLoader;
        }],
        execute: function () {
            ImageLoader = (function (_Loadable) {
                _inherits(ImageLoader, _Loadable);

                /**
                 * @param {HTMLImageElement} image
                 */

                function ImageLoader(image) {
                    _classCallCheck(this, ImageLoader);

                    _get(Object.getPrototypeOf(ImageLoader.prototype), 'constructor', this).call(this);

                    this.image = image;
                }

                /**
                 * @returns {boolean}
                 */

                _createClass(ImageLoader, [{
                    key: 'isLoaded',
                    value: function isLoaded() {
                        var isLoaded = false;

                        if (this.image.complete || typeof this.image.naturalWidth !== 'undefined' && this.image.naturalWidth > 0) {
                            isLoaded = true;
                        }

                        return isLoaded;
                    }

                    /**
                     * @param {Function} success
                     * @param {Function} error
                     */
                }, {
                    key: 'load',
                    value: function load(success, error) {
                        var pathLoader = undefined;

                        if (this.isLoaded()) {
                            success(this.image);
                        } else {
                            pathLoader = new PathLoader(this.image.getAttribute('src'));
                            pathLoader.load((function () {
                                success.call(null, this.image);
                            }).bind(this), (function () {
                                error.call(null, this.image);
                            }).bind(this));
                        }
                    }
                }]);

                return ImageLoader;
            })(Loadable);

            _export('ImageLoader', ImageLoader);
        }
    };
});