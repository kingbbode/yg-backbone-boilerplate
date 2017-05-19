const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 7777,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath
    },
    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/dist'),
        filename: '[name].js',
        sourceMapFilename: '[name].map'
    }
}