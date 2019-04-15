import get from 'lodash/get';

/**
 * Получает значения для флективности числительных из ключа танкера
 * @param {String} message
 * @returns {String | String[]}
 */
function parseFlectivity(message = '') {
    const match = message.match(/{ one: (.*?), some: (.*?), many: (.*?), none: (.*?) }/);

    if (!match) {
        return message;
    }

    return match.slice(1);
}

function plural(count, messages) {
    if (!Array.isArray(messages)) {
        return messages;
    }

    if (count === 0) {
        return messages[3];
    }

    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return messages[0];
    }

    if (
        lastDigit >= 2 &&
        lastDigit <= 4 &&
        (lastTwoDigits < 10 || lastTwoDigits >= 20)
    ) {
        return messages[1];
    }

    return messages[2];
}

export function i18n(id, keyset = 'common', values) {
    let message = get(global.tanker, `${keyset}.${id}`, id);

    if (!values) {
        return message;
    }

    if ('count' in values) {
        const flectivityMessages = parseFlectivity(message);

        message = plural(values.count, flectivityMessages);
    }

    const params = Object.keys(values);

    for (const param of params) {
        message = (message || '')
            .toString()
            .replace(`{${param}}`, values[param]);
    }

    return message;
}

export function hasKey(id, keyset = 'common') {
    return Boolean(get(global.tanker, `${keyset}.${id}`));
}

export default i18n;
