/**
 * @class ImageLoader
 */
export class ImageLoader {
    /**
     * @param {HTMLImageElement} image
     */
    constructor(image) {
        this.image = image;
    }

    /**
     * @returns {boolean}
     */
    isLoaded() {
        let isLoaded = false;

        if (this.image.complete || (this.image.naturalWidth !== undefined && this.image.naturalWidth > 0)) {
            isLoaded = true;
        }

        return isLoaded;
    }

    /**
     * @param {Function} success
     * @param {Function} error
     */
    load(success, error) {
        let image;

        if (this.isLoaded()) {
            success(this.image);
        } else {
            image = new Image();
            image.addEventListener('load', function () {
                success.call(null, this.image);
            }.bind(this));
            image.addEventListener('error', function () {
                error.call(null, this.image);
            }.bind(this));

            image.setAttribute('src', this.image.getAttribute('src'));
        }
    }
}