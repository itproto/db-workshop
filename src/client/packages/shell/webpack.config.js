const { commonWebpackConfig } = require('@itpr/common')
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const { DefinePlugin } = require('webpack')
require('dotenv').config()

const config = merge(commonWebpackConfig, {
    module: {
        rules: [

        ],
    },
    entry: {
        shell: "./src/index.ts",
    },
    output: {
        path: resolve(__dirname, 'dist/shell'),
        filename: "[name]-bundle.js",
        clean: true
    },
    devServer: {
        contentBase: './dist/shell',
        port: process.env.WBP_PORT,
        disableHostCheck: true,
        host: 'localhost'
    },
    plugins: [
        new DefinePlugin({
            SERVICE_URL: JSON.stringify('https://dev.example.com'),
        })
    ]
})

module.exports = config;