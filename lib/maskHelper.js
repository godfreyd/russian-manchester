module.exports.maskProps = function maskProps(object, props) {
    if (!object) {
        return object;
    }

    return Object
        .keys(object)
        .reduce((acc, key) => {
            acc[key] = props.includes(key) ? 'XXXXX' : object[key];

            return acc;
        }, {});
};
