import request from './request';

export default {

    save(body) {
        return request('textile', { body, method: 'POST' });
    }
};
