const path = require('path');
const env = process.env.NODE_ENV;
const IS_PRODUCTION = (env === 'production');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log('=>', env);

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
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-helmet',
    'react-router-dom'
];

const config = {
    mode: IS_PRODUCTION ? 'production' : 'development',
    name: 'client',
    entry: {
        index: IS_PRODUCTION ?
            path.join(__dirname, '../src/index') :
            [
                'react-hot-loader/patch',
                'webpack-hot-middleware/client',
                path.join(__dirname, '../src/index')
            ],
        common: commonLibs
    },
    output: {
        path: path.join(__dirname, '../static/build'),
        filename: '[name].build.js',
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
                exclude: /(node_modules|bower_components)/,
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
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        },
        extractComments: true,
    }));
} else {
    config.output.publicPath = '/static/build/';
}

module.exports = config;
