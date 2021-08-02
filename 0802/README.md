# 프로토타입이**란 무엇인가?**

프로토타입이란 자신을 원형으로 만들어질 새로운 객체들에게 물려줄 연결에 대한 **속성의 모음집**입니다. 선언된 모든 함수에는 prototype 이라는 은닉 속성 (private)를 가지는데 이 속성을 참조함으로써 특정 객체의 속성을 공유받는 상속 개념을 구현할 수 있습니다. 다시말해 프로토타입은 자바스크립트 내에서 상속을 가능하게 만들어주는 내부 슬릿이라고 말할 수 있습니다.

# 프로토타입 체인이란 무엇인가?

자바스크립트에서 기본 데이터 타입을 제외한 모든 것은 객체이고, 모든 객체는 프로토타입을 가집니다.  따라서 자바스크립트는 객체의 어떤 속성에 접근하려 할때 그 객체 자체 속성 뿐만 아니라 객체의 프로토타입, 그 프로토타입의 프로토타입을 계속해서 탐색하며 이것을 **프로토타입 체인**이라고 부릅니다. 

이러한 탐색은 최종적으로 null을 프로토타입으로 가지는 오브젝트에서 끝나게 됩니다. null은 더 이상의 프로토타입이 없다고 정의되며, 프로토타입 체인의 종점 역할을 합니다.

다음 코드에 구현된 Object.create(참조할 프로토타입 객체) 메서드를 이용한 상속을 통해 프로토타입 체인을 이해해봅시다.

```jsx
var a = {a: 1};
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (상속됨)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined이다. 왜냐하면 d는 Object.prototype을 상속받지 않기 때문이다.
```

위의 예시에서 객체 c 에서 시작된 프로토타입 체인은 c가 참조한 b, b가 참조한 a 까지 거슬러 올라가게 되며, a의 프로토타입은 null 값이므로 종점 역할을 하게 됩니다.

또한 객체 d는 null값을 프로토타입으로 참조하고 있기 때문에 마찬가지로 아무것도 상속받지 않은, 프로토타입 체인의 종점이라고 볼 수 있습니다.

## 자신의 프로토타입에 속성이나 메서드를 추가하는 방법

```jsx
function Parent(){}                                 // 객체 생성

Parent.prototype.last_name = "kim";                 // 프로토타입에 속성이나 메서드 추가

const child = new Parent();
child.prop = "new value"                            // 상속받은 객체에 프로토타입 추가하기
```

위 코드에 따르면 우리는 크게 Parent, Parent.prototype, child, 세 가지 객체를 살펴볼 수 있습니다.

1. 첫 번째 Parent는 line1, function에서 선언한 것이 전부이므로 아무것도 정의되어 있지 않습니다.

> Parent.prop : undefined
[Parent.](http://parent.foo/)last_name = undefined

1. 두 번째 Parent.prototype은 Parent 객체를 다른 객체가 상속받을 때 참조하는 속성값으로 line3에 속성 last_name 가 정의되어 있습니다.

> Parent.prototype.prop : undefined
Parent.prototype.last_name : kim

1. 마지막 child 객체는 line 8에서 Parent 객체를 상속받은 객체로 line 9에서 새로운 속성 prop을 선언하였습니다. 이는 상속받지 않은 고유의 속성과 상속받은 속성 last_name 모두 정의할 수 있습니다.

> child.prop : new value
child.last_name : kim

## **참고 문헌**

> [상속과 프로토타입](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

> [생활코딩 -prototype](https://www.opentutorials.org/course/743/6573)