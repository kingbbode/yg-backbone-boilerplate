const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const config = {
    entry: {
        app: path.resolve(__dirname, 'src/main/resources/static/app/App.js'),
        ace : [
            path.resolve(__dirname, 'src/main/resources/static/zum/js/cms/ace/ace-extra.js'),
            path.resolve(__dirname, 'src/main/resources/static/zum/js/cms/ace/ace.js'),
            path.resolve(__dirname, 'src/main/resources/static/zum/js/cms/ace/ace.sidebar.js'),
            path.resolve(__dirname, 'src/main/resources/static/zum/js/cms/ace/bootstrap.js'),
            path.resolve(__dirname, 'src/main/resources/static/zum/js/cms/ace/bootstrap-colorpicker.js'),
            path.resolve(__dirname, 'src/main/resources/static/zum/js/cms/ace/bootstrap-multiselect.js'),
            path.resolve(__dirname, 'src/main/resources/static/zum/js/cms/ace/bootstrap-wysiwyg.js')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
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
            jQuery : "jquery",
            Backbone : "backbone",
            _ : "underscore",
        }),
        new CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks: Infinity
        })
    ]
};

module.exports = function(env) {
    return webpackMerge(config, require(`./webpack.${env}.js`))
}