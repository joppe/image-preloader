/*global require, console*/

var Builder = require('systemjs-builder'),
    builder = new Builder();

builder.config({
    transpiler: 'babel'
});

builder
    .buildStatic('src/image-preloader/*', 'dist/image-preloader.min.js', {
        minify: true,
        sourceMaps: true,
        format: 'amd'
    })
    .then(function () {
        'use strict';

        console.log('Build complete');
    })
    .catch(function (err) {
        'use strict';


        console.log('Build error');
        console.log(err);
    })
;