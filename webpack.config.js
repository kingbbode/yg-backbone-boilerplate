const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

const config = {
    context: path.resolve(__dirname, 'src/main/resources/static'),
    entry: {
        app: './AppRouter.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {moduels: false}]
                        ]
                    }
                }]
            },
            { 
                test: /\.hbs$/, 
                loader: "handlebars-loader" 
            }
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            $ : "jquery",
            Backbone : "backbone",
            _ : "underscore"
        })
    ]
};

module.exports = function(env) {
    return webpackMerge(config, require(`./webpack.${env}.js`))
}