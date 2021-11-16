# source map

[devtool doc](https://webpack.js.org/configuration/devtool/#devtool)을 참고하여 이 중에서 선택해 사용하면 된다.  
몇가지 추천하는 옵션이 있는데 아래와 같다.  

- `eval` : Recommended choice for development builds with maximum performance.
- `eval-source-map` : Recommended choice for development builds with high quality SourceMaps.
- `source-map` : Recommended choice for production builds with high quality SourceMaps.

위 내용으로만 보았을 때, 빌드 시간과 소스맵 퀄리티에 따라 선택하는 것으로 보인다.
*소스 맵을 아예 포기하는 옵션도 있을 것 같다.*
