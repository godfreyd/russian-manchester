import { connect } from 'react-redux';
import {
    clearDeviceStore,
    destroyDevice,
    saveDevicePublicInfo,
    fetchDevice,
    fetchDeviceModel,
    grabDevice,
    lockDevice,
    saveDevice,
    subscribeToDevice,
    toServiceDevice,
    unlockDevice
} from '../../redux/actions/device';

import DeviceCard from './device-card';

export default connect(mapStateToProps, mapDispatchToProps)(DeviceCard);

function mapStateToProps(state) {
    const { rows: subscriptions = [] } = state.device.subscriptions;

    return {
        actionInprogress: state.device.actionInprogress,
        deviceInfo: state.device.device,
        disableControls: state.device.actionInprogress,
        fetchInprogress: state.device.fetchInprogress,
        filtersValue: state.filters.filtersValue,
        hasSubscriptions: subscriptions.length > 0,
        modelInfo: state.device.modelInfo,
        models: state.device.models
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearDeviceStore: () => dispatch(clearDeviceStore()),
        destroyDevice: id => dispatch(destroyDevice(id)),
        getDeviceInfo: id => dispatch(fetchDevice(id)),
        getMarketModelInfo: id => dispatch(fetchDeviceModel(id)),
        grabDevice: id => dispatch(grabDevice(id)),
        lockDevice: id => dispatch(lockDevice(id)),
        saveDevice: body => dispatch(saveDevice(body)),
        subscribeToDevice: (deviceId, method) => dispatch(subscribeToDevice({ deviceId, method })),
        toServiceDevice: id => dispatch(toServiceDevice(id)),
        unlockDevice: id => dispatch(unlockDevice(id)),
        saveDevicePublicInfo: body => dispatch(saveDevicePublicInfo(body))
    };
}
