// Унести урл до апи в конфиг
// eslint-disable-next-line no-nested-ternary
const apiBaseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/v1/' :
    process.env.NODE_ENV === 'testing' ? 'http://localhost:3001/v1/' : '/v1/';

export default function *request(path, options = {}) {
    options = { json: true, ...options };

    const requestUrl = getRequestUrl(path, options.query);
    const requestOptions = getRequestOptions(options);

    const response = yield fetch(requestUrl, requestOptions);

    if (response.status === 204) {
        return {};
    }

    const body = options.json ? yield response.json() : yield response.text();

    if (!response.ok) {
        throw body;
    }

    return body;
}

function getRequestUrl(path, optionsQuery = []) {
    let resultQueryString = '?';

    for (const query of optionsQuery) {
        const currentQueryString = Object.keys(query).map(key => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`;
        })
            .join('&');

        resultQueryString += currentQueryString ? `&${currentQueryString}` : '';
    }

    return `${apiBaseUrl}${path}${resultQueryString}`;
}

function getRequestOptions(options) {
    const requestOptions = {
        credentials: 'include',
        ...options,
        method: (options.method || 'GET').toUpperCase(),
        headers: {
            ...options.headers
        }
    };

    if (options.json) {
        requestOptions.headers['Content-Type'] = 'application/json';

        if (requestOptions.body) {
            requestOptions.body = JSON.stringify(requestOptions.body);
        }
    }

    return requestOptions;
}
