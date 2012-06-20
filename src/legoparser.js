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
/* Jison generated parser */
var legoparser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"node_sibling":4,"EOF":5,"node_child":6,"+":7,"node_text":8,">":9,"TEXT":10,"node_times":11,"node":12,"*":13,"NUMBER":14,"IDENTIFIER":15,"attrs":16,"classes":17,"id":18,"(":19,")":20,"#":21,"class":22,".":23,"[":24,"attrvals":25,"]":26,"attrval":27,"=":28,"STRING":29,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"+",9:">",10:"TEXT",13:"*",14:"NUMBER",15:"IDENTIFIER",19:"(",20:")",21:"#",23:".",24:"[",26:"]",28:"=",29:"STRING"},
productions_: [0,[3,2],[4,1],[4,3],[6,1],[6,3],[8,1],[8,1],[8,2],[11,1],[11,3],[12,1],[12,1],[12,1],[12,1],[12,2],[12,2],[12,2],[12,3],[12,2],[12,2],[12,3],[12,2],[12,3],[12,3],[12,4],[12,3],[18,2],[22,2],[17,1],[17,2],[16,3],[27,3],[25,1],[25,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1]; 
break;
case 2: this.$ = $$[$0] 
break;
case 3:
            this.$ = $$[$0-2].concat($$[$0]);
        
break;
case 4: this.$ = $$[$0] 
break;
case 5:
            var i, key, obj, name = unescape("%24childs");
            for (i in $$[$0-2]) {
                for (key in $$[$0-2][i]) {
                    obj = $$[$0-2][i];
                    obj[key][name] = (obj[key][name] || []).concat($$[$0]);
                    break;
                }
            }

            this.$ = $$[$0-2];
        
break;
case 6: this.$ = [$$[$0].slice(1, ($$[$0].length - 1))]; 
break;
case 7: this.$ = $$[$0]; 
break;
case 8:
            var i, key, obj, name = unescape("%24childs");
            for (i in $$[$0-1]) {
                for (key in $$[$0-1][i]) {
                    obj = $$[$0-1][i];
                    obj[key][name] = obj[key][name] || [];
                    obj[key][name].push($$[$0].slice(1, ($$[$0].length - 1)));
                    break;
                }
            }

            this.$ = $$[$0-1];
        
break;
case 9: this.$ = [].concat($$[$0]); 
break;
case 10:
            var i, items = [], size = parseInt($$[$0], 10), obj;

            for (i = 0; i < size; i += 1) {
                obj = JSON.parse(JSON.stringify($$[$0-2]));

                for (key in obj) {
                    if (obj[key].id) {
                        obj[key].id = obj[key].id.replace(/\$/g, "" + (i + 1));
                    }

                    break;
                }

                items.push(obj);
            }

            this.$ = items;
        
break;
case 11:
            var obj = {};
            obj[$$[$0]] = {};

            this.$ = obj;
        
break;
case 12: this.$ = {'div': $$[$0]}
break;
case 13: this.$ = {'div': {'class': $$[$0]}}; 
break;
case 14: this.$ = {'div': {'id': $$[$0]}}; 
break;
case 15: this.$ = {'div': {'id': $$[$0-1], 'class': $$[$0]}}; 
break;
case 16:
            var obj = $$[$0-1];
            obj["class"] = $$[$0];

            this.$ = {'div': obj};
        
break;
case 17:
            var obj = $$[$0-1];
            obj["id"] = $$[$0];

            this.$ = {'div': obj};
        
break;
case 18:
            var obj = $$[$0-2];
            obj["id"] = $$[$0-1];
            obj["class"] = $$[$0];

            this.$ = {'div': obj};
        
break;
case 19:
            var obj = {};
            obj[$$[$0-1]] = {'id': $$[$0]};

            this.$ = obj;
        
break;
case 20:
            var obj = {};
            obj[$$[$0-1]] = {'class': $$[$0]};

            this.$ = obj;
        
break;
case 21:
            var obj = {};
            obj[$$[$0-2]] = {'id': $$[$0-1], 'class': $$[$0]};

            this.$ = obj;
        
break;
case 22:
            var obj = {};
            obj[$$[$0-1]] = $$[$0];

            this.$ = obj;
        
break;
case 23:
            var obj = {};
            obj[$$[$0-2]] = $$[$0-1];
            obj[$$[$0-2]]['id'] = $$[$0];

            this.$ = obj;
        
break;
case 24:
            var obj = {};
            obj[$$[$0-2]] = $$[$0-1];
            obj[$$[$0-2]]['class'] = $$[$0];

            this.$ = obj;
        
break;
case 25:
            var obj = {};
            obj[$$[$0-3]] = $$[$0-2];
            obj[$$[$0-3]]['id'] = $$[$0-1];
            obj[$$[$0-3]]['class'] = $$[$0];

            this.$ = obj;
        
break;
case 26: this.$ = $$[$0-1]; 
break;
case 27: this.$ = $$[$0]; 
break;
case 28: this.$ = [$$[$0]]; 
break;
case 29: this.$ = $$[$0]; 
break;
case 30: this.$ = $$[$0-1].concat($$[$0]); 
break;
case 31: this.$ = $$[$0-1]; 
break;
case 32:
            var obj = {};

            obj[$$[$0-2]] = $$[$0].slice(1, ($$[$0].length - 1));

            this.$ = obj;
        
break;
case 33: this.$ = $$[$0]; 
break;
case 34:
            for (var key in $$[$0-1]) {
                $$[$0][key] = $$[$0-1][key];
            }

            this.$ = $$[$0];
        
break;
}
},
table: [{3:1,4:2,6:3,8:4,10:[1,5],11:6,12:7,15:[1,8],16:9,17:10,18:11,19:[1,12],21:[1,15],22:14,23:[1,16],24:[1,13]},{1:[3]},{5:[1,17]},{5:[2,2],7:[1,18],20:[2,2]},{5:[2,4],7:[2,4],9:[1,19],20:[2,4]},{5:[2,6],7:[2,6],9:[2,6],20:[2,6]},{5:[2,7],7:[2,7],9:[2,7],10:[1,20],20:[2,7]},{5:[2,9],7:[2,9],9:[2,9],10:[2,9],13:[1,21],20:[2,9]},{5:[2,11],7:[2,11],9:[2,11],10:[2,11],13:[2,11],16:24,17:23,18:22,20:[2,11],21:[1,15],22:14,23:[1,16],24:[1,13]},{5:[2,12],7:[2,12],9:[2,12],10:[2,12],13:[2,12],17:25,18:26,20:[2,12],21:[1,15],22:14,23:[1,16]},{5:[2,13],7:[2,13],9:[2,13],10:[2,13],13:[2,13],20:[2,13]},{5:[2,14],7:[2,14],9:[2,14],10:[2,14],13:[2,14],17:27,20:[2,14],22:14,23:[1,16]},{4:28,6:3,8:4,10:[1,5],11:6,12:7,15:[1,8],16:9,17:10,18:11,19:[1,12],21:[1,15],22:14,23:[1,16],24:[1,13]},{15:[1,31],25:29,27:30},{5:[2,29],7:[2,29],9:[2,29],10:[2,29],13:[2,29],17:32,20:[2,29],22:14,23:[1,16]},{15:[1,33]},{15:[1,34]},{1:[2,1]},{4:35,6:3,8:4,10:[1,5],11:6,12:7,15:[1,8],16:9,17:10,18:11,19:[1,12],21:[1,15],22:14,23:[1,16],24:[1,13]},{6:36,8:4,10:[1,5],11:6,12:7,15:[1,8],16:9,17:10,18:11,19:[1,12],21:[1,15],22:14,23:[1,16],24:[1,13]},{5:[2,8],7:[2,8],9:[2,8],20:[2,8]},{14:[1,37]},{5:[2,19],7:[2,19],9:[2,19],10:[2,19],13:[2,19],17:38,20:[2,19],22:14,23:[1,16]},{5:[2,20],7:[2,20],9:[2,20],10:[2,20],13:[2,20],20:[2,20]},{5:[2,22],7:[2,22],9:[2,22],10:[2,22],13:[2,22],17:40,18:39,20:[2,22],21:[1,15],22:14,23:[1,16]},{5:[2,16],7:[2,16],9:[2,16],10:[2,16],13:[2,16],20:[2,16]},{5:[2,17],7:[2,17],9:[2,17],10:[2,17],13:[2,17],17:41,20:[2,17],22:14,23:[1,16]},{5:[2,15],7:[2,15],9:[2,15],10:[2,15],13:[2,15],20:[2,15]},{20:[1,42]},{26:[1,43]},{15:[1,31],25:44,26:[2,33],27:30},{28:[1,45]},{5:[2,30],7:[2,30],9:[2,30],10:[2,30],13:[2,30],20:[2,30]},{5:[2,27],7:[2,27],9:[2,27],10:[2,27],13:[2,27],20:[2,27],23:[2,27]},{5:[2,28],7:[2,28],9:[2,28],10:[2,28],13:[2,28],20:[2,28],23:[2,28]},{5:[2,3],20:[2,3]},{5:[2,5],7:[2,5],20:[2,5]},{5:[2,10],7:[2,10],9:[2,10],10:[2,10],20:[2,10]},{5:[2,21],7:[2,21],9:[2,21],10:[2,21],13:[2,21],20:[2,21]},{5:[2,23],7:[2,23],9:[2,23],10:[2,23],13:[2,23],17:46,20:[2,23],22:14,23:[1,16]},{5:[2,24],7:[2,24],9:[2,24],10:[2,24],13:[2,24],20:[2,24]},{5:[2,18],7:[2,18],9:[2,18],10:[2,18],13:[2,18],20:[2,18]},{5:[2,26],7:[2,26],9:[2,26],10:[2,26],13:[2,26],20:[2,26]},{5:[2,31],7:[2,31],9:[2,31],10:[2,31],13:[2,31],20:[2,31],21:[2,31],23:[2,31]},{26:[2,34]},{29:[1,47]},{5:[2,25],7:[2,25],9:[2,25],10:[2,25],13:[2,25],20:[2,25]},{15:[2,32],26:[2,32]}],
defaultActions: {17:[2,1],44:[2,34]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this._input = this.match.slice(n) + this._input;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/\n.*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
            this.yytext += match[0];
            this.match += match[0];
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 29
break;
case 2:return 14
break;
case 3:return 15
break;
case 4:return 10
break;
case 5:return 21
break;
case 6:return 23
break;
case 7:return 9
break;
case 8:return '<'
break;
case 9:return 7
break;
case 10:return 13
break;
case 11:return 24
break;
case 12:return 26
break;
case 13:return 19
break;
case 14:return 20
break;
case 15:return 28
break;
case 16:return '|'
break;
case 17:return 5
break;
case 18:return 'INVALID'
break;
}
};
lexer.rules = [/^\s+/,/^".*?"/,/^[0-9]+/,/^[a-zA-Z\$][a-zA-Z0-9\-\$]*/,/^\{.*?\}/,/^#/,/^\./,/^>/,/^</,/^\+/,/^\*/,/^\[/,/^\]/,/^\(/,/^\)/,/^=/,/^\|/,/^$/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = legoparser;
exports.parse = function () { return legoparser.parse.apply(legoparser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}    return legoparser;
}));
