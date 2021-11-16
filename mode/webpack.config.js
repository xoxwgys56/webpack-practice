const path = require("path");
const webpack = require("webpack");
var HtmlWebpackPlugins = require('html-webpack-plugin');
/**
 * 함수 형태로 사용되고 있다.
 * 
 * 환경변수를 설정하여 이용할 수 있다.
 * 아래의 예시에서 `mode`를 환경변수를 이용해 설정하고 있으나
 * 이것은 `webpack.config.js`에서 설정하는 `mode`와 이름만 같은 변수이다.
 * 
 * 번들링 과정에서 설정되지 않았다는 경고가 나오므로, 번들링 명령에 별도의 "mode"를 표기해주어야 한다.
 */
module.exports = (env) => {
    let entryPath = env.mode === "production" 
        ? "./public/index.js"
        : "./src/index.js";

    console.log(`Webpack got environment variable named 'mode' as "${env.mode}""`);

    return {
        entry: entryPath,
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            fallback: {
                "process": require.resolve("process/browser")
            }
        },
        plugins: [
            new HtmlWebpackPlugins(),
            new webpack.ProvidePlugin({
                process: "process/browser",
            })
        ]
    };
};