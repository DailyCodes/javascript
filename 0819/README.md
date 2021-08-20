# 빠른 코드 작성을 위한 JavaScript 팁 2

##  문자열 뒤집기

1. 문자열을 `split()` 메서드를 이용해 길이가 1인 문자열들의 배열로 만들기
2. `reverse()` 메서드를 이용해 배열 뒤집기
3. `join()` 메서드로 뒤집어진 배열을 문자열로 바꾸기

```javascript
const str = "javascript"
const reversed = str.split("").reverse().join("");
```

##  문자열을 정해진 횟수만큼 반복 출력하기

`String.prototype.repeat()` 메서드를 사용할 수 있습니다. `repeat()` 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

```javascript
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
```

## 문자열의 배열을 하나의 문자열로 합치기

`Array.prototype.join()` 메서드를 활용할 수 있습니다. `join()` 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.


```javascript
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

## 객체에서 key만 꺼내서 순회하기

`Object.keys()` 메서드는 주어진 객체의 속성 이름들을 열거할 수 있는 배열로 반환합니다. 

```javascript
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```

## 두 변수의 값을 교환하기 (swap) ES6 방식으로

**구조 분해 할당** 구문을 사용할 수 있습니다. 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

```javascript
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

## 아나그램 찾기

1. `split()` 메서드를 이용해 두 문자열을 배열로 바꾸기
2. `sort()` 메서드를 이용해 두 배열을 정렬하기
3. `join()` 메서드를 이용해 배열을 문자열로 바꾸기
4. `===` 연산자로 두 문자열이 같은지 확인하기

```javascript
function checkStringsAnagram(a, b) {
    const len1 = a.length;
    const len2 = b.length;
    if (len1 !== len2) {
        console.log('Invalid Input');
        return
    }
    const str1 = a
        .split('')
        .sort()
        .join('');
    const str2 = b
        .split('')
        .sort()
        .join('');
    if (str1 === str2) {
        console.log("True");
    } else {
        console.log("False");
    }
}
checkStringsAnagram("indian", "ndiani");
```