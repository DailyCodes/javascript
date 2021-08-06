function loadJson(url) {
    return fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    })
}

loadJson('./data.json')
    .then(console.log)
    .catch(console.error)

async function asyncLoadJson(url) { // 함수 asyncLoadJson()은 async 함수가 된다.
    const response = await fetch(url) // 함수 안의 .then()을 전부 await로 바꾼다.
    if (response.status === 200) {
        const json = await response.json()
        return json;
    }
    throw new Error(response.status);
}

asyncLoadJson('./undefined.json')
    .then(console.log)
    .catch(console.error)
// asyncLoadJson()에서 던져진 에러는 .catch()에서 처리된다.
// asyncLoadJson()을 호출하는 코드는 async 함수 내부가 아니기 때문에 await asyncLoadJson(…)을 사용할 수 없다.