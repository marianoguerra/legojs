/*global define*/
(function (root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            return (root.legoparser = factory());
        });
    } else {
        // Browser globals
        root.legoparser = factory();
    }
}(this, function () {
    "use strict";

    return {
        parse: function () {
            throw {
                name: "NotImplemented",
                reason: "this is a stub of lejojs expression parser, load the real implementation to support this functionality",
                toString: function () {
                    return this.name +  ": " + this.reason;
                }
            };
        }
    };
}));
