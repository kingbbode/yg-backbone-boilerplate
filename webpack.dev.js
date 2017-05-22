const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        host: "0.0.0.0",
        port: 3000,
        proxy: {
            "**": "http://localhost:8080"
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin() //prints more readable module names in the browser console on HMR updates
    ],
    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/dist'),
        publicPath: '/dist',
        filename: '[name].js'
    }
}
