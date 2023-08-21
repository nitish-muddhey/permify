function Theme() {
    let bg = window.getComputedStyle(document.documentElement).getPropertyValue('--background-base').trim()
    return {
        base: 'vs-dark',
        inherit: true,
        rules: [
            {token: 'keyword', foreground: 'A274FF', fontStyle: 'bold'},
            {token: 'option', foreground: 'BCE089FF'},
            {token: 'comment', foreground: '21A65F'},
            {token: 'string', foreground: 'F7F3FF'},
            {token: 'variable', foreground: 'F7F3FF'},
            {token: 'type', foreground: '93F1EE'},
        ],
        colors: {
            "editor.background": bg,
        }
    }
}

export default Theme