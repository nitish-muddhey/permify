function SyntaxDefinition() {
    return {
        keywords: ["entity", "action", "relation", "and", "or", "not", "permission"],
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        symbols:  /[=><!~?:&|+\-*\/\^%]+/,
        tokenizer: {
            root: [
                [/\B@\w+#?\w+/, 'type'],
                [/`(?:[^`\\]|\\.)*`/, 'option'],
                [/@?[a-zA-Z][\w$]*/, {
                    cases: {
                        "@keywords": 'keyword',
                        "@default": 'variable'
                    }
                }],
                { include: '@whitespace' },
                [/".*?"/, 'string'],
            ],
            comment: [
                [/(\/\/)(.+?)(?=[\n\r]|\*\))/, 'comment'],
            ],
            whitespace: [
                [/[ \t\r\n]+/, 'white'],
                [/\/\*/,       'comment', '@comment' ],
                [/\/\/.*$/,    'comment'],
            ],
        },
    };
}

export default SyntaxDefinition
