import request from '../../../lib/request';

export default {
    fetchProduct({ payload }) {
        return request(`product/${payload}`, { method: 'GET' });
    },

    save(body) {
        return request('product', { body, method: 'POST' });
    },

    lock(productId) {
        return request('lock', { body: { productId }, method: 'POST' });
    },

    unlock(productId) {
        return request('lock', { body: { productId }, method: 'DELETE' });
    },

    grab(productId) {
        return request('product/takeAway', { body: { productId }, method: 'POST' });
    },

    toService(payload) {
        return request('product/toService', { body: payload, method: 'POST' });
    },

    fetchProductModel({ payload }) {
        return request(`productModel/${payload}`, { method: 'GET' });
    },

    fetchProductModels({ payload }) {
        return request('productModels', { method: 'GET', query: payload });
    },

    fetchProductHistory({ id, ...query }) {
        return request(`product/events/${id}`, { query: [query] });
    },

    subscribe({ productId, method }) {
        return request('product/subscribe', { body: { productId }, method });
    },

    fetchProductSubscriptions({ id, ...query }) {
        return request(`product/subscriptions/${id}`, { query: [query] });
    },

    destroy(payload) {
        return request('product/destroy/', { body: payload, method: 'POST' });
    },

    public({ payload }) {
        return request('product/public', { body: payload, method: 'POST' });
    }
};
