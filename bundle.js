var path = require('path');
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder();

builder.config({
    transpiler: 'babel'
});

builder
    .buildStatic('src/image-preloader/*', 'dist/image-preloader.min.js', {
        //minify: true,
        //sourceMaps: true,
        format: 'amd'
    })
    .then(function () {
        console.log('Build complete');
    })
    .catch(function (err) {
        console.log('Build error');
        console.log(err);
    })
;