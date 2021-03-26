const path = require('path');
const dist = 'dist'


module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        main: "./src/index.ts",
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: "[name]-bundle.js",
        clean: true,
        libraryTarget: 'umd',
        library: 'MyLib',
        umdNamedDefine: true
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