const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const nodeEnv = process.env.NODE_ENV || 'development'
const isProd = nodeEnv === 'production'

module.exports = {
    watch: !isProd,

    devtool: isProd ? 'hidden-source-map' : 'source-map',

    entry: {
        js: './app/app.js',
        vendor: ['react', 'react-dom', 'redux', 'redux-thunk']
    },

    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                loader: 'babel'
            },
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                loader: 'eslint-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
            },
            {
                test: /\.(eot|woff|ttf|svg|png|otf)$/,
                loader: 'url'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        modules: [
            path.join(__dirname, 'app'),
            'node_modules'
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.bundle.js'
        }),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: 'body'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: !isProd,
            minimize: isProd,
            comments: !isProd
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
        }),
        new webpack.optimize.DedupePlugin()
    ]
}
