import request from '../../../lib/request';

export default {
    products({ login }) {
        return request(`user/products/${login}`);
    },

    info({ login }) {
        return request(`user/${login}`);
    },

    history({ id, ...query }) {
        return request(`user/events/${id}`, { query: [query] });
    },

    fetchUserSubscriptions() {
        return request('user/subscriptions');
    }
};
