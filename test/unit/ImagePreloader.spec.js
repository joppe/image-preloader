/*global describe, it, expect, beforeEach, loadFixtures, Image, document*/

import {ImagePreloader} from 'image-preloader/ImagePreloader.js';

describe('ImagePreloader', function () {
    'use strict';

    it('Allows only HTMLCollection/Array/HTMLImageElement/String as argument for the constructor', function () {
        expect(function () {
            new ImagePreloader(null);
        }).toThrow();

        expect(function () {
            new ImagePreloader(2);
        }).toThrow();

        expect(function () {
            new ImagePreloader(new Date());
        }).toThrow();
    });

    it('Allows only HTMLCollection/Array/HTMLImageElement/String as argument for addLoadable', function () {
        expect(function () {
            let loader = new ImagePreloader();
            loader.addLoadable(null);
        }).toThrow();

        expect(function () {
            let loader = new ImagePreloader();
            loader.addLoadable('http://lorempixel.com/400/200/sports/');
        }).not.toThrow();

        expect(function () {
            let image= new Image(),
                loader = new ImagePreloader();

            image.setAttribute('src', 'http://lorempixel.com/400/200/sports/');
            loader.addLoadable(image);
        }).not.toThrow();
    });
});

describe('ImagePreloader', function () {
    'use strict';

    jasmine.getFixtures().fixturesPath = 'base/test/fixtures';


    let loader,
        l,
        e,
        p;

    beforeEach(function (done) {
        loadFixtures('multiple.html');

        l = 0;
        e = 0;
        p = 0;

        loader = new ImagePreloader();
        loader.addLoadable(document.getElementsByTagName('img'));
        loader.load({
            progress() {
                p += 1;
            },
            load() {
                l += 1;
            },
            error() {
                e += 1;
            },
            complete() {
                done();
            }
        });
    }, 10000);

    it('Load and listen to events', function () {
        expect(p).toBe(5);
        expect(e).toBe(0);
        expect(l).toBe(5);
    });

    it('Load may only be invoked once', function () {
        expect(function () {
            loader.load();
        }).toThrow();
    });

    it('When loading, addLoadable will fail', function () {
        expect(function () {
            loader.addLoadable([]);
        }).toThrow();
    });
});