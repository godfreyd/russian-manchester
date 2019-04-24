import request from '../../../lib/request';

export default {
    edit({ id, ...body }) {
        return request(`tesseract/${id}`, { body, method: 'PATCH' });
    },

    fetchCubeHistory({ id, ...query }) {
        return request(`tesseract/events/${id}`, { query: [query] });
    },

    fetchLastEvents({ id }) {
        return request(`tesseract/products/${id}`);
    },

    save({ slotsSchema, ...body }) {
        return request('tesseract', { body, method: 'POST', query: [{ slotsSchema }] });
    }
};
