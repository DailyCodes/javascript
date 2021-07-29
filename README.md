# 하루에 하나씩! JavaScript 릴레이

배워도 배워도 끝이 없는 JavaScript 개념, 돌아가면서 정리해 보면 어떨까요?

자료조사를 통한 깔끔한 설명과 함께, 웹에서 구동 가능한 샘플 코드까지 만들어 봅시다.

<table>
    <thead>
        <tr>
            <th colspan="4" style="text-align: center;">빠른 링크</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <a href="#커리큘럼">커리큘럼</a>
            </td>
            <td>
                <a href="#규칙">규칙</a>
            </td>
            <td>
                <a href="#템플릿">템플릿</a>
            </td>
            <td>
                <a href="/javascript/docs/glossary.html">용어집</a>
            </td>
        </tr>
    </tbody>
</table>

# 커리큘럼

비슷한 주제끼리 묶은 커리큘럼입니다. 실제 활동 순서는 이와 다를 수 있습니다.

<table>
    <caption>표. 커리큘럼</caption>
    <thead>
        <tr>
            <th style="width: 10%;">분류</th>
            <th style="width: 20%;">주제</th>
            <th style="width: 70%;">실습</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;" rowspan="5">객체</td>
            <td style="text-align: center;"><a href="/javascript/docs/0724.html">객체 생성자</a></td>
            <td style="text-align: left;"><a href="/javascript/0724/">사칙연산을 지원하는 계산기 만들기</a><br>- 필요한 속성 및 사칙연산 메서드를 가지는 객체를 생성하고, <code>new</code> 키워드로 생성할 수 있도록 해야 함<br>- 단, 나눗셈은 소수 둘째 자리까지만 표시 (반올림)<br>- 부호 바꾸기 (양수→음수, 음수→양수)<br>- 숫자 (0~9) 및 기호(+, -, *, /, =)는 버튼으로 만들기</td>
        </tr>
        <tr>
            <td style="text-align: center;">얕은 복사, 깊은 복사</td>
            <td style="text-align: left;">객체 속에 객체가 있는 중첩 구조를 만들고, 이를 각각 얕은 복사와 깊은 복사한 다음 안쪽 객체의 값을 변경하고 콘솔에 출력하기<br>- 얕은 복사에서는 원본과 복사본의 값이 동일함 (같은 객체이므로)<br>- 깊은 복사에서는 원본과 복사본의 값이 달라짐 (다른 객체이므로)</td>
        </tr>
        <tr>
           <td style="text-align: center;"><a href="/javascript/docs/0720.html">랜덤값 추출</a><br>(Math 객체)</td>
           <td style="text-align: left;"><a href="/javascript/0720/">오늘의 운세 만들기</a><br>- 랜덤한 값을 생성하여 미리 저장해 둔 운세 중 하나를 표시</td>
        </tr>
        <tr>
            <td style="text-align: center;"><a href="/javascript/docs/0721.html">날짜와 시간</a><br>(Date 객체)</td>
            <td style="text-align: left;"><a href="/javascript/0721/">디데이 카운터 만들기</a><br>- 오늘이 기준 일자로부터 며칠 지났는지(남았는지) 표시하기<br>- 기준 일자로부터 100일 후의 년.월.일 표시하기<br>- 전역일 계산기 (선택 사항 - optional)<br>- 네이버 디데이 계산기 참고</td>
        </tr>
        <tr>
            <td style="text-align: center;"><a href="/javascript/docs/0722.html">정규 표현식</a><br>(RegExp 객체)</td>
            <td style="text-align: left;"><a href="/javascript/0722/">패턴에 맞는 데이터만 골라 보여주기</a><br>- 데이터는 <code>script.js</code> 파일에 객체 <code>{ }</code> 로 저장<br>- 가령 <code>이름/학번/학과</code>가 저장된 학생 데이터에서 이름의 패턴이 맞는 학생 출력 (단순히 이름만 출력하면 안 됨)</td>
        </tr>
        <tr>
            <td style="text-align: center;" rowspan="4">함수</td>
            <td style="text-align: center;"><a href="/javascript/docs/0726.html">고차 함수</a></td>
            <td style="text-align: left;"><a href="/javascript/0726/">여러 수를 한꺼번에 입력</a>받고, <code>n</code>의 배수만 출력하기<br>- 입력은 텍스트 상자에 쉼표(<code>,</code>)를 구분자로 수 나열<br>- 텍스트 박스를 하나 더 생성하여 <code>n</code> 입력<br>- 출력은 콘솔이나 <code>alert()</code> 등 편한 방법으로<br>- 반드시 고차 함수를 사용하고, 고차 함수의 인수로는 화살표 함수를 사용해야 함<br>- 응용: 여러 수를 한꺼번에 입력받고, <code>n</code>제곱하기 (선택 사항 - optional)</td>
        </tr>
        <tr>
            <td style="text-align: center;"><a href="/javascript/docs/0727.html">클로저</a></td>
            <td style="text-align: left;"><a href="/javascript/0727/">함수 공장 만들기</a><br>- 각각 2의 n승, 3의 n승, 10의 n승을 구하는 <code>powerOf2(n)</code>, <code>powerOf3(n)</code>, <code>powerOf10(n)</code> 함수를 작성하고 실행 결과 콘솔에 출력<br>- 단, 클로저의 원리를 사용해야 함</td>
        </tr>
        <tr>
            <td style="text-align: center;">Promise</td>
            <td style="text-align: left;">현재 위치를 바로 확인할 수 있는 Google 지도 링크 만들기<br>- <code>navigator.geolocation.getCurrentPosition()</code>은 콜백을 이용하는 비동기 함수이지만, Promise로 재정의 (<code>return new Promise()</code>)<br>- <code>.then</code>을 이용하여 위치 정보를 받아온 후에, Google 지도로 연결되는 링크 생성 (<code>`https://www.google.com/maps/@${위도},${경도}`</code>)<br>- 웹 페이지에 구글 지도 첨부하기 (참고 링크) (선택 사항 - optional)</td>
        </tr>
        <tr>
            <td style="text-align: center;">async/await</td>
            <td style="text-align: left;">Promise로 작성한 코드를 <code>async/await</code>으로 다시 작성하기</td>
        </tr>
        <tr>
            <td style="text-align: center;" rowspan="3">이벤트</td>
            <td style="text-align: center;"><a href="/javascript/docs/0723.html">이벤트 기본</a></td>
            <td style="text-align: left;"><a href="/javascript/0723/">버튼을 눌러서 특정 콘텐츠를 보이거나 숨기기</a><br>- <code>document.getElementById()</code> 및 <code>버튼명.addEventListener()</code> 활용<br>- [이벤트 삭제] 버튼: 위에 만들었던 이벤트 삭제하기 (선택 사항 - optional)</td>
        </tr>
        <tr>
            <td style="text-align: center;"><a href="/javascript/docs/0728.html">버블링, 캡처링</a></td>
            <td style="text-align: left;"><a href="/javascript/0728/">중첩된 상자 만들기</a><br>- <strong>div</strong> 태그로 검은색 상자를 만들고(<code>background: black;</code>), 다시 그 안에 <strong>div</strong> 태그로 노란색 상자를 만듦(<code>background: yellow;</code>)<br>- 검은색 상자가 있는 영역을 클릭하면 'black'이라는 alert 메세지만 출력하고 상자 색깔이 노란색으로 바뀜, 노란색 상자가 있는 영역을 클릭하면 'yellow'이라는 alert 메세지만 출력하고 상자 색깔이 검은색으로 바뀜</td>
        </tr>
        <tr>
            <td style="text-align: center;">디바운싱, 쓰로틀링</td>
            <td style="text-align: left;">키보드 이벤트에 디바운싱, 스크롤 이벤트에 쓰로틀링 적용하기<br>- 이벤트 발생 시 콘솔에 출력</td>
        </tr>
        <tr>
            <td style="text-align: center;" rowspan="4">API</td>
            <td style="text-align: center;">JSON</td>
            <td style="text-align: left;">JSON 데이터 불러오기, 저장하기<br>- 다른 파일들과 같은 경로에 <code>data.json</code> 파일 생성<br>- Fetch API로 <code>data.json</code> 불러오기<br>- JSON 객체를 불러와서 수정하기<br>- JSON 파일 저장하기 (선택 사항 - optional)</td>
        </tr>
        <tr>
            <td style="text-align: center;">API</td>
            <td style="text-align: left;">영화 정보 검색 사이트 만들기<br>- 텍스트 상자에 영화명을 입력하고, 엔터 키를 누르면 검색<br>- 데이터는 예쁘게 보여주거나 가공하지 않아도 됨<br>- <a href="https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do" target="_blank">영화진흥위원회 공개 API</a> 활용</td>
        </tr>
        <tr>
            <td style="text-align: center;">위키백과 크롤링</td>
            <td style="text-align: left;">위키백과 크롤러 만들기<br>- 위키백과 API (<a href="https://www.mediawiki.org/wiki/API:Parsing_wikitext" target="_blank">Parsing Wikitext</a>)를 활용하여 HTML 가져오기 (Fetch API)<br>- HTML을 파싱하여 일반 텍스트로 변환하기 (<code>DOMParser.parseFromString()</code>)<br>- 해당 문서가 없을 경우의 예외 처리</td>
        </tr>
        <tr>
            <td style="text-align: center;">REST API</td>
            <td style="text-align: left;">RESTful API 기능 명세 작성</td>
        </tr>
        <tr>
            <td style="text-align: center;" rowspan="2">브라우저, DOM</td>
            <td style="text-align: center;">DOM 조작</td>
            <td style="text-align: left;"><code>index.html</code>에 HTML 요소를 직접 작성하지 않고, 오직 JavaScript만으로 필요한 HTML 요소를 추가하여 웹 페이지 만들기<br>- 단, 'Hello World' 한 줄만 추가하면 안 되고, 비교적 복잡한 HTML 요소들을 사용하여 성의있게 작성해야 함<br>- 웹 브라우저에서 JavaScript 사용을 중지시킨 다음에 웹 페이지 다시 로드하기 </td>
        </tr>
        <tr>
            <td style="text-align: center;">반응형 웹</td>
            <td style="text-align: left;">같은 페이지에서 데스크톱과 모바일을 모두 지원하는 사이트 만들기 (<code>Window.innerWidth</code>, <code>Window.innerHeight</code>)<br>- 데스크톱에서 접속했을 때, 화면에 "데스크톱" 표시<br>- 모바일에서 접속했을 때, 화면에 "모바일" 표시<br>- 현재 화면 크기 및 화면 크기 변화를 인식할 수 있어야 함</td>
        </tr>
        <tr>
            <td style="text-align: center;" rowspan="2">Node.js</td>
            <td style="text-align: center;">웹 서버 기초</td>
            <td style="text-align: left;">입력한 URL에 따라 다른 값을 반환하는 웹 서버 만들기<br>- switch문 사용</td>
        </tr>
        <tr>
            <td style="text-align: center;">Database 연결</td>
            <td style="text-align: left;">앞서 설계한 API를 데이터베이스와 연계하여 구현<br>- Firebase Database 계정 생성, 데이터 입력<br>- Node.js 서버와 Firebase Database 연결</td>
        </tr>
        <tr>
            <td style="text-align: center;" rowspan="2">React</td>
            <td style="text-align: center;">JSX</td>
            <td style="text-align: left;"><code>index.html</code>에 HTML 요소를 직접 작성하지 않고, 오직 JSX만으로 필요한 HTML 요소를 추가하여 웹 페이지 만들기<br>- 단, 'Hello World' 한 줄만 추가하면 안 되고, 비교적 복잡한 HTML 요소들을 사용하여 성의있게 작성해야 함<br>- 웹 브라우저에서 JavaScript 사용을 중지시킨 다음에 웹 페이지 다시 로드하기 </td>
        </tr>
        <tr>
            <td style="text-align: center;">useState</td>
            <td style="text-align: left;">버튼을 눌러서 값을 추가 및 삭제할 수 있는 카운터 만들기<br>- 전역 변수가 아닌 상태(<code>useState</code>)를 사용해야 함</td>
        </tr>
        <tr>
            <td style="text-align: center;" colspan="2">TypeScript</td>
            <td style="text-align: left;">기존 JavaScript로 작성한 코드를 가져와 TypeScript로 바꾸기<br>- 단, 'Hello World' 같은 단순한 것은 안됨</td>
        </tr>
        <tr>
            <td style="text-align: center;">기타</td>
            <td style="text-align: left;"><a href="/javascript/docs/0729.html">ES6 복습</a></td>
            <td style="text-align: left;"><a href="/javascript/0729/">사람별 운세 추가하기</a><br>- 스프레드 연산자 이용</td>
        </tr>
    </tbody>
</table>

# 규칙

원활한 릴레이 수행을 위한 규칙입니다.

* 릴레이는 매일 진행하며, 각자 돌아가면서 하나의 주제를 담당합니다(발표는 하지 않습니다).
* 주제에 대한 설명과 실행 가능한 샘플 코드를 작성하여 GitHub에 업로드합니다.
    * 폴더 이름: MMDD(예: 0719)
    * 파일 이름: `README.md`(주제 설명), `app.js`(Node.js 웹 서버), `index.html`, `style.css`, `script.js`(이상 클라이언트)
    * 해당일 담당자는 매일 밤 10시까지 GitHub 업로드를 수행하고, 카톡방에 링크를 올려 둡니다.
    * GitHub Pages와 연동하여 웹에서 바로 볼 수 있도록 제공할 예정입니다(일부 페이지 제외).
* 우선 20개 남짓의 주제로 시작하여, 기존 주제와 겹치지 않고 적당한 난이도를 가진 주제를 누구나 추가할 수 있습니다.
* `README.md` 파일의 내용이 불충분할 경우 재작성을 요청드릴 수 있습니다.

## 작성 및 업로드 순서

1. 해당 날짜(예: 0719)를 이름으로 한 폴더를 생성합니다.
2. Visual Studio Code로 해당 폴더를 열고, `README.md`, `app.js`, `index.html`, `style.css`, `script.js`를 작성합니다.
    * 아래 템플릿을 복사 및 붙여넣기하거나, [template](https://github.com/DailyCodes/javascript/tree/main/template) 폴더의 파일들을 다운로드하여 사용합니다.
3. GitHub 사이트에서 [Add file] > [Upload Files]를 클릭합니다.
    ![upload-step-1](https://user-images.githubusercontent.com/52960121/126040997-8eea2198-9e44-4135-baba-82ad4edb2f9e.gif)

4. 폴더째(예: 0719) Drag & Drop하여 업로드합니다.
    ![upload-step-2](https://user-images.githubusercontent.com/52960121/126041011-677352b2-9695-461e-9dc6-706a0f7c7881.gif)
    * 수정 사항이 있을 때, 파일을 직접 수정하거나 바꿔치기할 수 있습니다.
    * Commit Message는 생성 및 수정 시 각각 다음과 같이 작성합니다.
        * 파일 최초 업로드: 0719 파일 업로드
        * 파일 수정: 0719 파일 수정 + 아래 칸(Add an optional extended description...)에 자세한 수정사항 작성

# 템플릿

`README.md`, `index.html`, `app.js`는 아래 템플릿을 복사하여 사용합니다.

> `style.css` 및 `script.js` 파일은 별도의 템플릿이 없고, `index.html`과 같은 폴더에 새 파일을 만들어서 작성합니다.
> 코드 가독성을 위해 HTML 파일 내부에 CSS, JavaScript를 작성하는 것은 권장하지 않습니다.

## README.md

`README.md` 파일은 아래 템플릿을 참고하여 Markdown 문법으로 작성해 주시기 바랍니다.

* Notion에서 작업한 후 Markdown 파일에 복사 및 붙여넣기하는 방법도 있습니다.

```markdown
# 주제명

주제에 대한 간단한 설명

**굵은 글씨**

*기울어진 글씨*

`한 줄 코드`

> 인용

* 목록 1
* 목록 2
* 목록 3

1. 순서 1
2. 순서 2
3. 순서 3

| 열 1 | 열 2 | 열 3 |
| --- | --- | --- |
| 1-1 | 1-2 | 1-3 |
| 2-1 | 2-2 | 2-3 |

## 질문 1

![이미지 설명](이미지 URL)

[링크 텍스트](링크 주소)

## 질문 2

![이미지 설명](이미지 URL)

[링크 텍스트](링크 주소)

## 질문 3

![이미지 설명](이미지 URL)

[링크 텍스트](링크 주소)
```

## index.html

`index.html` 파일은 `<body>` 태그 안에 필요한 내용을 작성해 주시기 바랍니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 문서 제목 작성 -->
    <title>문서 제목</title>
    <link rel="stylesheet" href="style.css"></link>
</head>
<body>
    <!-- 문서 본문 작성 -->
    <script src="script.js"></script>
</body>
</html>
```

## app.js

`app.js` 파일은 그대로 사용하시면 됩니다.

- 서버 구동: Visual Studio Code 터미널에서 `node app.js`

```javascript
const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    const url = req
        .url
        .endsWith('/')
            ? `${req.url}index.html`
            : req.url
    const ext = url.split('.')[1]

    switch (ext) {
        case("html"):
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            fs
                .createReadStream(`.${url}`)
                .pipe(res)
            break;
        case("css"):
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/css')
            fs
                .createReadStream(`.${url}`)
                .pipe(res)
            break;
        case("js"):
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/javascript')
            fs
                .createReadStream(`.${url}`)
                .pipe(res)
            break;
        case("json"):
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            fs
                .createReadStream(`.${url}`)
                .pipe(res)
            break;
        default:
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
```
