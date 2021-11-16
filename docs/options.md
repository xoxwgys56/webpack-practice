# webpack options

## entry

웹팩을 실행할 대상 파일. entry file

## output

일반적으로 `filename`, `path`를 정의함.  
결과물에 대한 정보를 입력

## module

aka. `loader`.  

`none JS` 파일을 웹팩이 사용할 수 있도록 추가하는 속성.  
우선순위는 오른쪽에서 왼쪽. (아마 아래에서 위)

## plugins

웹팩에 부가적인 기능을 추가함.

## resolve

## devServer

webpack-dev-server can be used to quickly develop an application.  
See the development guide to get started.

- [document](https://webpack.js.org/configuration/dev-server/#root)
- [development guide](https://webpack.js.org/guides/development/)

## devtool

source map generated에 대한 옵션.  
`source mapping` 스타일을 선택해서 디버깅 프로세스를 강화할 수 있다. 이 값들은 빌드, 리빌드 시간을 드라마틱하게 변화시킬 수 있다.  

- [document](https://webpack.js.org/configuration/devtool/#devtool)
- [source map](https://blog.teamtreehouse.com/introduction-source-maps)