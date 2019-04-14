const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = process.env.NODE_ENV;
const IS_PRODUCTION = (env === 'production');

let stylesLoader = [
    IS_PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            plugins: () => [
                require('postcss-nested'),
                require('postcss-preset-env')({
                    features: {
                        'custom-properties': true
                    }
                })
            ]
        }
    }
];

const commonLibs = [
    '@babel/polyfill',

    'local-storage',

    'lodash/get',
    'lodash/flatten',
    'lodash/find',
    'lodash/groupBy',
    'lodash/isEmpty',
    'lodash/isEqual',
    'lodash/map',
    'lodash/mapKeys',
    'lodash/mapValues',
    'lodash/omit',
    'lodash/partition',
    'lodash/pick',
    'lodash/set',

    'querystringify',

    'react',
    'react-dom',
    'react-router-dom',

    '@bem-react/classname',
    'prop-types',

    'redux',
    'react-redux',

    'redux-actions',
    'redux-saga',

    'react-addons-css-transition-group',
    'react-copy-to-clipboard',
    'react-helmet',
    'react-highlight-words',
    'react-hover-observer',
    'react-notification-system',

    'throttle-debounce',

    '@sentry/browser'
];

const config = {
    mode: IS_PRODUCTION ? 'production' : 'development',
    name: 'client',
    entry: {
        index: IS_PRODUCTION ? [
            '@babel/polyfill',
            path.join(__dirname, '../src/bundles/index/entry')
        ] : [
                '@babel/polyfill',
                'react-hot-loader/patch',
                'webpack-hot-middleware/client',
                path.join(__dirname, '../src/bundles/index/entry')
            ],
        common: commonLibs
    },
    output: {
        path: path.join(__dirname, '../static/build'),
        filename: '[name].build.js',
        libraryTarget: 'var',
        library: '__init__',
        devtoolModuleFilenameTemplate: '/[resource-path]'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: require('../.babelrc').client
            },
            {
                test: /\.css$/,
                loader: stylesLoader
            },
            {
                test: /\.(jpg|gif|png|eot|otf|woff2?|ttf)$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            dataUrlLimit: 1024
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                { removeTitle: true },
                                { convertColors: { shorthex: false } },
                                { convertPathData: false }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize:  IS_PRODUCTION ? true : false,
        concatenateModules: false,
        splitChunks: {
            chunks: 'all',
            name: 'common',
            cacheGroups: {
                vendors: {
                    filename: 'common.js'
                }
            }
        },
        minimizer: []
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].build.css"
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ],
    target: 'web',
    devtool: IS_PRODUCTION ? 'source-map' : 'eval-source-map'
}

if (IS_PRODUCTION) {
    config.optimization.minimizer.push(new UglifyJsPlugin({
        cache: true,
        uglifyOptions: {
            compress: {
                warnings: false
            }
        },
        extractComments: true,
    }));
} else {
    config.output.publicPath = '/static/build/';
}

module.exports = config;
