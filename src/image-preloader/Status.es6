let defaultListeners = {
        progress: function () {},
        load: function () {},
        error: function () {},
        complete: function () {}
    };

function merge(...sources) {
    let obj = {};

    sources.forEach(function (source) {
        let key;

        for (key in source) {
            if (source.hasOwnProperty(key)) {
                obj[key] = source[key];
            }
        }
    });

    return obj;
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
        console.log('progress');
        this.listeners.progress.apply(null, [this.count, this.total]);

        if (true === this.isComplete()) {
            console.log('complete');
            this.listeners.complete.apply(null, arguments);;
        }
    }

    load() {
        console.log('load');
        this.count += 1;
        this.listeners.progress.apply(null, arguments);

        this.progress();
    }

    error() {
        console.log('error');
        this.count += 1;
        this.listeners.progress.apply(null, arguments);

        this.progress();
    }
}
