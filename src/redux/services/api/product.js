import request from './request';

export default {

    save(body) {
        console.log('fffff')
        console.log(body)

        return request('textile/save', { body, method: 'POST' });
    }
};
