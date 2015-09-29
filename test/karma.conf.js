/*jshint strict: false*/
/*global module*/

// Karma configuration
// Generated on Thu Feb 12 2015 22:12:00 GMT+0100 (CET)

module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'systemjs',
            'jasmine'
        ],


        // list of files / patterns to load in the browser
        files: [
            // dependencies
            {
                pattern: 'dist/vendor/jquery/dist/jquery.js',
                watched: false,
                served: true,
                included: true
            },
            {
                pattern: 'dist/vendor/jasmine-jquery/lib/jasmine-jquery.js',
                watched: false,
                served: true,
                included: true
            },

            // fixtures
            {
                pattern: 'test/fixtures/*.html',
                watched: true,
                included: false,
                served: true
            }
        ],


        // systemjs config
        systemjs: {
            baseURL: '.',

            configFile: 'demo/js/system.conf.js',

            files: [
                'src/**/*.js',
                'test/unit/*.spec.js'
            ],

            config: {
                baseURL: './',

                paths: {
                    'babel': 'node_modules/babel-core/browser.js',
                    'image-preloader/*': 'src/image-preloader/*.js'
                }
            },

            // systemjs does not support other extensions then .js for test files
            testFileSuffix: '.spec.js'
        },


        plugins : [
            'karma-systemjs',
            'karma-jasmine',
            //'karma-phantomjs-launcher'
            'karma-chrome-launcher'
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'dots'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
        //browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};