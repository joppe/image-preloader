// Karma configuration
// Generated on Mon Mar 10 2014 21:41:28 GMT+0100 (CET)

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // dependencies
            {
                pattern: 'bower_components/jquery/jquery.js',
                watched: false,
                served: true,
                included: true
            },
            {
                pattern: 'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
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
            },

            'src/*.js',
            'test/unit/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // do not preprocess anything
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots', 'junit'],


        junitReporter: {
            outputFile: 'test-results.xml'
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};