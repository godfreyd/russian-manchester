import request from './request';

export default {

    save(body) {
        return request('textile/save', { body, method: 'POST' });
    }
};
