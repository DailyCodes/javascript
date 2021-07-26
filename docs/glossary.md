# 용어집

[돌아가기](/../javascript/)

JavaScript 프로그래밍 및 React에서 자주 쓰이는 용어를 간단하게 정리해 놓은 용어집입니다.

> 위키백과, 러닝 리액트 (2판) 등을 참고했습니다.

# A-Z

영문 표제어입니다.

## AJAX

**Asynchronous JavaScript And XML**

[JavaScript](#javascript)와 [XML](#xml)을 이용한 비동기적 정보 교환 기법입니다. 페이지를 새로 불러 오지 않고도 동적으로 새로운 정보를 업데이트할 수 있습니다. 가령, Twitter 타임라인에서 새로운 트윗을 보기 위해 F5 키를 눌러 새로 고침해야 할 필요가 없습니다.

## API

**Application Programming Interface**

사이트가 실행되고 있는 브라우저와 운영 체제의 다양한 부분 그리고 웹 사이트 혹은 서비스의 데이터를 다룰 수 있도록 제공되는 인터페이스입니다. 웹 프론트엔드에서는 크게 브라우저 API와 서드 파티 API를 사용하게 됩니다.

## Babel

브라우저가 직접 지원하지 않는 최신 [JavaScript](#javascript) 및 [JSX](#jsx)를 브라우저가 해석할 수 있는 레거시 코드로 변환해 주는 트랜스파일링 라이브러리입니다.

## CRA

**create-react-app**

터미널에서 [React](#react) 프로젝트를 생성하는 도구입니다. [Webpack](#webpack), [Babel](#babel), ESLint 등의 설정을 자동으로 수행합니다.

## CSS

**Cascading StyleSheets**

마크업 언어가 실제 표현되는 서식을 기술하는 스타일시트 언어입니다. 주로 [HTML](#html)과 함께 사용됩니다.

```css
body {
    text-align: center;
}
```

## DNS

**Domain Name System**

호스트의 도메인 이름(`www.naver.com` 등)을 호스트의 네트워크 주소(IP 주소)로 바꾸거나 그 반대의 변환을 수행합니다. 

## ES6

**ECMAScript 6(ES2015)**

모던 [JavaScript](#javascript)의 기준이 되는 JavaScript 표준안(ECMAScript)으로, 명확하고 편리한 문법, Promise 비동기 프로그래밍을 제공합니다.

## Git

Linux의 아버지 [리누스 토르발스](https://en.wikipedia.org/wiki/Linus_Torvalds)가 개발한 버전 관리 시스템입니다. 파일 및 폴더의 변경 사항을 Commit 단위로 관리하며, 같은 저장소에 위치한 코드를 Branch 단위로 분리하는 기능을 제공합니다. 유명한 Git 저장소로는 GitHub, GitLab 등이 있습니다.

## GraphQL

API 통신을 선언적으로 정의하는 쿼리 언어(Query Language)으로, REST API를 대체할 수 있습니다. 단, 서버에서 GraphQL을 지원해야 합니다. Facebook에서 개발했습니다.

```graphql
query {
	user(login: "moontahoe") {
		id
		login
		name
		location
		avatarUrl
	}
}
```

## Hooks

[React](#react)에서 [컴포넌트](#컴포넌트) 트리와 별도로 재사용 가능한 코드 로직을 제공하여, [상태](#상태) 및 효과를 관리하기 위한 방법입니다. 컴포넌트와 상태를 서로 엮는다는 의미로 영단어 'Hook'을 사용합니다. Hook의 이름에는 관습적으로 'use'를 붙입니다(useState 등).

## HTML

**HyperText Markup Language**

웹 페이지의 구조와 의미를 정의하는 마크업 언어입니다. 주로 [CSS](#css), [JavaScript](#javascript)와 함께 사용됩니다.

```html
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        Hello, world!
    </body>
</html>
```

## HTTP

**HyperText Transfer Protocol**

웹 상에서 정보를 주고받을 수 있는 프로토콜입니다. [HTML](#html) 문서를 주고받거나 [REST API](#rest-api) 요청/응답 시 사용됩니다.

## JavaScript

웹 클라이언트에서 상호 작용을 구현하기 위해 단 10일 만에 개발되었으며, 현재는 다른 분야로의 확장이 진행된 프로그래밍 언어입니다. 동적 타입 선언, 프로토타입 기반 객체, 함수형 프로그래밍 등의 특징이 있습니다.

```javascript
console.log("Hello, world!");
```

## JSON

**JavaScript Object Notation**

키-값 쌍으로 이루어진 객체 데이터를 전달하기 위해 텍스트를 사용하는 개방형 표준 형식입니다. 중괄호`{ ... }`를 사용한 JavaScript의 객체 리터럴에서 유래했으나, 현재는 JavaScript를 제외한 프로그래밍 언어에서도 대부분 지원하고 있습니다.

## JSX

**JavaScript + XML**

[JavaScript](#javascript) 코드 안에서 바로 태그 기반의 구문을 써서 [React](#react) 엘리먼트를 정의할 수 있게 해주는 JavaScript 확장입니다. [HTML](#html)과 닮은 문법을 사용하지만, 실제로는 [Babel](#babel)에 의해 JavaScript로 변환됩니다.

## Node.js

[JavaScript](#javascript)로 브라우저 밖에서 서버를 구축하는 등의 코드를 실행할 수 있게 해주는 런타임 환경입니다. 오픈 소스 라이브러리를 통한 뛰어난 확장성을 가지고 있습니다.

## NPM

**Node Package Manager**

[JavaScript](#javascript)를 위한 패키지 관리자로, 터미널 입력만으로 다양한 오픈소스 라이브러리를 쉽게 다운로드할 수 있도록 지원합니다. 이름에서 볼 수 있듯 [Node.js](#nodejs)를 위해 만들어졌으나, [React](#react)에서도 사용할 수 있습니다.

## NVM

**Node Version Manager**

Node.js의 버전 관리 도구입니다. 하나의 컴퓨터에서 다양한 버전의 Node.js를 설치하고 전환할 수 있게 해 줍니다.

## React

[사용자 인터페이스](#사용자-인터페이스)를 선언적으로 정의하기 위한 [JavaScript](#javascript) 라이브러리입니다. Facebook에서 개발했습니다.

## REST API

**REpresentational State Transfer API**

효율적, 안정적이며 확장가능한 분산시스템을 가져올 수 있는 소프트웨어 아키텍처 디자인 제약의 모음입니다. REST API는 특정한 API의 이름이 아닌 추상적인 규칙이며, 이를 만족하는 API를 RESTful하다고 합니다.

## SPA

**Single Page Application**

서버로부터 완전히 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써 사용자와 소통하는 웹 애플리케이션이나 웹사이트입니다. 즉, 페이지에 해당하는 [HTML](#html) 파일은 하나만 존재하며, 페이지 이동(처럼 보이는 것)을 포함한 모든 동작은 [JavaScript](#javascript)로 이루어집니다.

## SQL

**Structured Query Language**

관계형 데이터베이스 관리 시스템의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어입니다. 관계형 데이터베이스 관리 시스템에서 자료의 검색과 관리, 데이터베이스 스키마 생성과 수정, 데이터베이스 객체 접근 조정 관리를 위해 고안되었습니다.

## TypeScript

정적 타입 선언 개념을 추가한 [JavaScript](#javascript)의 슈퍼셋 언어입니다. Microsoft에서 개발했습니다.

## URI/URL

**Universal Resource Identifier**

**Universal Resource Locator**

네트워크 상에서 자원이 어디 있는지를 알려주기 위한 규약입니다. protocol, host(domain), port에 해당하는 부분은 URL이지만, query string을 포함한 전체는 URI라고 합니다.

## Virtual DOM

[React](#react)에서 사용하는 가상화된 DOM(Document Object Model)입니다. React는 컴포넌트 트리에 변동 사항이 있을 때 먼저 Virtual DOM을 변경하고, 실제 DOM과 Virtual DOM을 비교하여 실제 DOM에는 가능한 한 최소한의 변경만 수행합니다.

## Webpack

여러 다른 파일들([JavaScript](#javascript), LESS, [CSS](#css), [JSX](#jsx), ESNext 등)을 받아서 한 파일로 묶어 주는 모듈 번들러입니다. 코드를 빠르게 불러오고 효율적으로 관리하기 위한 다양한 기능을 제공합니다.

## WWW

**World Wide Web**

일반적으로 웹(Web)이라 부르며, 인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전 세계적인 정보 공간입니다.

## XML

**eXtensible Markup Language**

[HTML](#html)을 확장한 마크업 언어로, HTML과 동일한 문법을 가지며 웹 페이지 작성 이외에 다양한 용도로 활용할 수 있습니다. 과거에는 데이터 전달 시 많이 사용했으나, 현재는 많은 경우 [JSON](#json)을 지원하고 있습니다.

# ㄱ-ㅎ

국문 표제어입니다.

## 고차 함수

**Higher Order Function**

다른 함수를 인자로 받는 함수입니다. 배열(Array)의 메서드인 `map`, `filter`, `reduce`, `forEach` 등이 이에 해당됩니다.

## 렌더링

**Rendering**

[React](#react) 엘리먼트가 눈으로 볼 수 있도록 그려지는 것입니다. 렌더링 과정에는 [Virtual DOM](#virtual-dom)을 사용한 DOM 업데이트가 포함됩니다. 렌더링은 [상태](#상태) 및 [프롭](#프롭) 변경, 부모 컴포넌트가 렌더링될 때 발생하며, 강제 재렌더링 기능도 있습니다.

## 리듀서 함수

**Reducer Function**

현재 값(상태)을 받아서 새 값(상태)을 반환하는 함수입니다. 주로 두 개의 인자(기존 값, 새로운 값)를 받아 하나의 값으로 병합하여 반환하고, 반한된 값이 기존 값이 되는 과정을 반복하여 모든 값들을 합쳐서 하나로 만듭니다. 배열의 `reduce` 메서드, [React](#react)의 useReducer [Hook](#hooks) 등이 이에 해당합니다.

## 백엔드

**Backend**

프론트엔드와 반대로, 클라이언트와 소통하는 위치에 있는 서버 단을 의미합니다. 일반적으로 호스팅 서버 및 API 서버를 포함하며, 때로는 데이터베이스까지 포함하는 개념입니다. 유명한 백엔드 라이브러리/프레임워크로는 Spring(Java), Django(Python), Express([Node.js](#nodejs))가 있습니다.

## 브라우저

**Browser**

[HTML](#html), [CSS](#css), [JavaScript](#javascript) 코드를 입력받아 사용자와 상호작용할 수 있는 화면을 보여주는 프로그램입니다. Chrome, Firefox, Safari, Edge 등이 있습니다. 웹 브라우저마다 지원하는 JavaScript 코드 또는 브라우저 API가 상이할 수 있으므로, [프론트엔드](#프론트엔드) 개발자는 이 점에 유의해야 합니다.

## 비동기 프로그래밍

**Asynchronous Programming**

특정 작업의 실행 완료를 기다리는 동안 다른 작업을 수행하고, 작업이 완료되면 특정 [콜백 함수](#콜백-함수)를 실행하는 방법 등으로 알려주는 방식입니다.

## 사용자 인터페이스

**User Interface (UI)**

사람들이 컴퓨터와 상호 작용하는 시스템입니다. 사용자가 감각 기관을 통해 느끼고 조작할 수 있는 부분이므로, 사용자 경험(User eXperience)를 최대한 고려한 방법으로 작성됩니다.

## 상태

**State**

애플리케이션이 가지고 있으면서 때로는 변경해야 하는 값입니다. 때로는 하나의 상태를 여러 컴포넌트가 공유해야 할 때도 있으며, 이 경우 상태를 [프롭](#프롭)으로 내려보냅니다. [React](#react)에서의 상태 변경과 [렌더링](#렌더링)은 연동되어 동작합니다.

## 순수 함수

**Pure Function**

부수 효과(side effect)가 없이, 입력이 같다면 출력이 같음이 보장되는 함수입니다.

## 선언형 프로그래밍

**Declarative Programming**

명령형 프로그래밍과 반대로, 구체적인 지시가 아닌 최종적인 결과물의 형태를 작성하는 프로그래밍 방식입니다. 

[React](#react)에서 [JSX](#jsx)를 이용해 [사용자 인터페이스](#사용자-인터페이스)를 작성하는 것이 바로 이 선언형 프로그래밍에 해당합니다.

## 이벤트

**Event**

시스템에서 일어나는 사건(action) 혹은 발생(occurrence)입니다. 시스템이 이벤트를 알려주는 이유는 각각의 이벤트가 발생할 시 호출될 코드를 작성할 수 있도록 하기 위해서입니다. 이벤트 발생 시 이는 태스크 큐에 순차적으로 들어가며, 동기적으로 작성된 코드가 모두 실행을 마친 이후 이벤트 루프에 의해 FIFO(First-In-First-Out) 순서로 처리됩니다.

## 익명 함수

**Anonymous Function**

함수 선언식으로 만들어지지 않은 함수로, 특정한 변수에 대입되지 않는 이상 이름이 없습니다. 특정한 함수를 [콜백 함수](#콜백-함수)로 넘길 때 많이 사용합니다.

## 컴포넌트

**Component**

React에서 [사용자 인터페이스](#사용자-인터페이스)를 만드는 단위입니다. 클래스형과 함수형 두 가지 방법으로 선언할 수 있습니다. 컴포넌트는 계층적 구조를 가지며, 이를 컴포넌트 트리라고 합니다.

**함수형** 컴포넌트의 경우, [프롭](#프롭)을 입력받아 [JSX](#jsx) 형식의 사용자 인터페이스를 반환합니다.

## 클로저

**Closure**

함수와 함수가 선언된 어휘적 환경의 조합입니다. 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수는 함수가 반환 등의 방법으로 기존과 다른 맥락에서 사용된다고 해도 기억됩니다.

## 콜백 함수

**Callback Function**

다른 함수에 인자로 전달되는 함수입니다. [고차 함수](#고차-함수) 및 [비동기 프로그래밍](#비동기-프로그래밍)에서 주로 쓰입니다.

## 프론트엔드

**Frontend**

클라이언트 단, 즉 [브라우저](#브라우저)에 의해 다루어지는 영역(HTML, CSS, JavaScript)을 의미합니다. 유명한 프론트엔드 라이브러리/프레임워크로는 [React](#react), Vue.js, Angular, jQuery가 있습니다.

## 프롭

**Props**

[컴포넌트](#컴포넌트)에 전달되는 속성입니다. [HTML](#html)의 속성(Attribute)와 비슷한 문법을 사용합니다. 

## 함수형 프로그래밍

**Functional Programming**

데이터 처리를 수학적 함수의 계산처럼 취급하고 [상태](#상태)와 가변 데이터를 멀리하는 프로그래밍 패러다임의 하나입니다. 함수를 변수에 넣을 수 있고, 다른 함수의 입력 및 출력으로 사용할 수 있습니다(일급 시민). 또한 [순수 함수](#순수-함수)의 사용을 지향합니다.

## 화살표 함수

**Arrow Function**

`() => {}` 형식의 간단한 문법을 제공하는 [익명 함수](#익명-함수)입니다. [ES6](#es6)부터 지원하는 기능입니다.