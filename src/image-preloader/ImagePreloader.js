import {ImageLoader} from './ImageLoader.js';
import {PathLoader} from './PathLoader.js';
import {Status} from './Status.js';

/**
 * @class ImagePreloader
 */
export class ImagePreloader {
    /**
     * @param {Array} loadables
     */
    constructor(...loadables) {
        this.loadables = [];
        this.isLoading = false;

        this.addLoadable(loadables);
    }

    /**
     * @param {string|Array|HTMLImageElement|HTMLCollection} loadable
     * @throws Throws an error when already loading
     */
    addLoadable(loadable) {
        let type;

        if (true === this.isLoading) {
            throw 'ImagePreloader is already loading';
        }

        if (undefined === loadable) {
            return;
        }

        type = Object.prototype.toString.call(loadable);

        /**
         * document.querySelectorAll will return a NodeList
         * document.getElementsBy... will return a HTMLCollection
         */
        if ('[object NodeList]' === type || '[object HTMLCollection]' === type || '[object Array]' === type) {
            [].forEach.call(loadable, this.addLoadable.bind(this));
        } else if ('[object HTMLImageElement]' === type) {
            this.loadables.push(new ImageLoader(loadable));
        } else if ('[object String]' === type) {
            this.loadables.push(new PathLoader(loadable));
        } else {
            throw `Unsupported type exception "${type}"`;
        }
    }

    /**
     * @param {Object} [listeners]
     * @throws Throws an error when already loading
     */
    load(listeners) {
        let status;

        if (true === this.isLoading) {
            throw 'ImagePreloader is already loading';
        }

        this.isLoading = true;

        status = new Status(this.loadables.length, listeners);

        this.loadables.forEach(function (loadable) {
            loadable.load(status.load.bind(status), status.error.bind(status));
        });
    }
}