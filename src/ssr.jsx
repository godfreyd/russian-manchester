function renderDocument() {
    const IS_PRODUCTION = (process.env.NODE_ENV === 'production');

    return `<!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>Title of the document</title>
        ${IS_PRODUCTION ? `<link rel="stylesheet" href="build/common.build.css"/>`: ''}
    </head>
    <body>
        The content of the document......
        <div id="root"></div>
        <script src="build/common.js" type="text/javascript"></script>
        <script src="build/index.build.js" type="text/javascript"></script>
    </body>
    </html>`;
}

module.exports.default = () => {

    const result = {};

    result.html = renderDocument();

    return result;
}
