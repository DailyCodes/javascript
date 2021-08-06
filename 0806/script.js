function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404

async function loadJson(url) {  // 함수 `loadJson`은 `aync` 함수가 된다.
 const response = await fetch(url) // 함수 안의 .then을 전부 await로 바꾼다.
 if(response.status == 200){
   const json = await response.json()
 return json;
 }
 throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404 // loadJson에서 던져진 에러는 .catch에서 처리된다.
				//loadJson을 호출하는 코드는 async 함수 내부가 아니기 때문에 await loadJson(…)을 사용할 수 없다.