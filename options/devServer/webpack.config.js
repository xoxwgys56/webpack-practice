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
        proxy: {
            /**
             * domain을 설정하여 API 요청을 지정한 domain으로 보내도록 설정하면
             * CORS 문제를 해결할 수 있다.
             * 
             * 만약 실제로 존재하지 않는 도메인 (eg. domain.com)을 사용한다면
             * 아래의 옵션을 추가해줘야한다.
             * changeOrigin: true
             */
            "/api": "http://localhost:3000"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            // add build output based "index.html template"
            template: "index.html",
        }),
    ]
};