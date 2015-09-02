import {ImageLoader} from 'image-preloader/ImageLoader';

/**
 * @class ImagePreloader
 */
export class ImagePreloader {
    /**
     * @param {HTMLCollection} elements
     */
    constructor(elements) {
        // Create image loaders
        let images = [].map.call(elements, function (element) {
            let image = new ImageLoader(element);

            image.load(function () {
                console.log('loaded');
            }, function () {
                console.log('error');
            });

            return image;
        });

        console.log(images);
    }
}