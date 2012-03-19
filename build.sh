#!/usr/bin/env sh
jison src/legoparser.jison -o src/legoparser.js
cat templates/jquery.lego.web.start.js src/jquery.lego.js src/legoparser.js templates/jquery.lego.web.end.js > jquery.lego.web.js
cat templates/jquery.lego.require.start.js src/jquery.lego.js src/legoparser.js templates/jquery.lego.require.end.js > jquery.lego.requirejs.js   
