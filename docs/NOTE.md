# NOTE

## `webpack`이 해결하고 싶은 문제

- JS 변수 scope 제한
- 브라우저별 HTTP request 제한
- 사용하지 않는 코드 관리
- Dynamic loading & Lazy loading 미지원

## 4가지 주요 속성

- entry
- output
- loader
- plugin

### Entry

```js
// webpack.config.js
module.exports = {
    entry: './src/index.js'
}
```
