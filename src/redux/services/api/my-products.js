import request from '../../../lib/request';

export default {
    fetch() {
        return request('user/products');
    }
};
