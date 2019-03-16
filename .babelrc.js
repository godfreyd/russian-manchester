module.exports.server = {
    presets: ['es2015-node6', 'stage-0', 'react'],
    plugins: [['transform-require-ignore', {extensions: ['.css']}], 'transform-decorators-legacy'],
    babelrc: false,
    ignore: /node_modules/
};

module.exports.client = {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['react-hot-loader/babel', 'transform-decorators-legacy'],
    babelrc: false,
    ignore: /node_modules/
};
