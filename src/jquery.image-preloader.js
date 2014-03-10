/*global jQuery*/

(function ($) {
    'use strict';

    /**
     * @typedef {object} Listeners
     * @property {Function} progress
     * @property {Function} load
     * @property {Function} error
     * @property {Function} finish
     */

    var defaultListeners = {
            progress: function () {},
            load: function () {},
            error: function () {},
            finish: function () {}
        },
        Status;

    /**
     * @param {jQuery} $image
     * @returns {boolean}
     */
    function isCached($image) {
        var cached = false,
            image = $image.get(0);

        if (image.complete || (image.naturalWidth !== undefined && image.naturalWidth > 0)) {
            cached = true;
        }

        return cached;
    }

    /**
     * @param {jQuery} $image
     * @param {Function} success
     * @param {Function} error
     */
    function preloadImage($image, success, error) {
        var $newImage;

        if (isCached($image)) {
            success($image);
        } else {
            $newImage = $('<img>');
            $newImage.on({
                load: function () {
                    success($image);
                },

                error: function () {
                    error($image);
                }
            });
            $newImage.prop('src', $image.prop('src'));
        }
    }

    Status = (function () {
        return {
            /**
             * @param {number} total
             * @param {Listeners} listeners
             * @returns {{success: Function, error: Function}}
             */
            create: function (total, listeners) {
                var loaded = 0,
                    failed = 0;

                function update() {
                    listeners.progress(loaded, failed, total);

                    if (failed + loaded === total) {
                        listeners.finish();
                    }
                }

                return {
                    /**
                     * @param {jQuery} $image
                     */
                    success: function ($image) {
                        loaded += 1;
                        listeners.load($image);
                        update();
                    },

                    /**
                     * @param {jQuery} $image
                     */
                    error: function ($image) {
                        failed += 1;
                        listeners.error($image);
                        update();
                    }
                };
            }
        };
    }());

    /**
     * @param {Array|string} imagePaths
     * @param {Object} [listeners]
     */
    $.imagePathPreloader = function (imagePaths, listeners) {
        var status;

        // make sure imagePaths is an array
        imagePaths = $.isArray(imagePaths) ? imagePaths : [imagePaths];
        listeners = $.extend({}, defaultListeners, listeners || {});

        status = Status.create(imagePaths.length, listeners);

        $.each(imagePaths, function (index, imagePath) {
            preloadImage($('<img src="' + imagePath + '" />'), status.success, status.error);
        });
    };

    /**
     * @param {Object} [listeners]
     * @returns {jQuery}
     */
    $.fn.imagePreloader = function (listeners) {
        var status = Status.create(this.length, $.extend({}, defaultListeners, listeners || {}));

        return this.each(function () {
            preloadImage($(this), status.success, status.error);
        });
    };
}(jQuery));