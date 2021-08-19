# null, undefined

## `null`과 `undefined`는 각각 무엇이며, 공통점과 차이점은 무엇인가?

`null`과 `undefined`는 [JavaScript](/javascript/docs/glossary.html#javascript)의 [자료형](/javascript/docs/glossary.html#자료형)에 속합니다.

| 구분 | null | undefined | NaN |
| --- | --- | --- | --- | 
| 설명 | 어떤 값이 의도적으로 비어 있음 | 선언한 후 값을 할당하지 않음<br>값이 주어지지 않음<br>[객체](/javascript/docs/glossary.html#객체)의 key가 아님 등 | 특정 함수(연산)의 수행 결과가 숫자가 아님 |
| typeof | 'object' | 'undefined' | 'number' |

## truthy와 falsy의 개념은 각각 무엇이며, `null`, `undefined`, `[]`, `{}`, `0`, `''`은 각각 어디에 속하는가?

[JavaScript](/javascript/docs/glossary.html#javascript)에서는 문맥에 따라 [자료형](/javascript/docs/glossary.html#자료형) 변환이 이루어지므로, 모든 값은 조건문 등에서 `true` 혹은 `false`로 평가될 수 있습니다. 아래 표에 따라 거짓 같은 값이 아니면 모두 참 같은 값입니다. 예를 들어, 빈 배열 `[]`, 빈 객체 `{}`도 참으로 분류됩니다.

| 참 같은 값 | 거짓 같은 값 |
| --- | --- |
| 나머지 모든 값 | `0`, `-0`, `''`, `null`, `undefined`, `NaN` | 

## 접근하고자 하는 값이 `null`이나 `undefined`에 해당하는지 확인할 수 있는 방법은 무엇인가?

* 일치 연산자(`===`)을 이용해 값이 `null`이나 `undefined`에 해당하는지 확인할 수 있습니다.
* null 병합(`??`) 연산자를 통해 값이 `null`이나 `undefined`에 해당하는 경우의 기본값을 지정하거나 특정 함수를 호출할 수 있습니다.

## 3번의 관점에서 `??`의 특징은 `||`과 무엇이 다른가?

`||`은 [단락 평가](/javascript/docs/glossary.html#단락-평가)의 한 예시로, 왼쪽에 있는 값이 [거짓 같은 값](/javascript/docs/glossary.html#참-같은-값)일 때에 오른쪽 값을 대입하거나 오른쪽 함수를 실행합니다.

```javascript
const blank = () => ''
blank() || console.log(`falsy한 값입니다.`)
```

`??`은 왼쪽에 있는 값이 `null`이나 `undefined`일 때에만 오른쪽 값을 대입하거나 오른쪽 함수를 실행합니다.

```javascript
const blank = () => ''
const nothing = () => null
blank() ?? console.log(`null이나 undefined가 아니므로 실행되지 않습니다.`)
nothing() ?? console.log(`null이나 undefined이므로 실행됩니다.`)
```