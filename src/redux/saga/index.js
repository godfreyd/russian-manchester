import watchDevicesAsync from './devices';
import watchDeviceAsync from './device';
import watchFiltersAsync from './filters';
import watchMyDevicesAsync from './mydevices';
import watchUserAsync from './user';
import watchTesseractAsync from './tesseract';

export default function *rootSaga() {
    yield [
        watchDevicesAsync(),
        watchDeviceAsync(),
        watchFiltersAsync(),
        watchMyDevicesAsync(),
        watchUserAsync(),
        watchTesseractAsync()
    ];
}
