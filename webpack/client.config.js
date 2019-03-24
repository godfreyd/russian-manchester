const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const env = process.env.NODE_ENV;
const IS_PRODUCTION = (env === 'production');

let stylesLoader = [
    'style-loader',
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

// If production wrap styles in ExtractTextPlugin
if (IS_PRODUCTION) {
    const fallback = stylesLoader.shift();

    stylesLoader = ExtractTextPlugin.extract({
        fallback,
        use: stylesLoader
    });
}

const vendorLibs = [
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
            path.join(__dirname, '../src/bundles/index/entry') :
            [
                'react-hot-loader/patch',
                'webpack-hot-middleware/client',
                path.join(__dirname, '../src/bundles/index/entry')
            ],
        vendor: vendorLibs
    },
    output: {
        path: path.join(__dirname, '../static/build'),
        filename: '[name].build.js',
        libraryTarget: 'this',
        library: '__init__',
        devtoolModuleFilenameTemplate: '/[resource-path]'
    },
    resolve: {
        alias: {
            // Используем react-dom из @hot-loader,
            // для полной совместимости HRM с react 16+.
            'react-dom': '@hot-loader/react-dom',
        },
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
        splitChunks: {
            chunks: 'all',
            name: 'vendor',
            cacheGroups: {
                vendors: {
                    filename: 'vendor.js'
                }
            }
        },
        minimizer: []
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].build.css'),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ],
    target: 'web',
    devtool: IS_PRODUCTION ? 'source-maps' : 'eval-source-map'
};

if (IS_PRODUCTION) {
    config.plugins.push(new webpack.LoaderOptionsPlugin({
        minimize: true
    }));
    config.optimization.minimizer.push(new UglifyJsPlugin({
        uglifyOptions: {
            compress: { warnings: false }
        },
    }));
} else {
    config.output.publicPath = '/static/build/';
}

module.exports = config;
