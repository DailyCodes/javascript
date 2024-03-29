# 고차 함수

고차 함수는 다른 함수를 인자로 받는 함수입니다. 배열(Array)의 메서드인 `map`, `filter`, `reduce`, `forEach` 등이 이에 해당됩니다.

## 고차 함수와 콜백 함수란 각각 무엇인가?

* [고차 함수](/javascript/docs/glossary.html#고차-함수)(Higher Order Function)
    
    다른 함수를 인자로 받는 함수입니다. 문자열과 배열의 일부 메서드 및 `setTimeout()`, `setInterval()` 등을 예로 들 수 있습니다.

* [콜백 함수](/javascript/docs/glossary.html#콜백-함수)(Callback Function)
    
    다른 함수에 인자로 전달되는 함수입니다. 고차 함수 및 비동기 프로그래밍에서 주로 쓰입니다.

## 배열의 고차 함수들은 각각 무엇이고 어떻게 활용되는가?

배열의 고차 함수들은 다음 표와 같이 정리할 수 있습니다.

| 메서드 | 설명 | 
| --- | --- | 
| map(callback) | 배열의 각 원소에 `callback` 함수를 적용한 반환값으로 이루어진 새로운 배열을 반환합니다.<br>- `callback` 함수의 첫 원소는 각 원소의 값(`value`)입니다.<br>- 함수의 두번째 원소는 각 원소의 인덱스(`index`)입니다(없어도 됩니다).<br>- 함수의 마지막 원소는 배열 자체(`array`)입니다(없어도 됩니다).<br>- `callback` 함수로 화살표 함수를 사용하거나, 기존에 존재하는 함수를 사용해도 됩니다. | 
| filter(callback) | 배열의 원소들 중 `callback` 함수의 조건을 만족하는 원소만 모은 새로운 배열을 반환합니다.<br>- `callback` 함수에 대한 설명은 `map()`과 동일합니다.<br>- 해당 함수의 반환값은 `true` 또는 `false`가 되어야 합니다. | 
| find(callback) | 배열의 원소들 중 `callback` 함수의 조건을 만족하는 첫 번째 원소의 값을 반환합니다.<br>- `callback` 함수에 대한 설명은 `map()`과 동일합니다.<br>- 해당 함수의 반환값은 `true` 또는 `false`가 되어야 합니다. | 
| forEach(callback) | 배열의 각 원소에 대해 `callback` 함수를 호출합니다.<br>- `callback` 함수에 대한 설명은 `map()`과 동일합니다.<br>- 반환값은 없습니다(`undefined`). | 
| reduce(callback, initialValue) | 배열의 각 원소에 대해 리듀서 역할을 하는 `callback` 함수를 호출합니다.<br>- `callback` 함수의 첫 원소는 누적값(`accumulator`)입니다.<br>- 함수의 두번째 원소는 각 원소의 값(`value`)입니다.<br>- 첫 누적값은 초깃값(`initialValue`)이며, [리듀서 함수](/javascript/docs/glossary.html#리듀서-함수)의 반환값은 자동으로 다음 시행 시 누적값이 됩니다. | 

```javascript
const arr1 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7
]

// map 결과: [1, 4, 9, 16, 25, 36, 49]
const arr2 = arr1.map((value) => value ** 2)

// filter 결과: [2, 4, 6]
const arr3 = arr1.filter((value) => value % 2 === 0)

// reduce 결과: 28
const arr4 = arr1.reduce((a, b) => a + b, 0)
```

## 앞서 언급한 배열의 고차 함수를 활용하는 것과 함수형 프로그래밍 패러다임은 어떤 관계에 있는가?

1. 배열의 고차 함수가 배열의 원본을 변형하는가?

    배열의 고차 함수는 배열의 원본을 변형하지 않습니다. 이는 불변성을 중시하는 [함수형 프로그래밍](/javascript/docs/glossary.html#함수형-프로그래밍) 패러다임과 관계가 있습니다.

2. 배열의 값이 같으면 각 고차 함수를 적용했을 때의 값이 같은가?

    별도의 전역 변수나 `Math.random()` 등을 사용하지 않는 이상, 배열의 값이 같으면 각 고차 함수를 적용했을 때의 값이 같음이 보장됩니다. 이는 함수형 프로그래밍 패러다임에서 강조하는 [순수 함수](/javascript/docs/glossary.html#순수-함수)와 맞닿아 있습니다.
