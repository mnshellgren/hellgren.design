module.exports = {
    preloads: [
        {
            as: "font",
            type: "font/woff2",
            href: "{{ fonts.body.weights.regular.url }}",
            crossorigin: true
        }
    ]
};