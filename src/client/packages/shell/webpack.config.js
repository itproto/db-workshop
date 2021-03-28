const { commonWebpackConfig } = require('@itpr/common')
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const { DefinePlugin } = require('webpack')
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
    },
    plugins: [
        new DefinePlugin({
            SERVICE_URL: JSON.stringify('https://dev.example.com'),
        })
    ]
})

module.exports = config;