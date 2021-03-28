const { commonWebpackConfig } = require('@itpr/common')
const { merge } = require('webpack-merge');
const { resolve } = require('path');
require('dotenv').config()

const config = merge(commonWebpackConfig, {
    entry: {
        blotter: "./src/index.ts",
    },
    output: {
        path: resolve(__dirname, 'dist/blotter'),
        filename: "[name]-bundle.js",
        clean: true
    },
    devServer: {
        contentBase: './dist/blotter',
        port: process.env.WBP_PORT,
        disableHostCheck: true
    }
})

module.exports = config;