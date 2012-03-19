(function () {
    function checkParse(expr, expected) {
        var ast = $.lego.parser.parse(expr);

        deepEqual(ast, expected, expr);
    }

    test("tag", function () {
        checkParse("div", [{'div': {}}]);
    });

    test(".class", function () {
        checkParse(".foo", [{'div': {"class": ["foo"]}}]);
    });

    test("#id", function () {
        checkParse("#bar", [{'div': {"id": "bar"}}]);
    });

    test("[attr]", function () {
        checkParse('[id = "bar"]', [{'div': {"id": "bar"}}]);
        checkParse('[id="bar"]', [{'div': {"id": "bar"}}]);
    });

    test("[attr1 attrN]", function () {
        checkParse('[id = "bar" name = "mariano"]',
            [{'div': {"id": "bar", "name": "mariano"}}]);
        checkParse('[id="bar" name="mariano"]',
            [{'div': {"id": "bar", "name": "mariano"}}]);
    });

    test("tag[attr]", function () {
        checkParse('span[id = "bar"]', [{'span': {"id": "bar"}}]);
        checkParse('span[id="bar"]', [{'span': {"id": "bar"}}]);
    });

    test("tag[attr1 attrN]", function () {
        checkParse('span[id = "bar" name = "mariano"]',
            [{'span': {"id": "bar", "name": "mariano"}}]);
        checkParse('span[id="bar" name="mariano"]',
            [{'span': {"id": "bar", "name": "mariano"}}]);
    });

    test("tag[attr]#id", function () {
        checkParse('span[name = "bar"] #foo', [{'span': {"id": "foo", "name": "bar"}}]);
        checkParse('span[name="bar"]#foo', [{'span': {"id": "foo", "name": "bar"}}]);
    });

    test("tag[attr].class", function () {
        checkParse('span[name = "bar"] .foo',
            [{'span': {"class": ["foo"], "name": "bar"}}]);
        checkParse('span[name="bar"].foo',
            [{'span': {"class": ["foo"], "name": "bar"}}]);
    });

    test("tag[attr]#id.class", function () {
        checkParse('span[name = "bar"] #baz .foo',
            [{'span': {"id": "baz", "class": ["foo"], "name": "bar"}}]);
        checkParse('span[name="bar"]#baz.foo',
            [{'span': {"id": "baz", "class": ["foo"], "name": "bar"}}]);
    });

    test("tag[attr]#id.class1.classN", function () {
        checkParse('span[name = "bar"] #baz .foo .argh',
            [{'span': {"id": "baz", "class": ["foo", "argh"], "name": "bar"}}]);
        checkParse('span[name="bar"]#baz.foo.argh',
            [{'span': {"id": "baz", "class": ["foo", "argh"], "name": "bar"}}]);
    });

    test("[attr]#id", function () {
        checkParse('[name = "bar"] #foo', [{'div': {"id": "foo", "name": "bar"}}]);
        checkParse('[name="bar"]#foo', [{'div': {"id": "foo", "name": "bar"}}]);
    });

    test("[attr].class", function () {
        checkParse('[name = "bar"] .foo',
            [{'div': {"class": ["foo"], "name": "bar"}}]);
        checkParse('[name="bar"].foo',
            [{'div': {"class": ["foo"], "name": "bar"}}]);
    });

    test("[attr]#id.class", function () {
        checkParse('[name = "bar"] #baz .foo',
            [{'div': {"id": "baz", "class": ["foo"], "name": "bar"}}]);
        checkParse('[name="bar"]#baz.foo',
            [{'div': {"id": "baz", "class": ["foo"], "name": "bar"}}]);
    });

    test("[attr]#id.class1.classN", function () {
        checkParse('[name = "bar"] #baz .foo .argh',
            [{'div': {"id": "baz", "class": ["foo", "argh"], "name": "bar"}}]);
        checkParse('[name="bar"]#baz.foo.argh',
            [{'div': {"id": "baz", "class": ["foo", "argh"], "name": "bar"}}]);
    });

    test(".class1.classN", function () {
        checkParse(".foo.bar.baz", [{'div': {"class": ["foo", "bar", "baz"]}}]);
    });

    test("#id.class", function () {
        checkParse("#bar.foo", [{'div': {"id": "bar", "class": ["foo"]}}]);
    });

    test("#id.class1.classN", function () {
        checkParse("#bar.foo.baz", [{'div': {"id": "bar", "class": ["foo", "baz"]}}]);
    });

    test("tag#id", function () {
        checkParse("span#bar", [{"span": {"id": "bar"}}]);
    });

    test("tag.class", function () {
        checkParse("span.bar", [{"span": {"class": ["bar"]}}]);
    });

    test("tag.class1.classN", function () {
        checkParse("span.bar.baz", [{"span": {"class": ["bar", "baz"]}}]);
    });

    test("tag#id.class", function () {
        checkParse("span#foo.bar", [{"span": {"id": "foo", "class": ["bar"]}}]);
    });

    test("tag#id.class1.classN", function () {
        checkParse("span#foo.bar.baz", [{"span": {"id": "foo", "class": ["bar", "baz"]}}]);
    });

    test("tag * num", function () {
        checkParse("li * 1", [{'li': {}}]);
        checkParse("li * 2", [{'li': {}}, {'li': {}}]);
        checkParse("li * 3", [{'li': {}}, {'li': {}}, {'li': {}}]);
    });

    test("tag#id-$ * num", function () {
        checkParse("li#id-$ * 1", [{'li': {"id": "id-1"}}]);
        checkParse("li#id-$ * 2",
            [{'li': {"id": "id-1"}}, {'li': {"id": "id-2"}}]);
        checkParse("li#id-$ * 3",
            [{'li': {"id": "id-1"}}, {'li': {"id": "id-2"}}, {'li': {"id": "id-3"}}]);
    });

    test("tag.class * num", function () {
        checkParse("li.foo * 2",
            [{'li': {'class': ['foo']}}, {'li': {'class': ['foo']}}]);
    });

    test("{text}", function () {
        checkParse("{}", [""]);
        checkParse("{hello}", ["hello"]);
        checkParse("{hello world}", ["hello world"]);
        checkParse("{hello * world}", ["hello * world"]);
    });

    test("tag{text}", function () {
        checkParse("span {}",
            [{"span": {"$childs": [""]}}]);
        checkParse("p {hello}",
            [{"p": {"$childs": ["hello"]}}]);
        checkParse("em {hello world}",
            [{"em": {"$childs": ["hello world"]}}]);
        checkParse("strong {hello * world}",
            [{"strong": {"$childs": ["hello * world"]}}]);
    });

    test("tag * num {text}", function () {
        checkParse("p * 2 {hello}",
            [{"p": {"$childs": ["hello"]}}, {"p": {"$childs": ["hello"]}}]);
    });

    test("parent > child", function () {
        checkParse("p > em",
            [{"p": {"$childs": [{"em": {}}]}}]);
        checkParse("p > em {hello}",
            [{"p": {"$childs": [{"em": {"$childs": ["hello"]}}]}}]);
    });

    test("parent > child > other", function () {
        checkParse("div > p > em",
            [{"div": {"$childs": [{"p": {"$childs": [{"em": {}}]}}]}}]);

        checkParse("div > p {a} > em {b}",
            [{"div": {
                "$childs": [{"p": {
                    "$childs": ["a", {"em": {"$childs": ["b"]}}]}}]
            }}]);
    });

    test("parent * num > child", function () {
        checkParse("p * 2 > em",
            [
                {"p": {"$childs": [{"em": {}}]}},
                {"p": {"$childs": [{"em": {}}]}}
            ]);
    });

    test("sibling + sibling", function () {
        checkParse("p + em", [{"p": {}}, {"em": {}}]);
        checkParse("p#asd {foo} + em.baz {bar}", [
            {"p": {"id": "asd", "$childs": ["foo"]}},
            {"em": {"class": ["baz"], "$childs": ["bar"]}}]);
    });

    test("(tag)", function () {
        checkParse("(p)", [{"p": {}}]);

        checkParse(".foo > (p {hello} + em {user})",
            [{"div": {"class": ["foo"], "$childs": [
                {"p": {"$childs": ["hello"]}},
                {"em": {"$childs": ["user"]}}
                ]
            }}]);
    });
}());
