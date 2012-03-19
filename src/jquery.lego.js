    // if already defined don't redefine it
    if ($.lego) {
        return $;
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
                            if (key[0] === "$") {
                                attr = key.slice(1);

                                if (attr !== "childs") {
                                    if ($.inArray(attr, events) !== -1) {
                                        $tag[attr](options[key]);
                                    } else if ($.isFunction(options[key])) {
                                        $.bind(attr, options[key]);
                                    } else {
                                        $.lego.error("unknown internal attribute " + attr);
                                    }
                                }

                            } else if (key[0] === "@") {
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

    function addIfSet(obj, fields) {
        var key;

        for (key in fields) {
            if (fields[key]) {
                obj[key] = fields[key];
            }
        }

        return obj;
    }

    function link(href, body, id, cls) {
        return {"a": addIfSet({"href": href, "$childs": body}, {"id": id, "class": cls})};
    }

    function input(type, value, id, cls) {
        return {"input": addIfSet({"type": type, "value": value || ""}, {"id": id, "class": cls})};
    }

    function text(value, id, cls) {
        return input("text", value, id, cls);
    }

    function button(label, id, cls) {
        return {"button": addIfSet({"$childs": label}, {"id": id, "class": cls})};
    }

    function img(src, alt) {
        return {"img": {"src": src, "alt": alt}};
    }

    function li(body) {
        return {"li": {"$childs": body}};
    }

    function imglink(href, src, alt, id, cls) {
        return link(href, img(src, alt), id, cls);
    }

    function tag(name, body, id, cls) {
        var base = {};
        base[name] = addIfSet({"$childs": body}, {"id": id, "class": cls});
        return base;
    }

    function div(body, id, cls) {
        return tag("div", body, id, cls);
    }

    function span(body, id, cls) {
        return tag("div", body, id, cls);
    }

    if (window.console && console.error) {
        $.lego.error = console.error;
    } else {
        $.lego.error = function () {};
    }

    l = $.lego;

    l.link = link;
    l.img = img;
    l.li = li;
    l.imglink = imglink;
    l.div = div;
    l.span = span;
    l.input = input;
    l.text = text;
    l.button = button;
