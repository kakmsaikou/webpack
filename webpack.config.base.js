const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack",
            template: "src/assets/index.html"
        })
    ],
};