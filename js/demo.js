/*global require */
require.config({
    baseUrl: "js/",
    paths: {
        "json": "http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2",
        "ace": "http://cdnjs.cloudflare.com/ajax/libs/ace/0.2.0/ace",
        "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
        "prettyPrint": "http://cdnjs.cloudflare.com/ajax/libs/prettify/188.0.0/prettify",
        "legoparser": "../src/legoparser"
    },

    shim: {
        json: {
            exports: "JSON"
        },
        ace: {
            exports: "ace"
        },
        jquery: {
            exports: "jQuery"
        },
        prettyPrint: {
            exports: "prettyPrint"
        }
    }
});

require(["jquery", "ace", "../src/jquery.lego", "prettyPrint", "json"], function ($, ace, legojs, prettyPrint, JSON) {
    "use strict";
    var snippets, key, $select = $("#snippets");

    function getCode() {
        return $.trim($("#code").val());
    }

    function updateOutput(code) {
        var tree = $.lego.parser.parse(code);

        $("#tree").html(JSON.stringify(tree, null, 2));
        $("#html").html($.lego(code));
        $("#raw").text($("#html").html());
    }

    function onRunClick() {
        var code = getCode();

        updateOutput(code);
    }

    function onLoadClick() {
        var name = $("#snippets>option:selected").val();
        $("#code").val(snippets[name]);
    }

    $("#run").click(onRunClick);
    $("#load").click(onLoadClick);

    snippets = {
        "tag": "p",
        "tag with content": "p {hello world}",
        "tag with id": "p#myid",
        "tag with class": "p.important",
        "tag with classes": "p.important.first",
        "tag with id and classes": "p#intro.important.first",
        "tag with id, classes and content": "p#intro.important.first {hi}",
        "just id": "#wrapper",
        "just class": ".paragraph",
        "id and class": "#wrapper.paragraph",
        "child": "li > a {click}",
        "attribute": 'li > a[href="http://marianoguerra.com.ar"] {click}',
        "attributes": 'img[src="img/lego.png" alt="lego"]',
        "repetition": "#wrapper > p * 3 {hi}",
        "id enumeration": "#wrapper > p#item-$ * 3",
        "siblings and grouping": "#wrapper > ({welcome } + em {username} + strong {!})",
        "page title": 'h1>(img[src="img/lego.png" alt="lego"] + {js})',
        "first paragraph": 'p > ({write a } + em {legojs} + { expression below and click } + strong {run})',
        "list items": 'ul > li#item-$ * 3 {list item}'
    };

    for (key in snippets) {
        $select.append($.lego('option[value="' + key + '"] {' + key + '}'));
    }
});
