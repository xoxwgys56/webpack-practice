var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // add build output based "index.html template"
            template: "index.html",
        }),
    ]
};