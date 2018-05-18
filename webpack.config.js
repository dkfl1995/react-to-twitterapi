var webpack = require('webpack');
var path = require('path');

var htmlBundle = require('html-webpack-plugin');

var src = path.resolve(__dirname, 'src/');
var entryPath = path.resolve(__dirname, 'src/');
var outPath = path.resolve(__dirname);

module.exports = {
    entry: path.join(entryPath, 'index.js'),
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 
                    {
                        loader: 'babel-loader'
                    }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    // {
                    //     loader: "style-loader"
                    // },
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: ''
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlBundle({
            template: path.join(src, 'index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ],
    output: {
        path: outPath + '/dist',
        filename: 'bundle.js'
    }
};  