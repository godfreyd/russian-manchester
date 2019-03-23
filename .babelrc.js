module.exports.server = {
    presets: [['@babel/preset-env', {
        "targets": {
          "node": "current"
        }
      }], '@babel/preset-react'],
    plugins: [['babel-plugin-transform-require-ignore', {extensions: ['.css']}], '@babel/plugin-proposal-class-properties'],
    babelrc: false,
    ignore: [/node_modules/]
};

module.exports.client = {
    presets: [['@babel/preset-env',{
        "targets": {
          "node": "current"
        }
      }],  '@babel/preset-react'],
    plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties'],
    babelrc: false,
    ignore: [/node_modules/]
};
