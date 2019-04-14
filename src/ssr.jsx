/* eslint-disable global-require */
import { renderToString } from 'react-dom/server';
import { initSSR } from 'trowel-tools';
import Helmet from 'react-helmet';

const IS_PRODUCTION = (process.env.NODE_ENV === 'production');

const bundles = {
    index: require('./bundles/index').default
};

// Prevent XSS
function printWindowData(data) {
    const dataSource = JSON.stringify(data);

    return dataSource.replace(/([<>/\u2028\u2029])/g, '\\$1');
}

function renderDocument(helmet, { appHtml, appState, appData, tanker }) {
    return `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}

        ${helmet.link.toString()}
        ${IS_PRODUCTION
        ? `<link rel="stylesheet" href="${appData.staticHost}/build/${appData.bundle}.build.css"/>`
        : ''}

        ${helmet.script.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="mount">${appHtml}</div>
        <script nonce="${appData.nonce}">
            window.tanker = ${printWindowData(tanker)};
            window.globalConfig = ${printWindowData(appData)};
        </script>
        <script src="${appData.staticHost}/build/common.js"></script>
        <script src="${appData.staticHost}/build/${appData.bundle}.build.js"></script>
        <script nonce="${appData.nonce}">__init__.default(${printWindowData(appState)}, ${printWindowData(appData)});</script>
    </body>
</html>`;
}

/**
 * Server-side render
 * @param {String} bundleName    Name of bundle to render
 * @param {String} location      Location for router (e.g. req.url)
 * @param {*}      appData       Data passed to application
 * @param {*}      tanker        i18n data
 * @returns {Promise}
 */
export default async function ssr(bundleName, location, appData, tanker) {

    const bundle = bundles[bundleName];
    const result = {};

    if (!bundle) {
        throw new Error(`Bundle ${bundleName} not found`);
    }

    global.tanker = tanker;
    global.globalConfig = appData;

    // Get initial redux state
    const appState = await bundle.getInitialState();

    let appHtml = '';

    // Server-side rendering only in production
    if (IS_PRODUCTION) {
        // Create empty react-router context
        const routerContext = {};

        console.log('мы же не продакшн');

        // Init app
        const app = initSSR(bundle, { location, routerContext, appState, appData });

        // Server-side rendering
        appHtml = renderToString(app);

        result.redirectUrl = routerContext.url;
    }

    // Get helmet content
    const helmet = Helmet.renderStatic();


    result.html = renderDocument(helmet, { appHtml, appState, appData, tanker });

    return result;
}
