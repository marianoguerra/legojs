/* description: Parses end executes lego selectors. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"\"".*?"\""           return 'STRING'
[0-9]+                return 'NUMBER'
[a-zA-Z\$][a-zA-Z0-9\-\$]* return 'IDENTIFIER'
"{".*?"}"             return 'TEXT'

"#"                   return '#'
"."                   return '.'
">"                   return '>'
"<"                   return '<'
"+"                   return '+'
"*"                   return '*'
"["                   return '['
"]"                   return ']'
"("                   return '('
")"                   return ')'
"="                   return '='
"|"                   return '|'

<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

%start root

%% /* language grammar */

root 
    : node_sibling EOF
        { return $1; }
    ;

node_sibling
    : node_child
        { $$ = $1 }
    | node_child '+' node_sibling
        {
            $$ = $1.concat($3);
        }
    ;

node_child 
    : node_text
        { $$ = $1 }
    | node_text '>' node_child
        {
            var i, key, obj, name = unescape("%24childs");
            for (i in $1) {
                for (key in $1[i]) {
                    obj = $1[i];
                    obj[key][name] = (obj[key][name] || []).concat($3);
                    break;
                }
            }

            $$ = $1;
        }
    ;

node_text
    : TEXT
        { $$ = [$1.slice(1, ($1.length - 1))]; }

    | node_times
        { $$ = $1; }

    | node_times TEXT
        {
            var i, key, obj, name = unescape("%24childs");
            for (i in $1) {
                for (key in $1[i]) {
                    obj = $1[i];
                    obj[key][name] = obj[key][name] || [];
                    obj[key][name].push($2.slice(1, ($2.length - 1)));
                    break;
                }
            }

            $$ = $1;
        }
    ;

node_times
    : node
        { $$ = [].concat($1); }
    | node '*' NUMBER
        {
            var i, items = [], size = parseInt($3, 10), obj;

            for (i = 0; i < size; i += 1) {
                obj = JSON.parse(JSON.stringify($1));

                for (key in obj) {
                    if (obj[key].id) {
                        obj[key].id = obj[key].id.replace(/\$/g, "" + (i + 1));
                    }

                    break;
                }

                items.push(obj);
            }

            $$ = items;
        };


node
    : IDENTIFIER
        {
            var obj = {};
            obj[$1] = {};

            $$ = obj;
        }
    | attrs
        { $$ = {'div': $1}}
    | classes
        { $$ = {'div': {'class': $1}}; }

    | id 
        { $$ = {'div': {'id': $1}}; }
    | id classes
        { $$ = {'div': {'id': $1, 'class': $2}}; }

    | attrs classes
        {
            var obj = $1;
            obj["class"] = $2;

            $$ = {'div': obj};
        }

    | attrs id 
        {
            var obj = $1;
            obj["id"] = $2;

            $$ = {'div': obj};
        }
    | attrs id classes
        {
            var obj = $1;
            obj["id"] = $2;
            obj["class"] = $3;

            $$ = {'div': obj};
        }

    | IDENTIFIER id 
        {
            var obj = {};
            obj[$1] = {'id': $2};

            $$ = obj;
        }

    | IDENTIFIER classes
        {
            var obj = {};
            obj[$1] = {'class': $2};

            $$ = obj;
        }

    | IDENTIFIER id classes
        {
            var obj = {};
            obj[$1] = {'id': $2, 'class': $3};

            $$ = obj;
        }

    | IDENTIFIER attrs
        {
            var obj = {};
            obj[$1] = $2;

            $$ = obj;
        }

    | IDENTIFIER attrs id 
        {
            var obj = {};
            obj[$1] = $2;
            obj[$1]['id'] = $3;

            $$ = obj;
        }

    | IDENTIFIER attrs classes
        {
            var obj = {};
            obj[$1] = $2;
            obj[$1]['class'] = $3;

            $$ = obj;
        }

    | IDENTIFIER attrs id classes
        {
            var obj = {};
            obj[$1] = $2;
            obj[$1]['id'] = $3;
            obj[$1]['class'] = $4;

            $$ = obj;
        }

    | '(' node_sibling ')'
        { $$ = $2; }
    ;

id : 
    '#' IDENTIFIER
        { $$ = $2; };

class
    : '.' IDENTIFIER
        { $$ = [$2]; };

classes
    : class
        { $$ = $1; }
    | class classes
        { $$ = $1.concat($2); }
    ;

attrs
    : '[' attrvals ']'
        { $$ = $2; };

attrval
    : IDENTIFIER '=' STRING
        {
            var obj = {};

            obj[$1] = $3.slice(1, ($3.length - 1));

            $$ = obj;
        };

attrvals
    : attrval
        { $$ = $1; }
    | attrval attrvals
        {
            for (var key in $1) {
                $2[key] = $1[key];
            }

            $$ = $2;
        }
    ;
