const webpack = require('webpack');
const path = require('path');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './app.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {moduels: false}]
                        ]
                    }
                }]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};

if (process.env.NODE_ENV === 'prod') {
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
        new webpack.LoaderOptionsPlugin({ minimize: true })
    ]
}

module.exports = config;