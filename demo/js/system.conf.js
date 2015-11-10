/*global System*/

var systemConfig = {
        baseURL: '../',

        transpiler: 'babel',

        paths: {
            'image-preloader/*': 'dist/image-preloader/*.js'
        }
    };

System.config(systemConfig);