const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV;
const IS_PRODUCTION = (env === 'production');

console.log('=>', env);

let stylesLoader = [
    'style-loader',
    'css-loader'
];

const config = {
    mode: IS_PRODUCTION ? 'production' : 'development',
    name: 'client',
    entry: {
        index: IS_PRODUCTION ?
            path.join(__dirname, '../src/index') :
            [
                path.join(__dirname, '../src/index')
            ]
    },
    output: {
        path: path.join(__dirname, '../static/build'),
        filename: '[name].build.js',
        library: '__init__'
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
        minimizer: [],
        splitChunks: {
            name: 'common',
            cacheGroups: {
                vendors: {
                    filename: 'common.js'
                }
            }
        }
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        })
    ],
    target: 'web',
    devtool: IS_PRODUCTION ? 'source-map' : 'eval-source-map'
}

if (IS_PRODUCTION) {
    config.plugins.push(new webpack.LoaderOptionsPlugin({
        minimize: true
    }));
    config.optimization.minimizer.push(new UglifyJsPlugin({
        cache: true,
        uglifyOptions: {
            sourceMap: true,
            ie8: true,
            output: {
                comments: false,
            },
            compress: { warnings: false }
        },
        extractComments: true,
    }));
} else {
    config.output.publicPath = '/static/build/';
}

module.exports = config;
