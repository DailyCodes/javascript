# 옵셔널 체이닝

## 단락 평가란 무엇인가? 

조건 연산자 사용 시, 다른 우선 순위가 없다면 왼쪽 조건을 평가하고 필요한 경우에만 오른쪽 조건을 평가하는 것입니다. 가령, OR (`||`) 연산자를 사용할 때 왼쪽 조건이 `true`라면 오른쪽 조건과 상관없이 전체가 `true`가 되므로 오른쪽 조건을 평가하지 않습니다. AND (`&&`) 연산자는 반대로 작동합니다.

[단락 평가](/javascript/docs/glossary.html#단락-평가)를 사용하면, `if`나 삼항 연산자를 사용하지 않고도 간단한 조건문을 구현할 수 있습니다.

```javascript
const val = document.getElementById("name").value;
val && console.log(`당신의 이름은 ${val}입니다.`); // val이 참 같은 값인 경우에만 콘솔 출력
val || console.log(`이름을 입력하지 않았어요.`); // val이 거짓 같은 값인 경우에만 콘솔 출력
```

## 옵셔널 체이닝이란 무엇이고 언제 추가되었는가?

[객체](/javascript/docs/glossary.html#객체)가 중첩된 구조에서 특정 값에 접근하려고 할 때, 해당 값이 없다면 일반적으로 `undefined`를 반환하지만, 해당 값을 포함해야 할 객체 자체가 존재하지 않으면 오류가 발생합니다. 특히 [API](/javascript/docs/glossary.html#api) 호출로 가져온 [JSON](/javascript/docs/glossary.html#json) 객체의 경우 이런 문제가 종종 발생합니다. ES2020에서 추가된 [옵셔널 체이닝](/javascript/docs/glossary.html#옵셔널-체이닝)을 사용하면 객체 내부로 하나씩 접근하는 과정에서 특정한 속성이 존재하지 않으면 바로 `undefined`를 반환하므로 오류를 막을 수 있습니다.

```javascript
const obj = {
    students: [
        {
            name: "Jeongjoo",
            hobbies: null
        }
    ]
};
obj.students[1]; // undefined
obj.students[1].name; // Uncaught TypeError: Cannot read property 'name' of undefined
obj.students[1]?.name; // undefined
const namae = obj.students[1]?.name || "김철수"; // 해당 값이 거짓 같은 값인 경우 "김철수"를 사용
const nombre = obj.students[1]?.name ?? "홍길동"; // 해당 값이 null 또는 undefined일 경우 "홍길동"을 사용
```