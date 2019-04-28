import queryString from 'querystringify';

import i18n from '../components/i18n';

export const getHistoryDate = ts => new Date(ts).toLocaleString(i18n('history-locale', 'product'));

export const getQueries = location => queryString.parse(location.search);

export const parseSlot = slot => {
    const [, row, cell] = slot.match(/^([A-Z]+)(\d+)$/) || [];

    return { row, cell };
};

export const parseTicket = value => {
    if (/st\.yandex-team\.ru\/[a-zA-Z]+-\d+/.test(value) || /^[a-zA-Z]+-\d+$/.test(value)) {
        const [ticket] = value.match(/[a-zA-Z]+-\d+/);

        return ticket;
    }

    return null;
};
