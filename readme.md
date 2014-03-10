# Javascript Image Preloader

With this jQuery plugin you can preload images.

Usage

```javascript
$('img').preload({
    finish: function (status) {
        console.log('preload finished, total=' + tatus.total + '; loaded=' + status.loaded + '; failed=' + status.failed);
    }
});
```

The following functions can be defined as properies of the options object passed to the plugin:

- load, called when a single image is loaded. The processed jQuery image object is passed as argument.
- progress, called after an image is processed (loaded or can't be loaded). A status object with loaded, failed an total properties is passed as argument.
- finish, when all the images are processed. A status object with loaded, failed an total properties is passed as argument.
- error, called when the image can't be loaded. This is triggered by the error event of an img element. The processed jQuery image object is passed as argument.

All functions are optional.

## Resources
+ [stackoverflow.com](http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript)
+ [sajithmr.me](http://www.sajithmr.me/javascript-check-an-image-is-loaded-or-not/)