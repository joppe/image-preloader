describe('Image path', function () {
    it('preload an image path', function () {
        var ready = false,
            success = null;

        runs(function () {
            $.imagePathPreloader('http://lorempixel.com/400/200/sports/1', {
                finish: function () {
                    ready = true;
                },
                load: function () {
                    success = true;
                },
                error: function () {
                    success = false;
                }
            });
        });

        waitsFor(function () {
            return ready;
        }, 'The loaded value should be true', 2000);

        runs(function () {
            expect(success).toBe(true);
        });
    });

    it('preload multiple image paths', function () {
        var ready = false,
            success = null;

        runs(function () {
            $.imagePathPreloader([
                'http://lorempixel.com/400/200/sports/1',
                'http://lorempixel.com/400/200/sports/2',
                'http://lorempixel.com/400/200/sports/3'
            ], {
                finish: function () {
                    ready = true;
                },
                load: function () {
                    success = true;
                },
                error: function () {
                    success = false;
                }
            });
        });

        waitsFor(function () {
            return ready;
        }, 'The loaded value should be true', 4000);

        runs(function () {
            expect(success).toBe(true);
        });
    });
});