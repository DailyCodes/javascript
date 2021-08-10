/*
여기에 JavaScript 코드를 작성합니다.
*/

const findValue = (obj, path) => {
    if (typeof obj !== 'object') {
        console.log(`${path}/${obj}`)
        return
    }

    for (key in obj) {
        findValue(obj[key], `${path}/${key}`)
    }
}

fetch("./data.json")
    .then((res) => res.json())
    .then((obj) => {
        for (key in obj) {
            findValue(obj[key], '')
        }
    })
    .catch(console.error)