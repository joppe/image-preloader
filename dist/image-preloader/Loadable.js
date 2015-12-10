System.register([], function (_export) {
  /**
   * @interface Loadable
   */
  "use strict";

  var Loadable;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Loadable = (function () {
        function Loadable() {
          _classCallCheck(this, Loadable);
        }

        _createClass(Loadable, [{
          key: "load",

          /**
           * Load the object
           *
           * @param {Function} success
           * @param {Function} error
           */
          value: function load(success, error) {}
        }]);

        return Loadable;
      })();

      _export("Loadable", Loadable);
    }
  };
});