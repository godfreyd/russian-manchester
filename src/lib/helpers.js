import queryString from 'querystringify';

export function getQueries(location) {
    return queryString.parse(location.search);
}

export function parseSlot(slot) {
    const [, row, cell] = slot.match(/^([A-Z]+)(\d+)$/) || [];

    return { row, cell };
}

export function getHistoryDate(ts) {
    return new Date(ts).toLocaleString('history-locale');
}
