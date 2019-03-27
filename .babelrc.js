module.exports.client = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        'react-hot-loader/babel'
    ],
    babelrc: false,
    ignore: [/node_modules/]
};

module.exports.server = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      ['babel-plugin-transform-require-ignore', {extensions: ['.css']}],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ],
    babelrc: false,
    ignore: [/node_modules/]
};
