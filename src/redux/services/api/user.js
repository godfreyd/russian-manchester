import request from './request';

export default {
    devices({ login = '' }) {
        return request(`user/devices/${login}`);
    },

    info({ login }) {
        return request(`user/${login}`);
    },

    history({ login, ...query }) {
        return request(`user/events/${login}`, { query: [query] });
    },

    fetchUserSubscriptions() {
        return request('user/subscriptions');
    }
};
