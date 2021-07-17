# 하루에 하나씩! JavaScript 릴레이

배워도 배워도 끝이 없는 JavaScript 개념, 돌아가면서 정리해 보면 어떨까요?

자료조사를 통한 깔끔한 설명과 함께, 웹에서 구동 가능한 샘플 코드까지 만들어 봅시다.

## 기본 규칙

원활한 릴레이 수행을 위한 규칙입니다.

* 릴레이는 매일(주말 포함? 제외?) 진행하며, 각자 돌아가면서 하나의 주제를 담당합니다(발표는 하지 않습니다).
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
    * 아래 템플릿을 참고합니다.
3. GitHub 사이트에서 직접 파일 업로드를 수행합니다.
    * 폴더째(예: 0719) Drag & Drop해야 합니다.
    * 수정 사항이 있을 때, 파일을 직접 수정하거나 바꿔치기할 수 있습니다.
    * Commit Message는 생성 및 수정 시 각각 다음과 같이 해 주세요.
        * 파일 최초 업로드: 0719 파일 생성
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
