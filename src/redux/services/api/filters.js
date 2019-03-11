import request from './request';

export default {
    fetch() {
        return request('filters', { method: 'GET' });
    }
};
