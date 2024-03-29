# 웹 프론트엔드 용어집

[돌아가기](/../javascript/)

JavaScript 프로그래밍 및 React에서 자주 쓰이는 용어를 간단하게 정리해 놓은 용어집입니다.

> 위키백과, 러닝 리액트 (2판) 등을 참고했습니다.

<a style="display:scroll;position:fixed;bottom:10px;right:10px;" href="#">TOP</a>

<table>
    <thead>
        <tr>
            <th colspan="6" style="text-align: center;">바로가기</th>
        </tr>
    </thead>
    <tbody>
        <tr style="text-align: center;">
            <td>
                <a href="#ajax">AJAX</a>
            </td>
            <td>
                <a href="#api">API</a>
            </td>
            <td>
                <a href="#babel">Babel</a>
            </td>
            <td>
                <a href="#cra">CRA</a>
            </td>
            <td>
                <a href="#css">CSS</a>
            </td>
            <td>
                <a href="#dns">DNS</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#dom">DOM</a>
            </td>
            <td>
                <a href="#ecmascript">ECMAScript</a>
            </td>
            <td>
                <a href="#eslint">ESLint</a>
            </td>
            <td>
                <a href="#es6">ES6</a>
            </td>
            <td>
                <a href="#git">Git</a>
            </td>
            <td>
                <a href="#graphql">GraphQL</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#hooks">Hooks</a>
            </td>
            <td>
                <a href="#html">HTML</a>
            </td>
            <td>
                <a href="#http">HTTP</a>
            </td>
            <td>
                <a href="#https">HTTPS</a>
            </td>
            <td>
                <a href="#java">Java</a>
            </td>
            <td>
                <a href="#javascript">JavaScript</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#json">JSON</a>
            </td>
            <td>
                <a href="#jsx">JSX</a>
            </td>
            <td>
                <a href="#nan">NaN</a>
            </td>
            <td>
                <a href="#nodejs">Node.js</a>
            </td>
            <td>
                <a href="#npm">NPM</a>
            </td>
            <td>
                <a href="#nvm">NVM</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#prettier">Prettier</a>
            </td>
            <td>
                <a href="#promise">Promise</a>
            </td>
            <td>
                <a href="#react">React</a>
            </td>
            <td>
                <a href="#rest-api">REST API</a>
            </td>
            <td>
                <a href="#spa">SPA</a>
            </td>
            <td>
                <a href="#sql">SQL</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#ssl">SSL</a>
            </td>
            <td>
                <a href="#sso">SSO</a>
            </td>
            <td>
                <a href="#typescript">TypeScript</a>
            </td>
            <td>
                <a href="#uriurl">URI/URL</a>
            </td>
            <td>
                <a href="#virtual-dom">Virtual DOM</a>
            </td>
            <td>
                <a href="#webpack">Webpack</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#www">WWW</a>
            </td>
            <td>
                <a href="#xml">XML</a>
            </td>
            <td>
                <a href="#객체">객체</a>
            </td>
            <td>
                <a href="#객체-지향-프로그래밍">객체 지향 프로그래밍</a>
            </td>
            <td>
                <a href="#고차-함수">고차 함수</a>
            </td>
            <td>
                <a href="#깊은-복사">깊은 복사</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#단락-평가">단락 평가</a>
            </td>
            <td>
                <a href="#라이브러리">라이브러리</a>
            </td>
            <td>
                <a href="#렌더링">렌더링</a>
            </td>
            <td>
                <a href="#리듀서-함수">리듀서 함수</a>
            </td>
            <td>
                <a href="#리터럴">리터럴</a>
            </td>
            <td>
                <a href="#메서드">메서드</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#문법적-설탕">문법적 설탕</a>
            </td>
            <td>
                <a href="#백엔드">백엔드</a>
            </td>
            <td>
                <a href="#브라우저">브라우저</a>
            </td>
            <td>
                <a href="#비동기-프로그래밍">비동기 프로그래밍</a>
            </td>
            <td>
                <a href="#사용자-인터페이스">사용자 인터페이스</a>
            </td>
            <td>
                <a href="#상태">상태</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#생성자-함수">생성자 함수</a>
            </td>
            <td>
                <a href="#순수-함수">순수 함수</a>
            </td>
            <td>
                <a href="#선언형-프로그래밍">선언형 프로그래밍</a>
            </td>
            <td>
                <a href="#얕은-복사">얕은 복사</a>
            </td>
            <td>
                <a href="#옵셔널-체이닝">옵셔널 체이닝</a>
            </td>
            <td>
                <a href="#이벤트">이벤트</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#이벤트-버블링">이벤트 버블링</a>
            </td>
            <td>
                <a href="#이벤트-캡처링">이벤트 캡처링</a>
            </td>
            <td>
                <a href="#익명-함수">익명 함수</a>
            </td>
            <td>
                <a href="#인스턴스">인스턴스</a>
            </td>
            <td>
                <a href="#자료형">자료형</a>
            </td>
            <td>
                <a href="#재귀-함수">재귀 함수</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#참-같은-값">참 같은 값</a>
            </td>
            <td>
                <a href="#컴포넌트">컴포넌트</a>
            </td>
            <td>
                <a href="#클래스">클래스</a>
            </td>
            <td>
                <a href="#클로저">클로저</a>
            </td>
            <td>
                <a href="#콜백-함수">콜백 함수</a>
            </td>
            <td>
                <a href="#콜-스택">콜 스택</a>
            </td>
        </tr>
        <tr style="text-align: center;">
            <td>
                <a href="#태스크-큐">태스크 큐</a>
            </td>
            <td>
                <a href="#프로토타입">프로토타입</a>
            </td>
            <td>
                <a href="#프론트엔드">프론트엔드</a>
            </td>
            <td>
                <a href="#프롭">프롭</a>
            </td>
            <td>
                <a href="#함수형-프로그래밍">함수형 프로그래밍</a>
            </td>
            <td>
                <a href="#화살표-함수">화살표 함수</a>
            </td>
        </tr>
    </tbody>
</table>

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

터미널에서 [React](#react) 프로젝트를 생성하는 도구입니다. [Webpack](#webpack), [Babel](#babel), [ESLint](#eslint) 등의 설정을 자동으로 수행합니다.

## CSS

**Cascading StyleSheets**

마크업 언어가 실제 표현되는 서식을 기술하는 스타일시트 언어입니다. 주로 [HTML](#html)과 함께 사용됩니다.

```css
body {
    background-color: blue;
    text-align: center;
}
```

## DNS

**Domain Name System**

호스트의 도메인 이름(`www.naver.com` 등)을 호스트의 네트워크 주소(IP 주소)로 바꾸거나 그 반대의 변환을 수행합니다. 

## DOM

**Document Object Model**

웹 페이지(Document)를 구조화된 노드(Node) [객체](#객체)의 트리 구조로 표현한 모델입니다. 각 [브라우저](#브라우저)에 구현되어 있으며, [JavaScript](#javascript)에서 [HTML](#html)을 직접 조작할 수 있는 브라우저 [API](#api)를 제공합니다.

## ECMAScript

유럽의 [ECMA International](https://en.wikipedia.org/wiki/Ecma_International)에서 규정한 [JavaScript](#javascript) 표준안입니다. 2015년의 [ES6](#es6) 이후 ES2016, ES2017 등 매년 새로운 기능이 추가되어 발표되고 있습니다. [호환성 테이블](http://kangax.github.io/compat-table/es6/)을 통해 각 [브라우저](#브라우저)의 ECMAScript 최신 기능 지원 현황을 한눈에 볼 수 있습니다.

## ESLint

ESLint는 [JavaScript](#javascript)의 문법 오류를 잡아내고 자동 교정 기능을 제공하는 도구입니다. [CRA](#cra)에 자동으로 포함되어 있으며, 코드 포매팅 기능을 추가하는 등 개발자가 원하는 대로 설정하여 사용할 수 있습니다.

## ES6

**ECMAScript 6 (ES2015)**

모던 [JavaScript](#javascript)의 기준이 되는 JavaScript 표준안([ECMAScript](#ecmascript))으로, 명확하고 편리한 문법, [클래스](#클래스), [Promise](#promise) [비동기 프로그래밍](#비동기-프로그래밍)을 제공합니다.

## Git

Linux의 아버지 [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)가 개발한 버전 관리 시스템입니다. 파일 및 폴더의 변경 사항을 Commit 단위로 관리하며, 같은 저장소에 위치한 코드를 Branch 단위로 분리하는 기능을 제공합니다. 유명한 Git 저장소로는 GitHub, GitLab 등이 있습니다.

## GraphQL

[API](#api) 통신을 선언적으로 정의하는 쿼리 언어(Query Language)으로, [REST API](#rest-api)를 대체할 수 있습니다. 단, 서버에서 GraphQL을 지원해야 합니다. Facebook에서 개발했습니다.

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

## HTTPS

**HyperText Transfer Protocol Secure**

[HTTP](#http)에서 [SSL](#ssl) 인증서 등을 통한 데이터 암호화를 추가한 프로토콜입니다.

## Java

1995년 [James Gosling](https://en.wikipedia.org/wiki/James_Gosling)이 개발한 [객체 지향 프로그래밍](#객체-지향-프로그래밍) 언어입니다. [백엔드](#백엔드) 구축 및 Android 프로그래밍에 주로 사용됩니다. [JavaScript](#javascript)와는 이름을 제외하면 관련이 없습니다.

```java
class Main {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

## JavaScript

1995년 [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich)가 개발한 스크립트 언어이자 프로그래밍 언어입니다. 웹 클라이언트에서 상호 작용을 구현하기 위해 단 10일 만에 개발되었으며, 현재는 다른 분야로의 확장이 진행된 프로그래밍 언어입니다. 동적 타입 선언, 프로토타입 기반 객체, 함수형 프로그래밍 등의 특징이 있습니다.

```javascript
console.log("Hello, world!");
```

## JSON

**JavaScript Object Notation**

키-값 쌍으로 이루어진 [객체](#객체) 데이터를 전달하기 위해 텍스트를 사용하는 개방형 표준 형식입니다. 중괄호`{ ... }`를 사용한 [JavaScript](#javascript)의 객체 [리터럴](#리터럴)에서 유래했으나, 현재는 JavaScript를 제외한 프로그래밍 언어에서도 대부분 지원하고 있습니다.

```json
{
    "companies": [
        {
           "name": "Apple",
           "products": [
               "macOS",
               "iOS"
            ]
        },
        {
           "name": "Microsoft",
           "products": [
               "MS-DOS",
               "Windows"
            ]
        }
    ]
}
```

## JSX

**JavaScript + XML**

[JavaScript](#javascript) 코드 안에서 바로 태그 기반의 구문을 써서 [React](#react) 엘리먼트를 정의할 수 있게 해주는 JavaScript 확장입니다. [HTML](#html)과 닮은 문법을 사용하지만, 실제로는 [Babel](#babel)에 의해 JavaScript로 변환됩니다.

```jsx
import React from "react";

export default function Main({ name }) {
    return <h1>Hello World, {name}!</h1>;
}
```

## NaN

**Not a Number**

숫자가 아닌 값을 의미합니다. 숫자만 수행할 수 있는 연산에 숫자가 아닌 값을 넣은 경우 `NaN`이 반환됩니다. `NaN`은 [거짓 같은 값](#참-같은-값)이며, 자기 자신과도 같지 않습니다.

```javascript
NaN === NaN; // false
!NaN; // true
```

## Node.js

[JavaScript](#javascript)로 브라우저 밖에서 서버를 구축하는 등의 코드를 실행할 수 있게 해주는 런타임 환경입니다. 오픈 소스 라이브러리를 통한 뛰어난 확장성을 가지고 있습니다.

## NPM

**Node Package Manager**

[JavaScript](#javascript)를 위한 패키지 관리자로, 터미널 입력만으로 다양한 오픈소스 라이브러리를 쉽게 다운로드할 수 있도록 지원합니다. 이름에서 볼 수 있듯 [Node.js](#nodejs)를 위해 만들어졌으나, [React](#react)에서도 사용할 수 있습니다.

## NVM

**Node Version Manager**

[Node.js](#nodejs)의 버전 관리 도구입니다. 하나의 컴퓨터에서 다양한 버전의 Node.js를 설치하고 전환할 수 있게 해 줍니다.

## Prettier

들여쓰기, 줄바꿈 등의 코드 포매팅을 자동으로 수행하는 도구입니다. [ESLint](#eslint)와 결합하여 사용할 수 있습니다.

## Promise

[ES6](#es6)부터 추가된 [JavaScript](#javascript) 객체 중 하나로, [비동기 함수](#비동기-프로그래밍)에 의해 반환될 미래의 결괏값을 처리할 수 있는 방법을 제공합니다. ES2017 이후로는 [문법적 설탕](#문법적-설탕)에 해당하는 `async` 구문으로 대체할 수 있습니다.

## React

[사용자 인터페이스](#사용자-인터페이스)를 선언적으로 정의하기 위한 [JavaScript](#javascript) 라이브러리입니다. Facebook에서 개발했습니다.

## REST API

**REpresentational State Transfer API**

효율적, 안정적이며 확장가능한 분산시스템을 가져올 수 있는 소프트웨어 아키텍처 디자인 제약의 모음입니다. REST API는 특정한 [API](#api)의 이름이 아닌 추상적인 규칙이며, 이를 만족하는 API를 RESTful하다고 합니다.

## SPA

**Single Page Application**

서버로부터 완전히 새로운 페이지를 불러오지 않고 현재의 페이지를 동적으로 다시 작성함으로써 사용자와 소통하는 웹 애플리케이션이나 웹사이트입니다. 즉, 페이지에 해당하는 [HTML](#html) 파일은 하나만 존재하며, 페이지 이동(처럼 보이는 것)을 포함한 모든 동작은 [JavaScript](#javascript)로 이루어집니다.

## SQL

**Structured Query Language**

관계형 데이터베이스 관리 시스템의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어입니다. 관계형 데이터베이스 관리 시스템에서 자료의 검색과 관리, 데이터베이스 스키마 생성과 수정, 데이터베이스 객체 접근 조정 관리를 위해 고안되었습니다.

## SSL

**Secure Sockets Layer**

두 서버 사이에 전송된 데이터를 암호화하여 인터넷 연결의 보안을 유지하는 암호 규약입니다.

## SSO

**Single Sign On**

한 번의 인증 과정으로 여러 컴퓨터 상의 자원을 이용 가능하게 하는 인증 기능입니다. 네이버 아이디나 SNS 계정을 통해 다른 사이트의 로그인을 수행할 수 있는 것도 이에 해당합니다.

## TypeScript

정적 타입 선언 개념을 추가한 [JavaScript](#javascript)의 슈퍼셋 언어입니다. Microsoft에서 개발했습니다.

## URI/URL

**Universal Resource Identifier**

**Universal Resource Locator**

네트워크 상에서 자원이 어디 있는지를 알려주기 위한 규약입니다. protocol, host(domain), port에 해당하는 부분은 URL이지만, query string을 포함한 전체는 URI라고 합니다.

## Virtual DOM

[React](#react)에서 사용하는 가상화된 [DOM](#dom)입니다. React는 컴포넌트 트리에 변동 사항이 있을 때 먼저 Virtual DOM을 변경하고, 실제 DOM과 Virtual DOM을 비교하여 실제 DOM에는 가능한 한 최소한의 변경만 수행합니다.

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

## 객체

**Object**

객체는 특정한 개념과 관련된 속성(property) 및 [메서드](#메서드)(method)의 집합입니다. 내장 객체와 사용자 지정 객체로 분류할 수 있으며, 사용자 지정 객체는 객체 [리터럴](#리터럴)로 선언하거나 [생성자 함수](#생성자-함수)를 선언하는 방법으로 만들 수 있습니다.

## 객체 지향 프로그래밍

**Object Oriented Programming (OOP)**

프로그램 내부의 모든 단위를 [객체](#객체)로 나누고, 이들의 상호 작용을 통해 코드를 작성하는 방법론입니다.

## 고차 함수

**Higher Order Function**

다른 함수를 인자로 받는 함수입니다. 배열(Array)의 메서드인 `map`, `filter`, `reduce`, `forEach` 등이 이에 해당됩니다.

## 깊은 복사

**Deep Copy**

[객체](#객체)나 배열을 복사할 때, [얕은 복사](#얕은-복사)와는 달리 배열 내부에 존재하는 객체나 배열까지 모두 복사하는 방식입니다. 주로 [재귀 함수](#재귀-함수)를 이용해 깊은 복사를 수행할 수 있습니다.

## 단락 평가

**Short-Circuit Evaluation**

조건 연산자 사용 시, 다른 우선 순위가 없다면 왼쪽 조건을 평가하고 필요한 경우에만 오른쪽 조건을 평가하는 것입니다. 가령, OR (`||`) 연산자를 사용할 때 왼쪽 조건이 `true`라면 오른쪽 조건과 상관없이 전체가 `true`가 되므로 오른쪽 조건을 평가하지 않습니다. AND (`&&`) 연산자는 반대로 작동합니다.

단락 평가를 사용하면, `if`나 삼항 연산자를 사용하지 않고도 간단한 조건문을 구현할 수 있습니다.

```javascript
const val = document.getElementById("name").value;
val && console.log(`당신의 이름은 ${val}입니다.`); // val이 참 같은 값인 경우에만 콘솔 출력
val || console.log(`이름을 입력하지 않았어요.`); // val이 거짓 같은 값인 경우에만 콘솔 출력
```

## 라이브러리

**Library**

프로그래밍에서 공통적으로 사용될 수 있는 기능들을 모듈화한 것입니다. [JavaScript](#javascript)의 대표적인 라이브러리로는 jQuery, [React](#react) 등이 있으며, [NPM](#npm)을 통해 필요한 라이브러리를 다운로드할 수 있습니다.

## 렌더링

**Rendering**

일반적인 [프론트엔드](#프론트엔드)에서는 [브라우저](#브라우저)가 [HTML](#html), [CSS](#css), [JavaScript](#javascript)를 읽어들여서 사용자가 볼 수 있는 화면을 그리는 것을 의미합니다.

[React](#react)에서는 React 엘리먼트가 눈으로 볼 수 있도록 그려지는 것을 의미합니다. 렌더링 과정에는 [Virtual DOM](#virtual-dom)을 사용한 DOM 업데이트가 포함됩니다. 렌더링은 [상태](#상태) 및 [프롭](#프롭) 변경, 부모 컴포넌트가 렌더링될 때 발생하며, 강제 재렌더링 기능도 있습니다.

## 리듀서 함수

**Reducer Function**

현재 값(상태)을 받아서 새 값(상태)을 반환하는 함수입니다. 주로 두 개의 인자(기존 값, 새로운 값)를 받아 하나의 값으로 병합하여 반환하고, 반한된 값이 기존 값이 되는 과정을 반복하여 모든 값들을 합쳐서 하나로 만듭니다. 배열의 `reduce()` 메서드, [React](#react)의 useReducer [Hook](#hooks) 등이 이에 해당합니다.

```javascript
const arr = [10, 20, 30, 40];
const sum = arr.reduce(
    (accumulatedValue, newValue) => accumulatedValue + newValue,
    0 // initial value
); // 100
```

## 리터럴

**Literal**

코드 상에서 데이터를 표현하는 방식입니다.

```javascript
const isVisible = true; // 논리 리터럴
const num1 = 1996; // 숫자 리터럴
const str1 = 'Jeongjoo'; // 문자 리터럴 1
const str2 = "Jeongjoo"; // 문자 리터럴 2
const str3 = `Hello, ${str1}!`; // 문자 리터럴 (템플릿 리터럴)
const reg1 = /\.js$/g; // 정규 표현식 리터럴
const arr1 = ["England", "France", "Germany", "Italy", "Spain"]; // 배열 리터럴
const obj1 = {
    name: "James",
    age: 17,
    hobbies: ["Soccer", "Travel", "Coding"]
}; // 객체 리터럴
const fn1 = function () {
    console.log("함수입니다.")
}; // 함수 리터럴
const fn2 = () => console.log("나도 함수다.") // 함수 리터럴 (화살표 함수)
```

## 메서드

**Method**

객체에 속한 함수이며, `this` 키워드를 사용해 객체 내부 속성을 조작할 수 있습니다. 단, [REST API](#rest-api)의 메서드는 [API](#api)를 통해 실행할 동작을 의미합니다(GET, POST, PUT, DELETE).

## 문법적 설탕

**Syntactic Sugar**

기존에 복잡한 코드를 통해 작성해야 했던 구문을 간략하게 만들어 주는 문법입니다. 문법적 설탕이라고 불리는 기능들은 새로운 기능이 아니며, 기존 기능을 더 편리하게 사용할 수 있는 또 다른 문법입니다.

## 백엔드

**Backend**

[프론트엔드](#프론트엔드)와 반대로, 클라이언트와 소통하는 위치에 있는 서버 단을 의미합니다. 일반적으로 호스팅 서버 및 [API](#api) 서버를 포함하며, 때로는 데이터베이스까지 포함하는 개념입니다. 유명한 백엔드 라이브러리/프레임워크로는 Spring([Java](#java)), Django(Python), Express([Node.js](#nodejs))가 있습니다.

## 브라우저

**Browser**

[HTML](#html), [CSS](#css), [JavaScript](#javascript) 코드를 입력받아 사용자와 상호작용할 수 있는 화면을 [렌더링](#렌더링)하는 프로그램입니다. Chrome, Firefox, Safari, Edge 등이 있습니다. 웹 브라우저마다 지원하는 JavaScript 코드 또는 브라우저 API가 상이할 수 있으므로([Can I use](https://caniuse.com) 사이트에서 확인), [프론트엔드](#프론트엔드) 개발자는 이 점에 유의해야 합니다.

## 비동기 프로그래밍

**Asynchronous Programming**

특정 작업의 실행 완료를 기다리는 동안 다른 작업을 수행하고, 작업이 완료되면 특정 [콜백 함수](#콜백-함수)를 실행하는 방법 등으로 알려주는 방식입니다.

## 사용자 인터페이스

**User Interface (UI)**

사람들이 컴퓨터와 상호 작용하는 시스템입니다. 사용자가 감각 기관을 통해 느끼고 조작할 수 있는 부분이므로, 사용자 경험(User eXperience)를 최대한 고려한 방법으로 작성됩니다.

## 상태

**State**

애플리케이션이 가지고 있으면서 때로는 변경해야 하는 값입니다. 하나의 상태를 여러 컴포넌트가 공유해야 할 때도 있으며, 이 경우 상태를 [프롭](#프롭)으로 내려보냅니다. [React](#react)에서의 상태 변경과 [렌더링](#렌더링)은 연동되어 동작합니다.

## 생성자 함수

**Constructor Function**

[객체](#객체)의 [인스턴스](#인스턴스)를 생성하는 함수입니다. 객체 생성에 필요한 값을 인자로 받으며, 별도의 `return` 값은 없어도 무방합니다.

## 순수 함수

**Pure Function**

부수 효과(side effect)가 없이, 입력이 같다면 출력이 같음이 보장되는 함수입니다.

## 선언형 프로그래밍

**Declarative Programming**

명령형 프로그래밍과 반대로, 구체적인 지시가 아닌 최종적인 결과물의 형태를 작성하는 프로그래밍 방식입니다. 

[React](#react)에서 [JSX](#jsx)를 이용해 [사용자 인터페이스](#사용자-인터페이스)를 작성하는 것이 바로 이 선언형 프로그래밍에 해당합니다.

## 얕은 복사

**Shallow Copy**

[객체](#객체)나 배열을 복사할 때, [깊은 복사](#깊은-복사)와는 달리 중첩된 객체나 배열은 복사하지 않는 방식입니다. [ES6](#es6)에 추가된 스프레드 연산자(...)를 사용하면 얕은 복사를 손쉽게 구현할 수 있습니다.

```javascript
const arr1 = [30, 50, [70, 90, 110], 130];
const arr2 = [...arr1]; // 얕은 복사
```

## 옵셔널 체이닝

**Optional Chaining**

[객체](#객체)가 중첩된 구조에서 특정 값에 접근하려고 할 때, 해당 값이 없다면 일반적으로 `undefined`를 반환하지만, 해당 값을 포함해야 할 객체 자체가 존재하지 않으면 오류가 발생합니다. 특히 [API](#api) 호출로 가져온 [JSON](#json) 객체의 경우 이런 문제가 종종 발생합니다. ES2020에서 추가된 옵셔널 체이닝을 사용하면 객체 내부로 하나씩 접근하는 과정에서 특정한 속성이 존재하지 않으면 바로 `undefined`를 반환하므로 오류를 막을 수 있습니다.

```javascript
const obj = {
    students: [
        {
            name: "Jeongjoo",
            hobbies: null
        }
    ]
};
obj.students[1]; // undefined
obj.students[1].name; // Uncaught TypeError: Cannot read property 'name' of undefined
obj.students[1]?.name; // undefined
const namae = obj.students[1]?.name || "김철수"; // 해당 값이 거짓 같은 값인 경우 "김철수"를 사용
const nombre = obj.students[1]?.name ?? "홍길동"; // 해당 값이 null 또는 undefined일 경우 "홍길동"을 사용
```

## 이벤트

**Event**

시스템에서 일어나는 사건(action) 혹은 발생(occurrence)입니다. 시스템이 이벤트를 알려주는 이유는 각각의 이벤트가 발생할 시 호출될 코드를 작성할 수 있도록 하기 위해서입니다. 이벤트 발생 시 이는 태스크 큐에 순차적으로 들어가며, 동기적으로 작성된 코드가 모두 실행을 마친 이후 이벤트 루프에 의해 FIFO(First-In-First-Out) 순서로 처리됩니다.

## 이벤트 버블링

**Event Bubbling**

[DOM](#dom)의 특정 노드 객체에서 [이벤트](#이벤트)가 발생했을 때, 노드 트리 구조의 상위 객체로 끝까지 이벤트가 전달되는 현상입니다(상향식). 이벤트 버블링은 기본적으로 발생하며, `event.stopPropagation()` [메서드](#메서드)를 사용하여 이벤트 버블링을 방지할 수 있습니다.

## 이벤트 캡처링

**Event Capturing**

[DOM](#dom)의 특정 노드 객체에서 [이벤트](#이벤트)가 발생했을 때, 노드 트리 구조의 하위 객체로 끝까지 이벤트가 전달되는 현상입니다(하향식).

## 익명 함수

**Anonymous Function**

함수 선언식으로 만들어지지 않은 함수로, 특정한 변수에 대입되지 않는 이상 이름이 없습니다. 특정한 함수를 [콜백 함수](#콜백-함수)로 넘길 때 많이 사용합니다.

## 인스턴스

**Instance**

프로그래밍 일반에서는 추상적인 구조를 바탕으로 구현된 구체적인 실체를 의미합니다. 가령, 컴퓨터 프로그램의 인스턴스는 프로세스이며, 하나의 프로그램에 대한 여러 개의 프로세스가 동시에 실행될 수 있습니다.

[JavaScript](#javascript)에서는 [객체](#객체)의 [생성자 함수](#생성자-함수)에 `new` 키워드를 붙여서 인스턴스를 생성합니다. 생성자 함수가 객체를 만들어내는 틀이라면, 인스턴스는 그 틀에 의해 만들어진 각각의 결과물입니다.

```javascript
const person1 = new Person("Jeongjoo");
```

## 자료형

**(Data) Type**

프로그래밍 언어에서 여러 종류의 데이터를 식별하는 분류입니다. [JavaScript](#javascript)에서는 기본 자료형으로 `Number`(수), `String`(문자열), `Boolean`(논리값), `Null`(의도적으로 존재하지 않는 값), `Undefined`(할당되지 않은 값), `Symbol`이 있으며, 별도로 `Object`([객체](#객체))가 존재합니다. 함수(Function), 배열(Array)는 객체에 해당합니다.

## 재귀 함수

**Recursive Function**

자기 자신을 호출하는 함수입니다. 수학에서의 점화식과 유사한 특징을 가지고 있습니다.

## 참 같은 값

**Truthy/Falsy Value**

[JavaScript](#javascript)에서는 문맥에 따라 [자료형](#자료형) 변환이 이루어지므로, 모든 값은 조건문 등에서 `true` 혹은 `false`로 평가될 수 있습니다. 아래 표에 따라 거짓 같은 값이 아니면 모두 참 같은 값입니다. 예를 들어, 빈 배열 `[]`, 빈 객체 `{}`도 참으로 분류됩니다.

| 참 같은 값 | 거짓 같은 값 |
| --- | --- |
| 나머지 모든 값 | `0`, `-0`, `''`, `null`, `undefined`, `NaN` | 

## 컴포넌트

**Component**

React에서 [사용자 인터페이스](#사용자-인터페이스)를 만드는 단위입니다. 클래스형과 함수형 두 가지 방법으로 선언할 수 있습니다. 컴포넌트는 계층적 구조를 가지며, 이를 컴포넌트 트리라고 합니다.

**함수형** 컴포넌트의 경우, [프롭](#프롭)을 입력받아 [JSX](#jsx) 형식의 사용자 인터페이스를 반환합니다.

```jsx
import React from "react";

export default function Main({ name }) {
    return <h1>Hello World, {name}!</h1>;
}
```

## 클래스

**Class**

[Java](#java) 등 [객체 지향 프로그래밍](#객체-지향-프로그래밍) 언어에서는 특정 [객체](#객체)를 선언하기 위해 속성 및 [메서드](#메서드)를 정의하는 일종의 틀입니다.

단, [JavaScript](#javascript)의 [ES6](#es6)에서 추가된 `class` 문법은 기본적으로 [생성자 함수](#생성자-함수)를 정의하는 [문법적 설탕](#문법적-설탕)입니다.

## 클로저

**Closure**

함수와 함수가 선언된 어휘적 환경의 조합입니다. 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수는 함수가 반환 등의 방법으로 기존과 다른 맥락에서 사용된다고 해도 기억됩니다.

## 콜백 함수

**Callback Function**

다른 함수에 인자로 전달되는 함수입니다. [고차 함수](#고차-함수) 및 [비동기 프로그래밍](#비동기-프로그래밍)에서 주로 쓰입니다.

```javascript
setTimeout(() => {
    console.log("1초가 지났습니다.")
}, 1000)
```

## 콜 스택

**Call Stack**

일반적인 프로그래밍 언어가 작업을 수행하는 방식입니다. 코드는 일반적으로 함수 단위(실행 콘텍스트 단위)로 콜 스택에 들어오며, 나중에 들어온 함수가 먼저 작업을 수행하는 방식으로 모든 작업을 수행합니다.

[JavaScript](#javascript)의 콜 스택은 JavaScript 코어 엔진에 위치합니다. JavaScript는 싱글 스레드 언어이므로, 일반적으로 하나의 콜 스택을 가지고 있습니다.

## 태스크 큐

**Task Queue**

[JavaScript](#javascript)에서 [비동기 프로그래밍](#비동기-프로그래밍)을 처리하는 방식입니다. 비동기 작업의 [콜백 함수](#콜백-함수)는 발생한 순서대로 태스크 큐에 들어가며, 이벤트 루프는 [콜 스택](#콜-스택)이 비어있을 때 태스크 큐에 있는 작업을 먼저 들어온 것부터 하나씩 콜 스택으로 넘겨 처리합니다.

JavaScript의 태스크 큐는 실행 환경인 [브라우저](#브라우저)(또는 [Node.js](#nodejs))에 위치합니다.

## 프로토타입

**Prototype**

객체와 객체의 연결을 통한 단방향적인 공유 관계로, [JavaScript](#javascript)에서 [객체](#객체) 간 속성과 [메서드](#메서드)를 상속하기 위해 쓰이는 방식입니다. 모든 객체는 자신의 프로토타입 객체를 가지고 있으며(단, 최상위 객체 `Object`의 프로토타입은 `null`), 이를 통해 상위 객체의 속성과 메서드를 마치 자신의 것처럼 사용할 수 있습니다.

## 프론트엔드

**Frontend**

클라이언트 단, 즉 [브라우저](#브라우저)에 의해 다루어지는 영역([HTML](#html), [CSS](#css), [JavaScript](#javascript))을 의미합니다. 유명한 프론트엔드 라이브러리/프레임워크로는 [React](#react), Vue.js, Angular, jQuery가 있습니다.

## 프롭

**Props**

[컴포넌트](#컴포넌트)에 전달되는 속성입니다. [HTML](#html)의 속성(Attribute)와 비슷한 문법을 사용합니다. 

## 함수형 프로그래밍

**Functional Programming**

데이터 처리를 수학적 함수의 계산처럼 취급하고 [상태](#상태)와 가변 데이터를 멀리하는 프로그래밍 패러다임의 하나입니다. 함수를 변수에 넣을 수 있고, 다른 함수의 입력 및 출력으로 사용할 수 있습니다(일급 시민). 또한 [순수 함수](#순수-함수)의 사용을 지향합니다.

## 화살표 함수

**Arrow Function**

`() => {}` 형식의 간단한 문법을 제공하는 [익명 함수](#익명-함수)입니다. [ES6](#es6)부터 지원하는 기능입니다.

```javascript
const random = () => Math.round(Math.random())
const double = x => x * 2
const multiply = (x, y) => {
    return x * y
}
```