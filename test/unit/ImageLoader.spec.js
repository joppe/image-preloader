/*global describe, it, expect, beforeEach, Image*/

import {ImageLoader} from 'image-preloader/ImageLoader.js';

describe('ImageLoader', function () {
    'use strict';

    it('Should tell that the image is not loaded', function () {
        let image = new Image(),
            loader;

        image.setAttribute('src', 'http://lorempixel.com/400/200/sports/?foo=' + (new Date()).getTime());
        loader = new ImageLoader(image);

        expect(loader.isLoaded()).toBe(false);
    });
});

describe('ImageLoader', function () {
    'use strict';

    let src = 'http://lorempixel.com/400/200/sports/',
        image = new Image(),
        error = null,
        success = null;

    beforeEach(function (done) {
        let loader;

        image.setAttribute('src', src);
        loader = new ImageLoader(image);
        loader.load(function () {
            success = true;
            done();
        }, function () {
            error = true;
            done();
        });

    }, 1000);

    it('Should tell that the image is already loaded', function () {
        let loader = new ImageLoader(image);

        expect(success).toBe(true);
        expect(error).toBe(null);
        expect(loader.isLoaded()).toBe(true);
    });
});

describe('ImageLoader, load existing image', function () {
    'use strict';

    let loader,
        success = null,
        error = null,
        image,
        path,
        img;

    beforeEach(function (done) {
        image = new Image();
        image.setAttribute('src', 'http://lorempixel.com/400/200/sports/?foo=' + (new Date()).getTime());
        loader = new ImageLoader(image);

        loader.load(function (p, i) {
            success = true;
            path = p;
            img = i;
            done();
        }, function () {
            error = true;
            done();
        });
    }, 10000);

    it('Should tell if an image is loaded', function () {
        expect(success).toBe(true);
        expect(error).toBe(null);
    });

    it('The first argument of the load listener function is the path of the image', function () {
        expect(path).toBe(image.getAttribute('src'));
    });

    it('The second argument of the load listener function is the image itself', function () {
        expect(img).toBe(image);
    });
});