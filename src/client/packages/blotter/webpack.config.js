const { commonWebpackConfig } = require('@itpr/common')
const { merge } = require('webpack-merge');

require('dotenv').config()

const config = merge(commonWebpackConfig, {
    devServer: {
        contentBase: './dist',
        port: process.env.WBP_PORT
    }
})

module.exports = config;