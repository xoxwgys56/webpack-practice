# code splitting

웹팩을 사용하는 이유로 Dynamic loading & Lazy loading 미지원이 있었다.  
(아마 `lazy loading`을 지원하지 않는 브라우저에 대한 이야기인 것 같다.)
(`Require.js`를 사용하여 코드 분할을 사용할 수 있었다고 한다.)  

어디에서 JS optimize에 대한 글을 보았는데, 우선 2가지에 대해 언급했다.  

1. 보내는 파일의 용량.
2. JS 컴파일 시간.

여기서 이야기하는 코드 분할은 첫번째의 경우에 해당할 것이다.  
클라이언트가 요청을 했는데 너무 많은 내용을 반환하게 된다면, 클라이언트 입장에서 부담스러울 것이다.  
(이것이 사용자 경험을 떨어뜨릴 수 있으니, **UX**가 악화된다고 할 수 있을 것 같다.)  

그래서 우리는 코드를 분할해서 클라이언트로 보낸다.  
아직 더 깊은 내용은 모르겠지만, 초기에 보내는 파일은 용량이 작을수록 좋지 않을까?  
아니면 적정한 용량이 좋은건가? 이러한 내용(네트워크 품질 등)을 서버에서 판단해서 보내는 파일을 변경할 수 있는지 모르겠다.

---

## Read more

- [webpack code splitting](https://webpack.js.org/guides/code-splitting/)
- [리액트 코드 분할](https://ko.reactjs.org/docs/code-splitting.html)
- [MDN code splitting](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting)
- [휴먼스케이프 기술 블로그](https://medium.com/humanscape-tech/react%EC%97%90%EC%84%9C-%ED%95%B4%EB%B3%B4%EB%8A%94-%EC%BD%94%EB%93%9C-%EC%8A%A4%ED%94%8C%EB%A6%AC%ED%8C%85-code-splitting-56c9c7a1baa4)