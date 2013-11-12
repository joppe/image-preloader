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
        loadImage,
        Status;

    /**
     * @param {jQuery} $image
     * @param {Function} success
     * @param {Function} error
     */
    loadImage = function ($image, success, error) {
        var image = $image.get(0),
            $newImage;

        if (image.complete || (image.naturalWidth !== undefined && image.naturalWidth > 0)) {
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
    };

    Status = (function () {
        /**
         * @param {number} loaded
         * @param {number} failed
         * @param {number} total
         * @param {Function} progress
         * @param {Function} finish
         */
        function update(loaded, failed, total, progress, finish) {
            progress(loaded, failed, total);

            if (failed + loaded === total) {
                finish();
            }
        }

        return {
            /**
             * @param {number} total
             * @param {Listeners} listeners
             * @returns {{success: Function, error: Function}}
             */
            create: function (total, listeners) {
                var loaded = 0,
                    failed = 0;

                return {
                    /**
                     * @param {jQuery} $image
                     */
                    success: function ($image) {
                        loaded += 1;
                        listeners.load($image);
                        update(loaded, failed, total, listeners.progress, listeners.finish);
                    },

                    /**
                     * @param {jQuery} $image
                     */
                    error: function ($image) {
                        failed += 1;
                        listeners.error($image);
                        update(loaded, failed, total, listeners.progress, listeners.finish);
                    }
                };
            }
        };
    }());

    /**
     * @param {object} listeners
     * @returns {jQuery}
     */
    $.fn.imagePreloader = function (listeners) {
        var status = Status.create(this.size(), $.extend({}, defaultListeners, listeners || {}));

        return this.each(function () {
            loadImage($(this), function ($image) {
                status.success($image);
            }, function ($image) {
                status.error($image);
            });
        });
    };
}(jQuery));