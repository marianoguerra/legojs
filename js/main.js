$(function () {
    "use strict";

    function getCode() {
        return $.trim($("#code").val());
    }

    function updateOutput(code) {
        var tree = $.lego.parser.parse(code);

        $("#tree").html(JSON.stringify(tree, null, 2));
        $("#html").html($.lego(code)[0]);
        $("#raw").text($("#html").html());
    }

    function onRunClick() {
        var code = getCode();

        updateOutput(code);
    }

    $("#run").click(onRunClick);

    snippets = {
        "page title": 'h1>(img[src="img/lego.png" alt="lego"] + {js})',
        "first paragraph": 'p > ({write a } + em {legojs} + { expression below and click } + strong {run})',
        "list items": 'ul > li#item-$ * 3 {list item}'
    }

});
