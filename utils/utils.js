// 1. 표제어를 문서 내 링크로 바꾸기
const convertToLink = (keyword) => keyword
    .toLowerCase()
    .replaceAll(/\s/g, '-')
    .replaceAll(/[\.\/\?\!]/g, '')

// 2. 용어집 바로가기 표 만들기
const createTable = (keywordArr, col = 7) => {
    let htmlRawString = `
    <table>
        <thead>
            <tr>
                <th colspan="${col}" style="text-align: center;">바로가기</th>
            </tr>
        </thead>
        <tbody>
            <tr style="text-align: center;">`
    keywordArr.forEach((value, index, arr) => {
        // 첫 항목, 마지막 항목 제외한 중간의 열 경계 항목
        if ((index !== 0) && (index !== arr.length - 1) && (index % col === 0)) {
            htmlRawString += `
                    </tr>
                    <tr style="text-align: center;">`
        }
        htmlRawString += `
                    <td>
                        <a href="#${convertToLink(value)}">${value}</a>
                    </td>`
    })
    htmlRawString += `
            </tr>
        </tbody>
    </table>`
    return htmlRawString
}
const sampleArr = [
    "AJAX",
    "API",
    "Babel",
    "CRA",
    "CSS",
    "DNS",
    "DOM",
    "ECMAScript",
    "ESLint",
    "ES6",
    "Git",
    "GraphQL",
    "Hooks",
    "HTML",
    "HTTP",
    "HTTPS",
    "Java",
    "JavaScript",
    "JSON",
    "JSX",
    "NaN",
    "Node.js",
    "NPM",
    "NVM",
    "Prettier",
    "Promise",
    "React",
    "REST API",
    "SPA",
    "SQL",
    "SSL",
    "SSO",
    "TypeScript",
    "URI/URL",
    "Virtual DOM",
    "Webpack",
    "WWW",
    "XML",
    "객체",
    "객체 지향 프로그래밍",
    "고차 함수",
    "깊은 복사",
    "단락 평가",
    "라이브러리",
    "렌더링",
    "리듀서 함수",
    "리터럴",
    "메서드",
    "문법적 설탕",
    "백엔드",
    "브라우저",
    "비동기 프로그래밍",
    "사용자 인터페이스",
    "상태",
    "생성자 함수",
    "순수 함수",
    "선언형 프로그래밍",
    "얕은 복사",
    "옵셔널 체이닝",
    "이벤트",
    "이벤트 버블링",
    "이벤트 캡처링",
    "익명 함수",
    "인스턴스",
    "자료형",
    "재귀 함수",
    "참 같은 값",
    "컴포넌트",
    "클래스",
    "클로저",
    "콜백 함수",
    "콜 스택",
    "태스크 큐",
    "프로토타입",
    "프론트엔드",
    "프롭",
    "함수형 프로그래밍",
    "화살표 함수"
]
console.log(createTable(sampleArr, 6))