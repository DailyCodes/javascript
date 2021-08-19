# Error 객체

Error [객체](/javascript/docs/glossary.html#객체)는 [JavaScript](/javascript/docs/glossary.html#javascript)의 런타임 오류가 발생했을 때 던져지는 객체입니다. Error 객체를 사용자 지정 예외의 기반 객체로 사용하는 것도 가능합니다.

## RangeError

RangeError 객체는 어떤 값이 집합에 없거나 허용되는 범위가 아닐 때 오류를 나타냅니다.

어떤 값을 그 값이 포함되는 범위를 허용하지 않는 함수에 인수로 전달하려 할 때  `RangeError`가 발생합니다.

이 문제는 다음과 같은 경우에 발생할 수 있습니다.

* 허용되는 문자열이 아닌 값을 `[String.prototype.normalize()]`에 전달하는 경우
* `[Array]` 생성자를 통해 잘못된 길이의 배열을 만드려고 시도하는 경우
* 숫자 메서드 `[Number.prototype.toExponential()]`, `[Number.prototype.toFixed()]` 혹은 `[Number.prototype.toPrecision()]`에 나쁜 값을 전달하는 경우

```javascript
function check(n)
{
  if( !(n >= -500 && n <= 500) )
  {
    throw new RangeError("The argument must be between -500 and 500.")
  }
}

try
{
  check(2000)
}
catch(error)
{
  if (error instanceof RangeError)
  {
    // Handle the error
  }
}
```

# Reference Error

ReferenceError 객체는 존재하지 않는 변수를 참조했을 때 발생하는 에러를 나타냅니다.

```javascript
try {
  var a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message);                   // "undefinedVariable is not defined"
  console.log(e.name);                      // "ReferenceError"
  console.log(e.fileName);                  // "Scratchpad/1"
  console.log(e.lineNumber);                // 2
  console.log(e.columnNumber);              // 6
  console.log(e.stack);                     // "@Scratchpad/2:2:7\n"
}
```

## SyntaxError

SyntaxError 객체는 문법적으로 유효하지 않은 코드를 해석하려고 시도할 때 발생하는 오류를 의미합니다. Javascript 엔진이 코드를 구문 분석할 때 언어의 구문에 맞지 않는 토큰이나 토큰 순서를 만나면 이 오류를 던집니다.

```javascript
try {
  eval('hoo bar');
} catch (e) {
  console.error(e instanceof SyntaxError);
  console.error(e.message);
  console.error(e.name);
  console.error(e.fileName);
  console.error(e.lineNumber);
  console.error(e.columnNumber);
  console.error(e.stack);
}
```

## TypeError

**`TypeError`** 객체는 일반적으로 값이 기대하던 자료형이 아니라서 연산을 할 수 없을 때 발생하는 오류입니다.

다음과 같은 경우 `TypeError`가 발생할 수 있습니다.

* 함수에 전달된 피연산자 또는 인수가 해당 연산자나 함수가 예상하는 타입과 호환되지 않는 경우
* 변경할 수 없는 값을 수정하려고 할 경우
* 부적절한 방법으로 값을 사용하려고 할 경우

```javascript
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "null has no properties"
  console.log(e.name);                 // "TypeError"
  console.log(e.fileName);             // "Scratchpad/1"
  console.log(e.lineNumber);           // 2
  console.log(e.columnNumber);         // 2
  console.log(e.stack);                // "@Scratchpad/2:2:3\n"
}
```

## URIError

새로운 URIError 객체를 만듭니다.

```javascript
try {
  decodeURIComponent('%')
} catch (e) {
  console.log(e instanceof URIError)  // true
  console.log(e.message)              // "malformed URI sequence"
  console.log(e.name)                 // "URIError"
  console.log(e.fileName)             // "Scratchpad/1"
  console.log(e.lineNumber)           // 2
  console.log(e.columnNumber)         // 2
  console.log(e.stack)                // "@Scratchpad/2:2:3\n"
}
```

## 참고 문헌

> [JavaScript 공식문서-Error](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)

> [JavaScript 에러객체 종류](https://blog.naver.com/ddalki333/222353702261)
