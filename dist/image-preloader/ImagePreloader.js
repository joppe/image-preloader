System.register(['./ImageLoader.js', './PathLoader.js', './Status.js'], function (_export) {

    /**
     * @class ImagePreloader
     */
    'use strict';

    var ImageLoader, PathLoader, Status, ImagePreloader;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_ImageLoaderJs) {
            ImageLoader = _ImageLoaderJs.ImageLoader;
        }, function (_PathLoaderJs) {
            PathLoader = _PathLoaderJs.PathLoader;
        }, function (_StatusJs) {
            Status = _StatusJs.Status;
        }],
        execute: function () {
            ImagePreloader = (function () {
                /**
                 * @param {Array} loadables
                 */

                function ImagePreloader() {
                    _classCallCheck(this, ImagePreloader);

                    this.loadables = [];
                    this.isLoading = false;

                    for (var _len = arguments.length, loadables = Array(_len), _key = 0; _key < _len; _key++) {
                        loadables[_key] = arguments[_key];
                    }

                    this.addLoadable(loadables);
                }

                /**
                 * @param {string|Array|HTMLImageElement|HTMLCollection} loadable
                 * @throws Throws an error when already loading
                 */

                _createClass(ImagePreloader, [{
                    key: 'addLoadable',
                    value: function addLoadable(loadable) {
                        var type = undefined;

                        if (true === this.isLoading) {
                            throw 'ImagePreloader is already loading';
                        }

                        if (undefined === loadable) {
                            return;
                        }

                        type = Object.prototype.toString.call(loadable);

                        /**
                         * document.querySelectorAll will return a NodeList
                         * document.getElementsBy... will return a HTMLCollection
                         */
                        if ('[object NodeList]' === type || '[object HTMLCollection]' === type || '[object Array]' === type) {
                            [].forEach.call(loadable, this.addLoadable.bind(this));
                        } else if ('[object HTMLImageElement]' === type) {
                            this.loadables.push(new ImageLoader(loadable));
                        } else if ('[object String]' === type) {
                            this.loadables.push(new PathLoader(loadable));
                        } else {
                            throw 'Unsupported type exception "' + type + '"';
                        }
                    }

                    /**
                     * @param {Object} [listeners]
                     * @throws Throws an error when already loading
                     */
                }, {
                    key: 'load',
                    value: function load(listeners) {
                        var status = undefined;

                        if (true === this.isLoading) {
                            throw 'ImagePreloader is already loading';
                        }

                        this.isLoading = true;

                        status = new Status(this.loadables.length, listeners);

                        this.loadables.forEach(function (loadable) {
                            loadable.load(status.load.bind(status), status.error.bind(status));
                        });
                    }
                }]);

                return ImagePreloader;
            })();

            _export('ImagePreloader', ImagePreloader);
        }
    };
});