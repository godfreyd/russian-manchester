import request from '../../../lib/request';

export default {
    fetch({ payload }) {
        return request('products', { method: 'GET', query: payload });
    },

    suggest(query) {
        return request('products/suggest', { query });
    }
};
