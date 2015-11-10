/*global describe, it, expect, beforeEach*/

import {PathLoader} from 'image-preloader/PathLoader.js';

describe('PathLoader, load existing image', function () {
    let success = null,
        error = null;

    beforeEach(function (done) {
        let loader = new PathLoader('http://lorempixel.com/400/200/sports/?foo=' + (new Date()).getTime());

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

describe('PathLoader, load non-existing image', function () {
    let success = null,
        error = null;

    beforeEach(function (done) {
        let loader = new PathLoader('http://lorepixel.com/400/200/sports/?foo=' + (new Date()).getTime());

        loader.load(function () {
            success = true;
            done();
        }, function () {
            error = true;
            done();
        });
    }, 10000);

    it('Should tell if an image is loaded', function () {
        expect(success).toBe(null);
        expect(error).toBe(true);
    });
});