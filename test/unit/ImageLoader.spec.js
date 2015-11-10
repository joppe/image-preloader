/*global describe, it, expect, beforeEach*/

import {ImageLoader} from 'image-preloader/ImageLoader.js';

describe('ImageLoader', function () {
    it('Should tell that the image is not loaded', function () {
        let image = new Image(),
            loader;

        image.setAttribute('src', 'http://lorempixel.com/400/200/sports/?foo=' + (new Date()).getTime());
        loader = new ImageLoader(image);

        expect(loader.isLoaded()).toBe(false);
    });
});

describe('ImageLoader', function () {
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
    let loader,
        success = null,
        error = null;

    beforeEach(function (done) {
        let image = new Image();

        image.setAttribute('src', 'http://lorempixel.com/400/200/sports/?foo=' + (new Date()).getTime());
        loader = new ImageLoader(image);

        loader.load(function () {
            success = true;
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
});