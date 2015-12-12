/*global describe, it, expect*/

import {merge} from 'image-preloader/Status.js';
import {Status} from 'image-preloader/Status.js';

describe('merge()', function () {
    'use strict';

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
    'use strict';

    it('Call callbackfunction', function () {
        let p = 0,
            l = 0,
            e = 0,
            c = 0,
            s = new Status(3, {
                progress: function () {
                    p += 1;
                },
                load: function () {
                    l += 1;
                },
                error: function () {
                    e += 1;
                },
                complete: function () {
                    c += 1;
                }
            });

        expect(s.total).toBe(3);
        expect(s.isComplete()).toBe(false);

        s.load();
        expect(l).toBe(1);

        s.error();
        expect(e).toBe(1);
        expect(s.isComplete()).toBe(false);

        s.load();
        expect(l).toBe(2);
        expect(s.isComplete()).toBe(true);

        expect(function () {
            s.load();
        }).toThrow('Status: cannot handle load, already complete');
    });
});