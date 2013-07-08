# Javascript Image Preloader

This project is mainly setup to get familiar with Karma/Bower/Jasmine

## Technique

On [stackoverflow](http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript) I found this script:

```javascript
function IsImageOk(img) {
    // During the onload event, IE correctly identifies any images that
    // weren’t downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
        return false;
    }

    // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.

    if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
        return false;
    }

    // No other way of checking: assume it’s ok.
    return true;
}
```