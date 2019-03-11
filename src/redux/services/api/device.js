import request from './request';

export default {
    fetchDevice({ payload }) {
        return request(`device/${payload}`, { method: 'GET' });
    },

    save(body) {
        return request('device', { body, method: 'POST' });
    },

    lock(deviceId) {
        return request('lock', { body: { deviceId }, method: 'POST' });
    },

    unlock(deviceId) {
        return request('lock', { body: { deviceId }, method: 'DELETE' });
    },

    grab(deviceId) {
        return request('device/takeAway', { body: { deviceId }, method: 'POST' });
    },

    toService(deviceId) {
        return request('device/toService', { body: { deviceId }, method: 'POST' });
    },

    fetchDeviceModel({ payload }) {
        return request(`deviceModel/${payload}`, { method: 'GET' });
    },

    fetchDeviceModels({ payload }) {
        return request('deviceModels', { query: payload, method: 'GET' });
    },

    fetchDeviceHistory({ id, ...query }) {
        return request(`device/events/${id}`, { query: [query] });
    },

    subscribe({ deviceId, method }) {
        return request('device/subscribe', { body: { deviceId }, method });
    },

    fetchDeviceSubscriptions({ id, ...query }) {
        return request(`device/subscriptions/${id}`, { query: [query] });
    },

    destroy(deviceId) {
        return request('device/destroy/', { body: { deviceId }, method: 'POST' });
    },

    public({ payload }) {
        return request('device/public', { body: payload, method: 'POST' });
    }
};
