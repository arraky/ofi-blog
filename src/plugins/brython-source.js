module.exports = function (context, options) {
    return {
        name: 'brython-source',
        injectHtmlTags({ content }) {
            const remoteHeadTags = content ? content.remoteHeadTags : [];
            const brython_pips = [];
            ([
                'https://raw.githack.com/lebalz/ofi-blog/main/static/js/cowsay.brython.js'
            ]).forEach(pip => {
                brython_pips.push(
                    {
                        tagName: 'script',
                        attributes: {
                            src: pip,
                            crossorigin: "anonymous",
                            referrerpolicy: "no-referrer"
                        },
                    }
                );
            });
            return {
                headTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            // src: "https://raw.githack.com/brython-dev/brython/master/www/src/brython.js",
                            src: "https://cdn.jsdelivr.net/npm/brython@3.11.0/brython.min.js",
                            crossorigin: "anonymous",
                            referrerpolicy: "no-referrer"
                        },
                    },
                    {
                        tagName: 'script',
                        attributes: {
                            // src: "https://raw.githack.com/brython-dev/brython/master/www/src/brython_stdlib.js",
                            src: "https://cdn.jsdelivr.net/npm/brython@3.11.0/brython_stdlib.js",
                            crossorigin: "anonymous",
                            referrerpolicy: "no-referrer"
                        },
                    },
                    ...brython_pips,
                    ...remoteHeadTags,
                ],
            };
        }
    }

}
