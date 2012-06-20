#!/usr/bin/env sh
jison src/legoparser.jison -o src/legoparser.js
cat templates/legoparser.start.js src/legoparser.js templates/legoparser.end.js > src/legoparser.js.tmp
mv src/legoparser.js.tmp src/legoparser.js
