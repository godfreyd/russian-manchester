import request from './request';

export default {
    edit(body) {
        return request('tesseract', { body, method: 'POST' });
    },

    fetchCubeHistory({ id, ...query }) {
        return request(`tesseract/events/${id}`, { query: [query] });
    },

    fetchLastEvents({ id }) {
        return request(`tesseract/devices/${id}`);
    }
};
