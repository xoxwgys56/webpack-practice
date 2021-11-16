// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');
// plugins
var HtmlWebpackPlugins = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  mode: 'none',
  /** 
   * # entry
   * 엔트리에서 언급된 파일을 가지고 웹팩은 모듈들의 연관관계를 이해하고 분석한다.
   * -> 그러므로, 애플리케이션을 동작시킬 수 있는 내용들이 담겨져야 한다.
   *    - entry를 기준으로 모듈 간의 의존 관계가 생기는 구조를 Dependency graph라고 합니다.
   * 
   * NOTE 그러나 이것이 entry가 하나의 파일이어야 한다는 의미는 아니다.
   */
  entry: './src/index.js',
  /**
   * # output
   * 웹팩의 번들링 결과 파일 경로.
   * 반드시 객체 형태로 옵션을 추가해야 한다.
   * 
   * [api doc](https://webpack.js.org/configuration/output/)
   */
  output: {
    filename: 'main.js',                    // required
    path: path.resolve(__dirname, 'dist')
  },
  /**
   * # loader
   * JS가 아닌 웹자원 (html, css, image, font, etc)을 변환할 수 있도록
   * (eg. css는 JS가 아니기 때문에, css-loader가 없으면 해석할 수 없다.)
   */
  module: {
    /**
     * loader priority. Right -> Left
     */
    rules: [
        {
            test: /\.csss$/,
            use: ['css-loader', 'sass-loader']
        },
        // 아래의 룰도 우선순위가 Last -> First 인 것 같으나, 확인되지 않았다.
        // {
        //     test: /\.css$/,
        //     use: [
        //         {loader: 'style-loader'},
        //         {
        //             loader: 'css-loader',
        //             options: {module: true}
        //         },
        //         {loader: 'sass-loader'}
        //     ]
        // }
    ]
  },
  /**
   * # plugin
   * 추가적인 기능을 제공.
   * loader는 파일을 해석하고 변환. 플러그인은 결과물을 바꾸는 역할.
   */
  plugins: [
      new HtmlWebpackPlugins(),
      new webpack.ProgressPlugin()
  ],
  /**
   * # resolve
   * 경로 문제 등에 대해 해결할 수 있는 옵션으로 보임.
   */
  resolve: {
    // config options
  },
  /**
   * # dev server
   * 빠른 어플리케이션 개발을 위한 로컬 서버인 것 같다.
   * mode: `development`에서만 동작할 것 같다.
   */
  devServer: {

  }
};