const path = require('path');
const webpack = require('webpack');

module.exports = {
    plugins: [
        /*new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })*/
    ],
    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/dist'),
        filename: '[name].js'
    }
}