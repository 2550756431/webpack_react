import { saveAs } from 'file-saver';
import htmlToText from 'html-to-text';
const txtExport = function (fileName, extendDom) {
    console.log(extendDom, "wordDom");
    console.log(extendDom.innerHTML, "wordDom");
    const html = `${extendDom.innerHTML}`;

    const text = htmlToText.fromString(html, {
        wordwrap: 130,
        baseElement: {
            selectors: [

                { selector: 'p', options: { baseUrl: 'https://example.com' } },

                { selector: 'h1', options: { baseUrl: 'https://example.com' } }

            ],
            orderBy: "occurrence",
            // occurrence ---(arrange base elements in the order they are found in the input document.)
            //  selectors ---(arrange base elements in the same order as `baseElements.selectors`)
        },
        ignoreHref: true,
        formatters: {
            // Create a formatter.
            'heading': function (elem, walk, builder, formatOptions) {
                console.log(walk,"walkwalk");
                console.log(builder,"builderbuilder");
                console.log(formatOptions,"formatOptions");
              builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 1 });
              walk(elem.children, builder);
              builder.addInline('!');
              builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 1 });
            }
          },
    });
    console.log(text);

    const data = new Blob([text], {
        type: "text/plain;charset=utf-8"
    })
    // saveAs(data, fileName + ".txt")



};

export default txtExport;
// document.body.innerHTML.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ');