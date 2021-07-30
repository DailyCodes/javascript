# 얕은 복사, 깊은 복사

## 얕은 복사와 깊은 복사란 각각 무엇인가?

‘얕은 복사’는 객체를 복사할 때 원래값과 복사된 값이 같은 참조를 가리키고 있는 것을 말합니다. 

우리가 인지해야 하는 사실 중 하나는 객체가 담겨있는 변수를 다른 변수에 할당하면 call by reference (데이터 복사가 아닌 참조)가 일어나게 되며, 한 변수의 데이터를 변경하면 다른 변수의 데이터도 함께 변경이 된다는 것입니다.

즉, 데이터가 추가로 생성된 것이 아닌 해당 데이터의 메모리 주소를 전달하게 돼서 결론적으로한 데이터를 공유하는 것입니다. 

객체안에 객체가 있을 경우 한 개의 객체라도 원본 객체를 참조하고 있다면 이를 앝은 복사라고 합니다.

‘깊은 복사’는 한 데이터를 공유하는 것이 아니라, 똑같은 구조의 객체를 하나 더 생성하여 따로사용할 때 사용됩니다. 이는 깊이 복사된 객체가 객체 안에 객체가 있을 경우에도 원본과의 참조가 완전히 끊어진 객체를 말합니다. 

## 배열과 객체에서 얕은 복사를 하는 방법은 무엇인가?

1. 스프레드 연산자(Spread Operation)

```javascript
const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const copiedObj = {...obj}

copiedObj.b.c = 3

obj === copiedObj // false
obj.b.c === copiedObj.b.c // true
```

2. Object.assign()

```javascript
const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const copiedObj = Object.assign({}, obj);

copiedObj.b.c = 3

obj === copiedObj // false
obj.b.c === copiedObj.b.c // true
```

## 배열과 객체에서 깊은 복사를 하는 방법은 무엇인가?

1. 재귀함수

```javascript
const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

function copyObj(obj) {
    const result = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            result[key] = copyObj(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}

const copiedObj = copyObj(obj);

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c // false
```

2. JSON.stringify()

JSON.stringify()는 객체를 json 문자열로 변환하며 이 과정에서 원본 객체와의 참조가 모두 끊어지게 됩니다. 객체를 json 문자열로 변환 후 JSON.parse()를 이용해 다시 자바스크립트 객체로 만들어주면 깊은 복사가 됩니다. 

하지만 이 방법은 사용하기에는 간편하지만 다른 방법에 비해 매우 느려 비효율적입니다.

```javascript
const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const copiedObj = JSON.parse(JSON.stringify(obj));

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c // false
```

3. lodash 라이브러리

```javascript
const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const copiedObj = _.cloneDeep(obj);

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c // false
```

## Reference

1. th0566, [Javascript] 얕은 복사, 깊은 복사(velog.io, 2020), https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC

2. Hello이뇽, Javascript 깊은 복사의 함정... 모르고 사용하다 뒤통수 맞았다...(tistory, 2020), https://helloinyong.tistory.com/267
