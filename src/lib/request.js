export default function *request(path, options = {}) {
    options = { json: true, ...options };

    const requestUrl = getRequestUrl(path, options.query);
    const requestOptions = getRequestOptions(options);

    const response = yield fetch(requestUrl, requestOptions);

    const contentType = response.headers.get('content-type');

    const body = contentType && contentType.includes('application/json')
        ? yield response.json()
        : yield response.text();

    if (!response.ok) {
        throw body;
    }

    return body;
}

function getRequestUrl(path, optionsQuery = []) {
    const url = `${globalConfig.apiBaseUrl}/${path}`;

    if (optionsQuery.length) {
        const resultQueryString = optionsQuery
            .map(query => {
                return Object
                    .keys(query)
                    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
                    .join('&');
            })
            .filter(Boolean)
            .join('&');

        return `${url}?${resultQueryString}`;
    }

    return url;
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
