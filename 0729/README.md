# ES6 문법 복습

지금까지 배운 [ES6](/javascript/docs/glossary.html#es6) 문법에 대하여 복습해봅시다!

## ES6부터 변수 및 상수 정의에 사용하는 키워드는 무엇이고, var과는 어떤 차이가 있는가?

ES6부터는 변수 및 상수를 정의할 때 `let` 또는 `const`라는 키워드를 사용합니다. 

먼저 변수 `let`이란, 정의된 블록 내에서만 존재하는 변수를 선언합니다. 이는 **지역 변수**(block-scope)에 해당합니다. `let`은 변수를 선언할 때 다른 값을 재할당 가능합니다. 다음으로 변수 `const`란, 정의된 블록 내에서만 존재하는 상수를 선언합니다. 이는 `let`과 마찬가지로 **지역 변수**(block-scope)에 해당합니다. `const`는 `let`과 달리 변수를 선언할 때 다른 값을 재할당 할 수 없습니다.

`var`은 ES6 문법 이전부터 사용하던 변수로, **전역 변수**(function-scope)에 해당합니다. 이러한 `var`과 `let` 그리고 `const`는 프로그램 내에서 변수가 접근할 수 있는 범위(scope)가 각각 **전역 변수**, **지역 변수**로 다릅니다. 

변수 `let`, `const`는 선언 전 변수 사용을 허용하지 않지만, `var`은 선언 전 변수 사용을 허용합니다. 또한 `var`은 선언 전 변수를 **정의되지 않은 타입**(undefined)으로 출력하며 문제 없이 잘 작동하는 모습을 보입니다. [호이스팅](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)(hoisting)이 그 이유입니다.

## 배열과 객체의 스프레드(...) 연산자는 무엇이고, 어떤 상황에서 사용할 수 있는가?

[스프레드 연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)를 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 [리터럴](/javascript/docs/glossary.html#리터럴)의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다. 스프레드 연산자는 연결 또는 복사 등의 용도로 활용도가 높습니다. 예시는 다음과 같습니다.
```javascript
// Array
const arr1 = [1, 2, 3, 4, 5]; 
const arr2 = [...arr1, 6, 7, 8, 9]; 

console.log(arr2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// String
const str1 = 'paper block'; 
const str2 = [...str1]; 
console.log(str2); // [ "p", "a", "p", "e", "r", " ", "b", "l", "o", "c", "k" ]
```

이러한 스프레드 연산자는 다음과 같은 상황에서 주로 사용합니다.

### 배열에서의 Spread Operator

**배열 병합**(Array Concatenation)

기존에는 두 개의 배열을 결합할 때 `concat` 메서드를 이용했지만, ES6에서는 스프레드 연산자를 이용하여 좀 더 깔끔한 배열 병합이 가능합니다.

```javascript
// 기존 방식
const arr1 = [1,2,3]; 
const arr2 = [4,5,6]; 

const arr = arr1.concat(arr2); 
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ] 

// ES6 spread operator
const arr1 = [1,2,3]; 
const arr2 = [4,5,6]; 

const arr = [...arr1, ...arr2]; 
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ] 
```

또한 스프레드 연산자를 이용하면 다양한 형태의 배열 병합을 비교적 간단하게 수행할 수 있습니다.

```javascript
const arr1 = [1,2,3]; 
const arr2 = [4,5,6]; 
arr1.push(...arr2) 

console.log(arr1); // [1,2,3,4,5,6]

const arr1 = [1,2];
const arr2 = [0, ...arr1, 3, 4];

console.log(arr2); // [0, 1, 2, 3, 4]
```

**배열 복사**(Copying Arrays)

JavaScript에서 배열을 새로운 변수에 할당하는 경우, 새로운 배열은 기존 배열을 참조합니다. 따라서 새로운 배열을 변경하는 경우 원본 배열 역시 변경됩니다.

```javascript
// 단순 변수 할당
const arr1 = ['철수','영희']; 
const arr2 = arr1; 

arr2.push('바둑이'); 
console.log(arr2); // [ "철수", "영희", "바둑이" ]

// 원본 배열 변경
console.log(arr1); // [ "철수", "영희", "바둑이" ]
```

배열 참조가 아닌 배열 복사를 위해서 기존에는 slice 또는 ES5의 map을 이용하여 배열을 복사했습니다. 그러나 ES6의 스프레드 연산자를 사용하면, 다음과 같이 새로운 복사된 배열을 생성할 수 있습니다.

```javascript
// ES6 spread operator
const arr1 = ['철수','영희']; 
const arr2 = [...arr1]; 

arr2.push('바둑이'); 

console.log(arr2); // [ "철수", "영희", "바둑이" ]
// 원본 배열 변경 X
console.log(arr1); // [ "철수", "영희" ]
```

### 함수에서의 Spread Operator

**Rest Parameter**

함수를 호출할 때 함수의 매개변수(parameter)를 스프레드 연산자로 작성한 형태를 **Rest parameter**라고 부릅니다. Rest 파라미터를 사용하면 함수의 파라미터로 오는 값들을 모아서 '배열'에 집어넣습니다. 이를 통해서 깔끔한 함수 표현을 적용할 수 있습니다.

```javascript
function add(...rest) {
  let sum = 0;
  for (let item of rest) {
    sum += item;
  }
  return sum;
}

console.log( add(1) ); // 1
console.log( add(1, 2) ); // 3
console.log( add(1, 2, 3) ); // 6
```

위의 결과에서 보이듯이, Rest parameter를 이용하면 인자의 개수에 상관없이 모든 인자를 더하는 함수를 쉽게 구현할 수 있습니다.

**함수 호출 인자로 사용**

a의 경우와 반대로, 함수 정의 쪽이 아니라 함수를 Call할 때 스프레드 연산자를 사용할 수 있습니다. 기존에는 배열로 되어있는 내용을 함수의 인자로 넣기 위해서 직접 입력하거나, `Apply`를 이용했지만 스프레드 연산자를 이용하면 배열 형태에서 바로 함수 인자로 넣어줄 수 있습니다. `Math` 함수를 예로 들어봅시다.

```javascript
const numbers = [9, 4, 7, 1]; 
Math.min(...numbers); // 1
```

### 객체에서의 Spread Operator

**객체 복사 또는 업데이트**

[객체](/javascript/docs/glossary.html#객체)에서 스프레드 연산자를 이용하여 객체의 복사 또는 프로퍼티를 업데이트 할 수 있습니다. 간단한 State Management 구현을 위해서 다음과 같은 방식으로 응용하여 사용하기도 합니다. 

```javascript
const currentState = { name: '철수', species: 'human'};
currentState = { ...currentState, age: 10}; 

console.log(currentState)// {name: "철수", species: "human", age: 10}

currentState = { ...currentState, name: '영희', age: 11}; 
console.log(currentState); // {name: "영희", species: "human", age: 11}
```

### Destructuring

스프레드 연산자는 배열이나 객체에서의 Destructuring에 사용될 수 있습니다.

```javascript
const a, b, rest;
[a, b] = [10, 20];

console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); // [30,40,50]

{a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

## 배열과 객체의 구조 분해 할당은 무엇이고, 어떤 상황에서 사용할 수 있는가?

**배열**과 **객체**는 자바스크립트에서 가장 많이 쓰이는 자료 구조입니다. 키를 가진 데이터 여러 개를 하나의 엔티티에 저장할 땐 **객체**를, 컬렉션에 데이터를 순서대로 저장할 땐 **배열**을 사용합니다.

개발을 하다 보면 함수에 객체나 배열을 전달해야 하는 경우가 발생합니다. 가끔은 객체나 배열에 저장된 데이터 전체가 아닌 일부만 필요한 경우도 발생합니다. 이 때 객체나 배열을 변수로 '분해'할 수 있게 해주는 특별한 문법인 [구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)(destructuring assignment)을 사용할 수 있습니다. 이 외에도 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등에서 구조 분해(destructuring)는 그 진가를 발휘합니다.

배열이 변수로 분해되는 예시는 다음과 같습니다.

```javascript
// 이름과 성을 요소로 가진 배열
let arr = ["Bora", "Lee"]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;

alert(firstName); // Bora
alert(surname);  // Lee
```

구조 분해 할당으로 객체도 분해할 수 있습니다. 할당 연산자 우측엔 분해하고자 하는 객체를, 좌측엔 상응하는 객체 프로퍼티의 '패턴'을 넣습니다. 분해하려는 객체 프로퍼티의 키 목록을 패턴으로 사용하는 예시를 살펴봅시다.
객체가 변수로 분해되는 예시는 다음과 같습니다.

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

## 콜백 지옥이란 무엇이고, ES6에서 어떻게 해결되었는가?

[콜백 함수](/javascript/docs/glossary.html#콜백-함수)란, 다른 함수가 실행을 끝낸 뒤 실행되는 함수를 의미합니다. 이러한 콜백 함수를 과도하게 사용한다면, 함수의 매개 변수로 넘겨지는 콜백 함수가 반복되어 들여쓰기 수준이 감당하기 힘들 정도로 길어지는 **콜백 지옥**(callback hell)이 나타나게 됩니다. 다음과 같은 형태로 나타납니다.
```javascript
step1(function (value1) {
    step2(function (value2) {
        step3(function (value3) {
            step4(function (value4) {
                step5(function (value5) {
                    step6(function (value6) {
                        // Do something with value6
                    });
                });
            });
        });
    });
});
```

이러한 콜백 지옥은 ES6에서 [Promise](/javascript/docs/glossary.html#promise)를 도입함으로 해결되었습니다. `Promise`는 본래 콜백 문제를 해결하기 위해 제안된 패턴 중 하나로 여러 라이브러리를 통해 지원되어 오다가, ECMAScript2015(ES6) 표준으로 지정되었습니다.

```javascript
somethingAsync(value1)
    .then((result) => {
        // 성공시 수행할 작업
    })
    .catch((error) => {
        // 실패시 수행할 작업
    });
```

`then`이나 `catch` 내에서는 어떤 값을 리턴하거나, 다른 `Promise`를 리턴할 수도 있습니다. 또한 `then`과 `catch`는 계속 붙여서 쓸 수 있습니다.

```javascript
somethingAsync(value1)
    .then((result) => {
        return 42;
    })
    .then((result) => {
        return somethingAsync2(); //somethingAsnyc2에서 return된 값이 최종적으로 리턴된다.
    })
    .catch((error) => {
        return new Promise((resolve, reject) => {
            // 기존 방식의 비동기 작업을 수행하기 위해서는 new Promise를 이용해서 새 Promise 객체를 return하면 된다.
            // 성공할 경우 resolve에 원하는 값을 넣어 실행시키면 된다. 실패는 reject로 한다.
            resolve('성공');
            // reject('실패');
        });
    })
    .then((result) => {
        // 위의 then이나 catch가 성공했을 경우 이쪽이 실행된다.
    }, (error) => {
        // catch를 사용하는 대신에 then의 두번째 인자를 사용할 수도 있다.
    });
```

`Promise`가 return되는 경우, 비동기 작업이 끝나 resolve나 reject가 호출될 때까지는 정지해 있다가, resolve나 reject가 실행되면 then이나 catch를 호출합니다.

이처럼 [비동기](/javascript/docs/glossary.html#비동기-프로그래밍) 작업을 계속 매달아서 쓸 수 있으므로(promise chain), 콜백이 안쪽으로 깊어지는 문제가 해결됩니다. 또한 `then` 내에서 throw하면 자동으로 가장 가까운 `catch`로 오류가 전달되기 때문에 에러처리가 직관적이고 실수할 가능성이 낮은 것도 장점입니다.