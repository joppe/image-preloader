/*global jQuery*/

(function ($) {
    'use strict';

    var defaultListeners = {
            progress: function () {},
            load: function () {},
            error: function () {},
            finish: function () {}
        },
        loadImage,
        Preloader;

    /**
     * @param {jQuery} $image
     * @param {Preloader} preloader
     */
    loadImage = function ($image, preloader) {
        var image = $image.get(0),
            $newImage;

        if (image.complete || (image.naturalWidth !== undefined && image.naturalWidth > 0)) {
            preloader.success($image);
        } else {
            $newImage = $('<img>');
            $newImage.on({
                load: function () {
                    preloader.success($image);
                },

                error: function () {
                    preloader.error($image);
                }
            });
            $newImage.prop('src', $image.prop('src'));
        }
    };

    /**
     * @param {number} total
     * @param listeners
     * @constructor
     */
    Preloader = function (total, listeners) {
        this.total = total;
        this.listeners = listeners;

        this.loaded = 0;
        this.failed = 0;
    };
    Preloader.prototype = {
        /**
         * @param {jQuery} $image
         */
        success: function ($image) {
            this.loaded += 1;
            this.listeners.load($image);
            this.progress();
        },

        /**
         * @param {jQuery} $image
         */
        error: function ($image) {
            this.failed += 1;
            this.listeners.error($image);
            this.progress();
        },

        progress: function () {
            this.listeners.progress(this.loaded, this.failed, this.total);

            if (this.failed + this.loaded === this.total) {
                this.listeners.finish();
            }
        }
    };

    $.fn.imagePreloader = function (listeners) {
        var preloader;

        listeners = $.extend({}, defaultListeners, listeners || {});

        preloader = new Preloader(this.size(), listeners);

        return this.each(function () {
            loadImage($(this), preloader);
        });
    };
}(jQuery));