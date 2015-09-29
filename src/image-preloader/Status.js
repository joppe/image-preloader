let defaultListeners = {
        progress: function () {},
        load: function () {},
        error: function () {},
        complete: function () {}
    };

/**
 * @param {Array} sources
 * @returns {Object}
 */
export function merge(...sources) {
    let target = {};

    sources.forEach(function (source) {
        let key;

        for (key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    });

    return target;
}

/**
 * @class Status
 */
export class Status {
    /**
     * @param {Number} total
     * @param {Object} listeners
     */
    constructor(total, listeners) {
        this.listeners = merge({}, defaultListeners, listeners);

        this.total = total;
        this.count = 0;
    }

    /**
     * @returns {boolean}
     */
    isComplete() {
        return this.total === this.count;
    }

    progress() {
        this.listeners.progress.apply(null, [this.count, this.total]);

        if (true === this.isComplete()) {
            this.listeners.complete.apply(null, arguments);
        }
    }

    load() {
        if (true === this.isComplete()) {
            throw 'Status: cannot handle load, already complete';
        }

        this.count += 1;
        this.listeners.load.apply(null, arguments);

        this.progress();
    }

    error() {
        if (true === this.isComplete()) {
            throw 'Status: cannot handle load, already complete';
        }

        this.count += 1;
        this.listeners.error.apply(null, arguments);

        this.progress();
    }
}
