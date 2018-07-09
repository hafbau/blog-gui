import ReactHTMLParser from 'react-html-parser';
import hljs from 'highlightjs';
import marked from 'marked';
import '../../node_modules/highlightjs/styles/agate.css';

const fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;
function fixMarkup(value) {
    return value.replace(fixMarkupRe, function (match, p1) {
        if (match === '\n') {
            return '<br>';
        } //else if (options.tabReplace) {
        //     return p1.replace(/\t/g, options.tabReplace);
        // }
        return '';
    });
}

function highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(lang, str).value;
        } catch (err) { }
    }
    try {
        return hljs.highlightAuto(str).value;
    } catch (err) { }

    return ''; // use external default escaping
}

marked.setOptions({
    highlight: (code, language) => fixMarkup(
        highlight(code, language)
    )
})

export default function Markdown({ text }) {
    return ReactHTMLParser(marked(`${text}`))
}