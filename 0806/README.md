# async/await

[**`async`**](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function), 그리고 [**`await`**](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await)은 Javascript의 비동기 처리 패턴 중 가장 최근에 나온 문법입니다. 기존의 비동기처리 방식인 콜백함수와 `Promise`의 단점을 보완한 문법이고, 이를 활용하면 `Promise`를 조금 더 편하게 사용할 수 있습니다.

### **async**에 관하여

`async` 문법에 관하여 살펴봅시다.

`async`는 function 앞에 위치하는 특징이 있습니다.

```javascript
async function f() {
  return 1;
}
```

function 앞에 `async`를 붙이면 해당 함수는 항상 `Promise`를 반환합니다. 프라미스가 아닌 값을 반환하더라도 이행 상태의 `Promise`(resolved promise)로 값을 감싸 이행된 `Promise`가 반환되도록 합니다.

아래 예시의 함수를 호출하면 result가 1인 이행 `Promise`가 반환됩니다.

```javascript
async function f() {
  return 1;
}

f().then(alert); // 1
```

명시적으로 `Promise`를 반환하는 것도 가능합니다. 결과는 동일합니다.

```javascript
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

`async`가 붙은 함수는 반드시 `Promise`를 반환하고, `Promise`가 아닌 것은 `Promise`로 감싸 반환합니다. `async`가 제공하는 기능은 이뿐만이 아닙니다. 또 다른 키워드 `await`는 `async` 함수 안에서만 동작합니다.

### **await**에 관하여

`await` 문법에 관하여 살펴봅시다.

```javascript
// await는 async 함수 안에서만 동작합니다.
const value = await promise;
```

Javascript는 `await`을 만나면 `Promise`가 처리(settled)될 때까지 기다리고, 결과는 그 이후 반환됩니다. 아래의 1초 후 이행(완료)되는 `Promise`를 예시로 사용하여 `await`가 어떻게 동작하는지 확인할 수 있습니다.

```javascript
async function f(){
	const promise = new Promise((resolve,reject)=>{
    	setTimeout(()=>resolve('호출완료!'),1000)
    });
  	const result = await promise; // promise가 이행(완료)될 때까지 기다림(*)
  	alert(result); 
}

f()// '호출완료!'
```

함수를 호출하고, 함수 본문이 실행되는 도중에 (*)로 표시한 부분에서 실행이 잠시 중단되었다가 `Promise`가 처리되면 실행이 재개됩니다. 그리고 이 때 `Promise` 객체의 결과 값이 변수 `result` 에 할당됩니다.

`await`은 말 그대로 `Promise`가 처리될 때까지 함수의 실행을 기다리게 만듭니다. `Promise`가 처리되면 그 결과와 함께 실행이 재개됩니다.

`await`은 `promise.then`보다 좀 더 세련되게 `Promise`의 결과 값을 얻게 해주는 문법입니다. 또한, `promise.then`보다 가독성이 좋고 사용하기도 쉽습니다. 

* **`async/await`와 `promise.then/catch`를 비교했을 때의 장점**

    1. `async/await`을 사용하면 `await`가 대기를 처리해주기 때문에 `promise.then/catch`에서의 .`then`이 필요하지 않습니다.

    2. `.catch` 대신 일반 `try..catch`를 사용할 수 있습니다.

* **`async/await` works well with `Promise.all`**
    1. 여러개의 `Promise`가 모두 처리되길 기다려야 하는 상황이라면 이 `Promise`들을 `Promise.all`로 감싸고 여기에 `await`을 붙여 사용할 수 있습니다.

마지막으로, 일반 함수에는 `await`을 사용할 수 없다는 특징이 있습니다. `async` 함수가 아닌데 `await`을 사용하면 문법 에러가 발생하기 때문입니다.

## ES2017부터 추가된 async/await을 이용해 비동기 함수를 다루는 방법은 무엇인가?

비동기 함수를 `async` 함수로 만들기 위해서는 `function()`앞에 `async` 키워드를 추가합니다. `async` `function()`은 `await` 키워드가 비동기 코드를 호출할 수 있게 해주는 함수입니다.

```javascript
function hello() { return "Hello" };
hello();
```

위의 함수는 "Hello"를 반환하지만, `function()` 앞에 `async` 키워드를 추가하면 어떻게 될까요?

```javascript
async function hello() { return "Hello" };
hello();
```

이제 코드가 `Promise`를 반환합니다. 이것이 `async` 기능의 특징 중 하나입니다. 즉, `async` 함수를 사용하면 결과를 직접 반환하는 것이 아니라 `Promise`를 반환하게 되는 것입니다.

이어 `Promise`로 계산되는 식 앞에 await 키워드를 추가하면 `Promise`가 해결될 때까지 대기하다 해결된 후 함수의 나머지 부분이 계속 실행됩니다. 이 두 함수를 사용하면 복잡한 `then`, `catch` 구문 없이 `Promise`를 다루고 비동기 코드의 가독성도 높일 수 있습니다.

## Promise로 만든 코드를 async/await으로 다시 작성하기

```javascript
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
```

위 코드를 `.then/catch` 대신 `async/await`를 사용하여 다시 작성할 수 있습니다.

```javascript
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
```