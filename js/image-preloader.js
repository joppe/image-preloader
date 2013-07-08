/*global jQuery*/

var ImagePreloader = (function ($) {
    'use strict';

    var defaultOptions = {},
        isImageLoaded;

    isImageLoaded = function ($image) {
        var img = $image.get(0),
            isLoaded = false;

        if (img.complete || (typeof img.naturalWidth !== 'undefined' && img.naturalWidth > 0)) {
            isLoaded = true;
        }

        return isLoaded;
    };

    return {
        load: function (content, options) {

        }
    };
}(jQuery));