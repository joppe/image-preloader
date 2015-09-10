/*global describe, jasmine, it, expect, beforeEach*/
/*
import {merge} from 'image-preloader/Status';
import {Status} from 'image-preloader/Status';

describe('merge()', function () {
    it('Return an empty object if no arguments are passed', function () {
        expect(merge()).toEqual({});
    });

    it('Copy all values of a passed argument', function () {
        expect(merge({
            foo: 'bar',
            three: 3
        })).toEqual({
            foo: 'bar',
            three: 3
        });
    });

    it('Copy all values of multiple passed arguments and give precedence to the last arguments value', function () {
        expect(merge({
            foo: 'foo',
            two: 2
        }, {
            three: 3,
            bar: 'bar'
        }, {
            foo: 'f00'
        })).toEqual({
            foo: 'f00',
            bar: 'bar',
            three: 3,
            two: 2
        });
    });
});

describe('Status', function () {
    jasmine.getFixtures().fixturesPath = 'base/test/fixtures';

    beforeEach(function () {
        loadFixtures('single.html');
    });

    it('the fixture file should be available', function () {
        expect($('#container')).toExist();
    });

    it('should fail', function () {
        expect(true).toBe(true);
    });
});
/**/