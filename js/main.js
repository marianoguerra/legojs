$(function () {
    "use strict";

    function getCode() {
        return $.trim($("code").val());
    }

    function updateOutput(code) {
        var tree = legoparser.parse(tree);

        $("#tree").html(JSON.stringify(tree, [], 2));
        $("#html").html($.lego(code));
        $("#raw").html($("#html").html());
    }

    function onRunClick() {
        var code = getCode();

        updateOutput(code);
    }

    $("#run").click(onRunClick);

});
