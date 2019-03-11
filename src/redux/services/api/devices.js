import request from './request';

export default {
    fetch({ payload }) {
        return request('devices', { query: payload, method: 'GET' });
    },

    suggest(query) {
        return request('devices/suggest', { query });
    }
};
