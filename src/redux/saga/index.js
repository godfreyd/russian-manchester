import watchProductsAsync from './products';
import watchProductAsync from './product';
import watchFiltersAsync from './filters';
import watchMyProductsAsync from './my-products';
import watchOfficesAsync from './offices';
import watchTesseractAsync from './tesseract';
import watchUserAsync from './user';

export default function *rootSaga() {
    yield [
        watchProductsAsync(),
        watchProductAsync(),
        watchFiltersAsync(),
        watchMyProductsAsync(),
        watchOfficesAsync(),
        watchTesseractAsync(),
        watchUserAsync()
    ];
}
