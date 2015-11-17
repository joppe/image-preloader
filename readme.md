# Javascript Image Preloader

A simple image preloader script.
Preload images by path or element. The progress can be tracked by providing callback functions.


## ImagePreloader

The ImagePreloader can preload one of the following:

- HTMLImageElement
- String, a path to an image

These are called loadables.


The ImagePreloader has a method `addLoadable`. This method accepts one of the following types:

- HTMLImageElement
- String, a path to an image
- NodeList, the result of a `document.querySelectorAll('...')`
- HTMLCollection, the result of a `document.getElementsByClassName('...')`
- Array, containing one (or a mix) of the above

For the iteratable objects the `addLoadable` is called for each item.
Loadables can also be added by passing them to the constructor of the ImagePreloader.

Once all loadable's are added the ImagePreloader can start loading them. This is done by invoking the `load` method.
The `load` method accepts an object with listener functions. These functions are supported:

- `load`, when an image is successfully loaded
- `error`, when an image could not be loaded
- `progress`, called after a `load` or an `error`
- `complete`, when all images are handled

None of the functions are required. The ImagePreloader starts loading all images.
Once the ImagePreloader is loading it is not allowed to add new loadables or to invoke the `load` method. An error will
be thrown.


## Installation

The Image Preloader is written is es2015, if you want to use it in your project just include it with bower/jspm. If you
want to play with the code use make. Type `make setup` to install node modules/bower packages, transpile babel and
bundle all javascript to one file.
The karma tests can be run with `make karma_test`.

`make clean` will remove the node modules and the bower packages.


## jQuery

This script was originally created as a jQuery plugin. Because nowadays browsers are mostly compatible with each other,
jQuery is not necessary anymore.
If you want to use this script as a jQuery plugin, use the following script:
```
(function ($) {
    $.fn.imagePreloader = function (listeners) {
        var i = new ImagePreloader();

        this.each(function () {
            i.addLoadable(this);
        });

        i.start(listeners);

        return this;
    };
}(jQuery));
```


## Resources

+ [stackoverflow.com](http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript)
+ [sajithmr.me](http://www.sajithmr.me/javascript-check-an-image-is-loaded-or-not/)