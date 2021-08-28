# React Router

## React Router

React Router를 알기 위해서는 먼저 [**React**](https://www.notion.so/React-ecfdd205d0e44e898f75ef536b8bb36f)가 무엇인지 알아야 합니다. React는 **SPA**(Single Page Application)입니다. 단어 그대로, 페이지(page)가 하나(single)인 어플리케이션(application)입니다. 단일 페이지로 구성되어 있어 페이지 이동이 불가능합니다. 하지만, 단일 페이지로 구성되어 있는 경우에도 일반 웹 사이트처럼 URL에 따른 페이지 이동을 할 수 있도록 하는 기능이 존재하는데요! 우리가 다룰 **React Router**입니다.

SPA를 기반으로 개발할 때 흔히 겪는 어려움 중 하나가 바로 **웹 페이지의 라우팅**(경로에 따라 변경한다는 의미)입니다. 참고로 React 자체에는 라우팅에 관한 기능이 없습니다. SPA에서 라우팅을 구현하게 되면 URL Path가 아닌 현재의 어떤 컴포넌트가 렌더링 되어야 하는지를 state를 통해 관리를 합니다. 이에 다음과 같은 문제가 발생합니다.

- 컴포넌트가 전환되어도 URL은 고정되어 있기 때문에 **특정 페이지에 대한 즐겨찾기 등록이 불가능**합니다.
- 뒤로가기 버튼을 누르면 해당 앱 내의 이전 페이지로 이동하는 것이 아니라 **그 전에 서핑하던 다른 웹 사이트로 이동**합니다.
- 새로고침 버튼을 누르면 사용 중이던 컴포넌트가 아닌 무조건 **최초에 렌더링되었던 컴포넌트로 이동**합니다.

이를 극복하기 위한 라이브러리가 바로 React Router입니다.

React Router를 사용하면 앱에서 발생하는 라우팅이 `location`이나 `history`와 같은 브라우저의 내장 API와 완벽하게 연동이 됩니다. 따라서 기존 웹 사이트에서 가능하던 URL Path를 통한 라우팅이 가능하며 동시에 페이지의 동작이 SPA를 따릅니다.

### React Router의 **핵심 컴포넌트**

| 컴포넌트              | 특징                                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| `<Link>`              | HTML의 `<a>` 태그와 유사한 기능을 합니다. **경로를 변경하는 역할**을 합니다!                             |
| `<Switch>`, `<Route>` | 현재 주소창의 경로와 매치될 경우 보여줄 컴포넌트를 지정합니다. **경로를 매칭하는 역할**을 합니다!        |
| `<BrowserRouter>`     | `<Route>`와 `<Link>` 컴포넌트가 함께 유기적으로 동작하도록 묶을 때 사용합니다. **라우터 역할**을 합니다! |

## React에서 페이지 전환을 실행하는 방법은 무엇이고, 왜 그렇게 하는가?

웹의 초창기에는 매번 HTML 파일로 된 "페이지 전체"를 불러왔습니다. 이것은 **MPA**(Multy Page Application)방식으로, SPA와 달리 전체 페이지를 불러오다 보니 깜빡임, 불필요한 트래픽 발생, 느린 반응성이라는 문제점을 지닙니다.

앞서 다루었듯이 React에서 페이지 전환을 실행하는 방법은 MPA가 아닌, SPA를 기반으로 합니다. SPA는 필요한 데이터만을 서버에서 전달 받아 JavaScript가 동적으로 HTML 요소를 생성하도록 하여 화면에 보여줍니다. 즉, 브라우저에서 해당 부분만 업데이트 합니다. 물론, 하나의 페이지를 가지고 있지만 한 종류의 화면만 사용하는 것은 아닙니다. 동시에 각 화면에 따라 주소도 달라지게 됩니다.

## React Router를 사용해서 엔드포인트(경로)에 따라 페이지 전환을 하는 방법

React Router를 사용해서 엔드포인트(경로)에 따라 페이지 전환을 하기 위한 방법의 순서는 다음과 같습니다.

### 1. Router 라이브러리 다운

    a. 명령 프롬프트에서 `npx create-react-app` <앱이름> 명령어로 React 프로젝트 환경을 만듭니다.
    b. 만들어진 폴더로 진입합니다. `cd` <앱이름>
    c. `npm start` 명령어를 입력해서 정확한 경로에 위치하는지, React가 정상 작동하는지 확인합니다.
    d. React 환경에서 npm install react-router-dom 명령어를 통해 라이브러리를 설치합니다.

### 2. 컴포넌트 상단에 import

    a. 컴포넌트를 사용하기 위해서는 React Router 라이브러리에서 따로 불러와야 합니다. (사용하고자 하는 컴포넌트의 상단에 import 시킵니다.)
    b. import는 필요한 모듈을 불러오는 역할로, 비구조화 할당(destructuring assignment)과 비슷하게 이용할 수 있습니다.

```Javascript
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
```

### 3. 컴포넌트들을 이용해서 라우팅

```Javascript
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
```

- BrowserRouter 컴포넌트 사용법

  - BrowserRouter는 웹 애플리케이션에서 HTML5의 History API를 사용해 페이지를 새로고침하지 않고 주소를 변경할 수 있는 역할을 합니다.

  - BrowserRouter가 상위에 작성되어 있어야 Route 컴포넌트를 사용할 수 있습니다.

  - `<BrowserRouter>`로 `<Route>` 컴포넌트를 이용하기 위한 환경을 세팅합니다.

- Switch, Route 컴포넌트 사용법

  - Switch, Route는 경로를 매칭해주는 역할을 합니다.

  - `<Switch>` 컴포넌트는 여러 `<Route>`를 감싸서 그 중 경로가 일치하는 단 하나의 라우터만 렌더링을 시켜주는 역할을 합니다.

    - `<Switch>`와 `<Route>` 로 주소경로와 페이지 컴포넌트들을 연결합니다.
    - `<Route>` 컴포넌트는 path 속성을 지정하여 해당 path에 어떤 컴포넌트를 보여줄지 정합니다.
    - `<Route>`의 path 속성이 경로와 컴포넌트 이름이 동일해야 헷갈리지 않습니다.
    - `<Route>` 태그 안에 연결하고자 하는 컴포넌트를 넣어줍니다.
    - `<Switch>` 를 사용하지 않으면 매칭되는 모든 요소를 렌더링 합니다.
    - `<Link>` 컴포넌트가 정해주는 URL 경로와 일치하는 경우에만 작동됩니다.

- Link 컴포넌트 사용법

  - Link 컴포넌트는 경로를 연결해주는 역할을 합니다.

  - 페이지 전환을 통해 페이지를 새로 불러오지 않고 애플리케이션을 그대로 유지하여 HTML5 History API 를 이용해 페이지의 주소만 변경합니다.

  - `<Link>` 의 to 속성을 활용하여 Route 컴포넌트에 설정해준 path 주소를 연결합니다.

  - `ReactDOM`으로 렌더를 시키게 되면 `<Link>` 컴포넌트는 `<a>` 태그로 바뀌는 모습을 볼 수 있습니다.

## useRoute Hook을 사용해서 엔드포인트(경로)에 따라 페이지 전환을 하는 방법

`useRoute Hook`을 사용해서 엔드포인트(경로)에 따라 페이지 전환을 하기 위한 방법은 다음과 같습니다.

```Javascript
import * as React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function MyText() {
  const route = useRoute();

  return <Text>{route.params.caption}</Text>;
}
```
