const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/app.js",
    },
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./public/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'lit-css-loader',
                options: {
                    specifier: 'lit-element' // defaults to `lit`
                }
            }
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    }    
};