System.register([], function (_export) {
    'use strict';

    var defaultListeners, Status;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    /**
     * @class Status
     */

    _export('merge', merge);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    /**
     * @param {Object[]} sources
     * @returns {Object}
     */

    function merge() {
        'use strict';

        var target = {};

        for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
            sources[_key] = arguments[_key];
        }

        sources.forEach(function (source) {
            var key = undefined;

            for (key in source) {
                if (source.hasOwnProperty(key)) {
                    target[key] = source[key];
                }
            }
        });

        return target;
    }

    return {
        setters: [],
        execute: function () {
            defaultListeners = {
                progress: function progress() {},
                load: function load() {},
                error: function error() {},
                complete: function complete() {}
            };

            Status = (function () {
                /**
                 * @param {Number} total
                 * @param {Object} listeners
                 */

                function Status(total, listeners) {
                    _classCallCheck(this, Status);

                    this.listeners = merge({}, defaultListeners, listeners);

                    this.total = total;
                    this.count = 0;
                }

                /**
                 * @returns {boolean}
                 */

                _createClass(Status, [{
                    key: 'isComplete',
                    value: function isComplete() {
                        return this.total === this.count;
                    }
                }, {
                    key: 'progress',
                    value: function progress() {
                        this.listeners.progress.apply(null, [this.count, this.total]);

                        if (true === this.isComplete()) {
                            this.listeners.complete.apply(null, arguments);
                        }
                    }

                    /**
                     * @throws Will throw an error if it is already complete
                     */
                }, {
                    key: 'load',
                    value: function load() {
                        if (true === this.isComplete()) {
                            throw 'Status: cannot handle load, already complete';
                        }

                        this.count += 1;
                        this.listeners.load.apply(null, arguments);

                        this.progress();
                    }

                    /**
                     * @throws Will throw an error if it is already complete
                     */
                }, {
                    key: 'error',
                    value: function error() {
                        if (true === this.isComplete()) {
                            throw 'Status: cannot handle error, already complete';
                        }

                        this.count += 1;
                        this.listeners.error.apply(null, arguments);

                        this.progress();
                    }
                }]);

                return Status;
            })();

            _export('Status', Status);
        }
    };
});