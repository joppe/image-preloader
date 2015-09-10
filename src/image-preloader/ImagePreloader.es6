import {ImageLoader} from './ImageLoader';
import {PathLoader} from './PathLoader';
import {Status} from './Status';

/**
 * @class ImagePreloader
 */
export class ImagePreloader {
    /**
     * @param {string|Array|HTMLImageElement} loadables
     */
    constructor(loadables) {
        this.loadables = [];

        this.addLoadable(loadables);
    }

    /**
     * @param {string|Array|HTMLImageElement|HTMLCollection} loadable
     */
    addLoadable(loadable) {
        let type = Object.prototype.toString.call(loadable);

        if ('[object HTMLCollection]' === type || '[object Array]' === type) {
            [].forEach.call(loadable, this.addLoadable.bind(this));
        } else if ('[object HTMLImageElement]' === type) {
            this.loadables.push(new ImageLoader(loadable));
        } else if ('[object String]' === type) {
            this.loadables.push(new PathLoader(loadable));
        } else {
            throw `Unsupported type exception "$(type)"`;
        }
    }

    /**
     * @param {Object} listeners
     */
    start(listeners) {
        let status = new Status(this.loadables.length, listeners);

        this.loadables.forEach(function (loadable) {
            loadable.load(status.load.bind(status), status.error.bind(status));
        });
    }
}