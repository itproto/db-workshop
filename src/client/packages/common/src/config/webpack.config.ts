import path = require('path');
const dist = 'dist'
import HtmlWebpackPlugin from 'html-webpack-plugin';
require('dotenv').config()

const optimization = {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all'
            }
        }
    }
};

export const config = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        main: "./src/index.ts",
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: "[name]-bundle.js",
        clean: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ts-starter',
            template: "public/index.html"
        })
    ],
    devServer: {
        contentBase: './dist'
    },
    optimization
};