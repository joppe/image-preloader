/**
 * @interface Loadable
 */
export class Loadable {
    /**
     * Load the object
     *
     * @param {Function} success
     * @param {Function} error
     */
    load(success, error) {}
}