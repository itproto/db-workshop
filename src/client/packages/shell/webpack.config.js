const { commonWebpackConfig } = require('@itpr/common')
const { merge } = require('webpack-merge');
const { resolve } = require('path');
require('dotenv').config()

const config = merge(commonWebpackConfig, {
    entry: {
        shell: "./src/index.ts",
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: "[name]-bundle.js",
        clean: true
    },
    devServer: {
        contentBase: './dist',
        port: process.env.WBP_PORT
    }
})

module.exports = config;