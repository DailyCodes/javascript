/*
여기에 JavaScript 코드를 작성합니다.
*/

// 날짜 포매팅 코드
const formatDate = (date) => {
    const [year, month, day] = date.split(',').map(value => value.trim())
    return `${year}년 ${month}월 ${day}일`
}

// Vanilla JS로 테이블 작성 코드
const createTable = (headers, data) => {
    const tbl = document.createElement("table")
    const thead = document.createElement("thead")
    const headLine = document.createElement("tr")
    headers.forEach((header) => {
        const headItem = document.createElement("th")
        headItem.innerText = header
        headLine.appendChild(headItem)
    })
    thead.appendChild(headLine)
    tbl.appendChild(thead)
    const tbody = document.createElement("tbody")
    data.forEach((line) => {
        const bodyLine = document.createElement("tr")
        for (key in line) {
            const bodyItem = document.createElement("td")
            bodyItem.innerText = key === "birthday" ? formatDate(line[key]) : line[key]
            bodyLine.appendChild(bodyItem)
        }
        tbody.appendChild(bodyLine)
    })
    tbl.appendChild(tbody)
    return tbl
}

fetch("./data.json")
    .then(response => response.json())
    .then(data => document.body.appendChild(createTable(["직업", "이름", "성별", "주소", "메일", "생일"], data)))
    .catch(console.error)