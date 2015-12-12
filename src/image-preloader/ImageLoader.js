import {Loadable} from './Loadable.js';
import {PathLoader} from './PathLoader.js';

/**
 * @class ImageLoader
 */
export class ImageLoader extends Loadable {
    /**
     * @param {HTMLImageElement} image
     */
    constructor(image) {
        super();

        this.image = image;
    }

    /**
     * @returns {boolean}
     */
    isLoaded() {
        let isLoaded = false;

        if (this.image.complete || (typeof this.image.naturalWidth !== 'undefined' && this.image.naturalWidth > 0)) {
            isLoaded = true;
        }

        return isLoaded;
    }

    /**
     * @param {Function} success
     * @param {Function} error
     */
    load(success, error) {
        let pathLoader;

        if (this.isLoaded()) {
            success(this.image);
        } else {
            pathLoader = new PathLoader(this.image.getAttribute('src'));
            pathLoader.load((path) => {
                success.apply(this, [path, this.image]);
            }, (path) => {
                error.apply(this, [path, this.image]);
            });
        }
    }
}