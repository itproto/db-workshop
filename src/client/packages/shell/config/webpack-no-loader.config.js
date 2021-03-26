// https://2ality.com/2020/04/npm-cjs-typescript.html
const path = require('path');

module.exports = {
    entry: {
        main: "./dist/src/index.js",
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name]-bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './html',
            }
        ]),
    ],
};