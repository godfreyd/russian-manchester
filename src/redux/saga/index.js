import watchProductAsync from './product';

export default function *rootSaga() {
    yield [
        watchProductAsync()
    ];
}
