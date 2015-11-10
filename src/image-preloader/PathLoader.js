import {Loadable} from './Loadable.js'

/**
 * @class PathLoader
 */
export class PathLoader extends Loadable {
    /**
     * @param {string} path
     */
    constructor(path) {
        super();

        this.path = path;
    }

    /**
     * @param {Function} success
     * @param {Function} error
     */
    load(success, error) {
        let image = new Image();

        image.addEventListener('load', success);
        image.addEventListener('error', error);

        image.setAttribute('src', this.path);
    }
}