# Node.js

[Node.js](/javascript/docs/glossary.html#nodejs)란 Google Chrome의 엔진인 V8을 기반으로 구성된 [JavaScript](/javascript/docs/glossary.html#javascript) 런타임입니다.

[이벤트](/javascript/docs/glossary.html#이벤트) 기반으로 개발이 가능하며 Non-Blocking I/O를 지원하기 때문에 [비동기 프로그래밍](/javascript/docs/glossary.html#비동기-프로그래밍)이 가능합니다. 따라서 I/O 부하가 심한 대규모 서비스를 개발하기 적합하다고 할 수 있습니다. 또한 JavaScript의 표준 라이브러리 프로젝트인 CommonJS의 스펙을 따르고 있습니다(`require()` 등).

이전에 널리 쓰이던 PHP, JSP와 같은 언어를 사용할 때는 더 많은 사용자를 지원하기 위하여 더 많은 서버를 추가할 수 밖에 없었으며, 여러 대의 서버를 하나로 동기화해야 한다는 문제점이 있었습니다. Node.js는 이러한 문제를 해결하기 위해 등장했습니다.

기존 방식에서는 각 연결에 대해 새로운 쓰레드를 생성하고 그에 따라 메모리를 할당하여 사용자 요청을 처리했다면, Node.js에서는 각 연결이 하나의 이벤트로서 Node.js 엔진에서 처리됩니다.

## Node.js란 무엇인가? Node.js의 특징은?

Node.js는 Single-Threaded Non-Blocking I/O 이벤트 기반 비동기 방식으로 작동합니다. 따라서, 사용자의 요청은 한 곳에서 받지만 작업은 실질적으로 멀티 쓰레드로 운용하여 결과를 구현합니다.

Node.js는 자체적으로 단일 쓰레드로 실행되지만, 백그라운드에서 쓰레드풀을 구성해 작업을 수행합니다. 개발자는 쓰레드 하나를 관리하듯 프로그래밍하면 플랫폼이 여러 쓰레드를 효율적으로 운용하게 됩니다.

## Node.js 환경과 브라우저 환경의 차이점은 무엇인가? 

먼저 두 환경의 목적을 설명하겠습니다.

[브라우저](/javascript/docs/glossary.html#브라우저)는 HTML, CSS, JavaScript를 사용하여 웹 페이지를 [렌더링](/javascript/docs/glossary.html#렌더링)하는 도구입니다.

반면, Node.js는 서버 개발 등 브라우저 바깥에서의 JavaScript 환경을 제공하는 것이 목적입니다.

두 환경 모두 공통적으로 자바스크립트 엔진으로 동작하지만, 각각 다른 [API](/javascript/docs/glossary.html#api)를 제공합니다. 브라우저에서는 DOM, Fetch와 같은 클라이언트 사이드 Web API를 제공하고, Node.js는 Filesystem과 같은 고유의 API를 제공합니다.

또 Node.js의 전역 객체는 `global`을 가리키지만, 브라우저에서는 Window 객체(`window`)를 가리킵니다.

| 브라우저 환경 | Node.js 환경 |
| --- | --- |
| 웹 API<br>- Window<br>- Navigator<br>- Document<br>- Fetch | NPM 라이브러리<br>- Express<br>- Koa<br>- Axios |

```javascript
console.log("테스트 1"); // 브라우저에서는 브라우저 콘솔에 출력, Node.js에서는 터미널에 출력
alert("테스트 2"); // Window 객체의 메서드이므로 브라우저에서는 경고 대화 상자 출력, Node.js에서는 실행되지 않음
```

## Node.js로 웹 서버를 구현하면 어떤 장점이 있는가?

1. Node.js는 이벤트 기반 비동기 방식으로 동작하기 때문에 서버 무리가 적습니다.

2. [NPM](/javascript/docs/glossary.html#npm)을 활용하여 다양한 모듈과 패키지를 쉽고 빠르게 설치하여 사용할 수 있습니다.

3. C++로 개발된 V8 JavaScript 엔진이기 때문에 확장성이 좋습니다.
