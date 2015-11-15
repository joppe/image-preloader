# Javascript Image Preloader

A simple image preloader script.
Preload images by path, element or array. The progress can be tracked by providing listener functions.

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

## Resources
+ [stackoverflow.com](http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript)
+ [sajithmr.me](http://www.sajithmr.me/javascript-check-an-image-is-loaded-or-not/)