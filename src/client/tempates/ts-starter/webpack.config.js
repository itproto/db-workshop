const path = require('path');
const dist = 'dist'
const HtmlWebpackPlugin = require('html-webpack-plugin')

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

module.exports = {
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
            { test: /\.tsx?$/, loader: "ts-loader" },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ts-starter',
            template: "public/index.html"
        })
    ],
    devServer: {
        contentBase: './dist',
    },
    optimization
};