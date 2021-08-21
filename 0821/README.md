# 코드의 재구성
 
## ES5까지의 코드를 ES6 이상의 최신 문법으로 리팩토링하기 

ECMAScript5는 2009년 12월에 나왔습니다. 
지금은 2021년이지고 ES5보다 더 상위인 ES들이 나온 상태입니다. 
하지만 아직도 많은 Javascript 문법은 ES5로 코딩되고 있습니다. 
왜냐하면 ES6 이상으로 넘어가기 위한 cross browsing, transpiler와 같은 몇 가지 걸림돌이 있기 때문입니다. 
그럼에도 불구하고 ES6를 써야하는 이유는 여러가지가 있겠지만 깔끔한 코드 때문입니다. 

1. var를 const, let으로 고치기 

* 비구조화 할당 (Destructing Assignment)
ES5
```javascript
var name = req.body.name
var age = req.body.age
var email = req.body.email
```
ES6
```javascript
const = req.body
```

* 객체 초기자 (Object Initialize = Property Shorthand)
ES5
```javascript
var name = 'john'
var age = '21'
var email = 'study.code.john@gamil.com'

var datas = {
    name: name, 
    age: age, 
    email: email
}
```
ES6
```javascript
let name = 'john'
let age = 27
let email = 'study.code.john@gamil.com'

let datas =
let datas2 = {username: name, age, email}
```

* Template Literals
ES5
```javascript
var username = req.body.username
if (!username) {
    throw "'username' must required. Your input: " + username + "."
}
```
ES6
```javascript
let = req.body
if (!username) {
    throw `'username' must required. Your input: $.`
}
```

* 기본 매개변수 (Default Parameters)
ES5
```javascript
var greeting = function(username, date, message) {
    username = typeof username !== 'undefined' ? username: 'anonymous'
    date = typeof date !== 'undefined' ? date: new Date()
    message = typeof message !== 'undefined' ? message: 'hello'

    return message + ' ' + username + 'at' + date
}
```
ES6
```javascript
const greeting = (username = 'anonymous', date = new Date(), message = 'hello') => {
    return '$ $ at $'
}
```

2. 배열의 반복문 대신 고차 함수(map, filter, reduce, forEach) 사용하기 
* 배열을 순회(loop)하기 위한 방법으로 ES5의 myArray.forEach(function (value){...});를 사용합니다. 기존 for ~ in 루프는 확장 속성들도 순회하기 떄문에 성능상 이점이 없습니다. 배열에 만일 myArray.name = 'hyunho'을 넣으면 name도 순회하고 prototype chain도 순회합니다. 또는 가끔 무작위 순서로 순회하기도 합니다. 이를 해결하기 위해 for ~ of가 나왔습니다. 

```javascript
for (var value of myArray) {
    console.log(value); //값입니다. for ~ in처럼 속성의 key가 아닙니다.
}
```

3. 스프레드 연산자, 구조 분해 할당 사용하기 
```javascript
let myObj = {name: 'hyunho'};

//myObj.name을 받아 myName이라는 변수에 할당합니다.
let {name: myName} = myObj;

//좀 더 복잡한 객체의 해체도 가능합니다. 

let complicatedObj = {
    arrProps: [
        'hyunho',
        {address: 'Gyeonggi'}
    ]
}
let {arrProps: [first, {second = 'uiwang'}]} = complicatedObj;

//이터레이션 프로토콜과 함꼐 사용 가능합니다. 

for ( let [key, value] of map) {
    console.log(key, value);
}

//함수에서 객체 리턴값을 해체할 수 있습니다. 

function myObjFunc() {
    return {
        name: 'hyunho',
        address: 'gyeonggi'
    }
}
let {name, address} = myObjFunc();

//continuation passing style 사용도 가능합니다. k라는 callback에 값 1, 2를 주면 foo = 1, bar = 2 각 해체되어 할당됩니다. 

function returnMultipleValue(k) {
    k(1, 2);
}
returnMultipleValue((foo, bar) => ...);

//또는 ES2015의 import 구문에서 사용합니다.

import {Component} from 'angular2/core';
```

4. 화살표 함수 사용하기 
* event 또는 XHR 콜백 function을 등록할 떄 간혹 내부에 this를 사용하면 Global scope를 참조하게 됩니다. 이떄 var that = this; 한 후 that을 넘겨 사용하기도 하는데 ES6 이상에서는 그럴 필요가 없습니다. 자신 Execution Context를 만들지 않고 (function보다 가볍습니다) 화살표 함수를 감싸는 외부 스코프의 this 값을 바로 쓸 수 있는 방법이 바오 이 '=>' 화살표 함수입니다. 

* 이전 코드
```javascript
$('.button').click(function (event) {
    ...
});
```
* 변경 코드
```javascript
$('.button').click(event => {
    ...
});
```

5. 콜백 지옥 탈출하기 (Promise, async/await) 
* 모든 비동기 함수는 Promise를 반환하게 만드는 것이 핵심입니다. 아래 예시가 있습니다. 

* Promise
```javascript
const getName = (user_id) => {
    return new Promise((resolve, reject) => {
        if (!user_id) {
            return reject('user_id must be required.')
        }
        Model.select('table_users', user_id)
        .then(result => {
            resolve(result.username)
        })
        .catch(err => {
            reject(err)
        })
    });
}
```
* async/await
```javascript
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
}

add1(10).then(v => {
    console.log(v);
});
```


## 함수의 호이스팅으로 발생 가능한 오류 막기 
1. 호이스팅이란 무엇인가? 
호이스팅이란 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것을 말합니다. 

2. 함수 선언과 익명 함수의 변수 할당의 호이스팅 차이
함수선언문은 호이스팅에 영향을 받지만, 함수표현식은 호이스팅에 영향을 받지 않습니다. 

## References

1. 이상학의 개발 블로그, [ECMAScript6 / ES6] 아름다운 JavaScript를 위한 ES6, 2017
https://sanghaklee.tistory.com/54

2. 개발허브, ECMAScript 6를 위한 Babel 기본 사용법, 2017
https://woonghub.tistory.com/category/Javascript/ES6

3. 권희정, [JavaScript] 호이스팅(Hoisting)이란, 2019
https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html

4. 권희정, [JavaScript] 함수선언문과 함수표현식의 차이, 2019
https://gmlwjd9405.github.io/2019/04/20/function-declaration-vs-function-expression.html
