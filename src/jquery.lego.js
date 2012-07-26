/*global define*/
(function (root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', './legoparser'], function (jQuery, legoparser) {
            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            return (root.legojs = factory(jQuery, legoparser));
        });
    } else {
        // Browser globals
        root.legojs = factory(root.jQuery, root.legoparser);
    }
}(this, function ($, legoparser) {
    "use strict";

    // if already defined don't redefine it
    if ($.lego) {
        return $.lego;
    }

    var l, events = (
        "blur focus focusin focusout load resize scroll unload click dblclick " +
        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
        "change select submit keydown keypress keyup error").split(" ");

    function getFirstKey(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return key;
            }
        }
    }

    $.lego = function (tag) {
        var key, $tag, i, childs, attr, options;

        if (typeof(tag) === "string") {
            // this will only be available if you import the real legoparser
            return $.lego(legoparser.parse(tag));
        } else if ($.isArray(tag)) {

            if (tag.length === 1) {

                if (typeof(tag[0]) === "string") {
                    return $.lego({"div": {"$childs": tag}});
                } else {
                    return $.lego(tag[0]);
                }

            } else {
                return $.map(tag, function (item) {
                    return $.lego(item);
                });
            }

        } else {
            key = getFirstKey(tag);
            options = tag[key];
            tag = key;

            $tag = $("<" + tag + ">");

            if (options) {

                if (typeof options === "string") {
                    $tag.html(options);
                } else {

                    for (key in options) {

                        if (key === "$childs") {
                            childs = options[key];

                            if (!$.isArray(childs)) {
                                childs = [childs];
                            }

                            for (i = 0; i < childs.length; i += 1) {

                                if ($.isPlainObject(childs[i])) {
                                    $.lego(childs[i]).appendTo($tag);
                                } else {
                                    $tag.append(childs[i]);
                                }

                            }
                        }

                        if (options.hasOwnProperty(key)) {

                            if (key.charAt(0) === "$") {
                                attr = key.slice(1);

                                if (attr !== "childs") {

                                    if ($.inArray(attr, events) !== -1) {
                                        $tag[attr](options[key]);
                                    } else if ($.isFunction(options[key])) {
                                        $tag.bind(attr, options[key]);
                                    } else {
                                        $.lego.error("unknown internal attribute " + attr);
                                    }

                                }

                            } else if (key.charAt(0) === "@") {
                                attr = key.slice(1);
                                $tag.data(attr, options[key]);
                            } else if (key === "class" && $.isArray(options[key])) {
                                $tag.attr(key, options[key].join(" "));
                            } else {
                                $tag.attr(key, options[key]);
                            }
                        }
                    }
                }
            }

            return $tag;
        }
    };

    $.lego.error = function (msg) {
        alert(msg);
    };

    $.lego.parser = legoparser;
    return $.lego;
}));
