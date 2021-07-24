# 객체란 무엇인가?

  자바스크립트에 있는 여덟 자료형 중, 오직 하나의 데이터만 담을 수 있는 원시형(primitive type)과 달리 다양한 데이터를 담을 수 있는 유일한 자료형. 중괄호로 표현되는 객체의 범위 내에는 "**키**(=이름, 식별자) **: 값**" 으로 구성된 프로퍼티가 존재한다.

참고 사항
**원시형** = 문자열, 숫자 등 하나의 데이터(data)
**객체** = 키로 구분된 데이터 집합 등 복잡한 개체(entity)

[https://youtu.be/qnOX3M7VpQ8](https://youtu.be/qnOX3M7VpQ8)

## 객체는 어떻게 생성할 수 있는가?

참고 사항 **Google JavaScript Style Guide**

    -1. 모든 지역 변수는 const 혹은 let을 사용하여 선언하라
    -2. 변수의 값을 재할당하는 경우가 아니라면 디폴트 선언을 const로 하라
    -3. var keyword는 사용하지 말아라 

> 참고 : [https://google.github.io/styleguide/jsguide.html#features-use-const-and-let](https://google.github.io/styleguide/jsguide.html#features-use-const-and-let)

1. 객체 리터럴 문법 `const obj = {key1:value1, key2:value2, ...}` 이용

    직접 객체 안에 포함될 내용을 선언하는 방식. 

    ```jsx
    const person = {

    		name : '김성현',
    		age : 24,
    		introduce : function(){
    				return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`; 
    		}
    };

    console.log(person);
    ```

    [https://youtu.be/VLhA3haEfIk](https://youtu.be/VLhA3haEfIk)

2. 객체 생성자 (Constructor) 문법 방식

    2.1 new Object()

    ```jsx
    const person = new Object(); 

    person.name = '김성현'; 
    person['age'] = 24; 
    person.hello = function(){
    	 return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`; 
    }; 

    console.log(person);
    ```

    2.2 내장 객체도 생성 가능

    ```jsx
    const myStr = new String('hello world');
    const myArray = new Array([1,2,3]);
    ```

3. 프로토타입 `Object.create()` 방식

    프로토타입 상속을 통해 객체를 만드는 방식.

    ```jsx
    const parent = {lastName : 'kim'};
    const child = Object.create(parent);

    console.log(child.lastName); // kim
    ```

## 함수로 객체를 정의하고, new 생성자를 이용해 객체의 인스턴스를 생성하는 방법은 무엇인가?

(1) 함수만 정의한 후 내용을 추가하는 방식

```jsx
function Person(){}                   // 함수로 객체를 정의

const person1 = new Person();         //new 생성자를 이용해 객체의 인스턴스 생성
person1.name = '김성현';              //인스턴스 생성 이후 프로퍼티 추가
person1.age = '24';
person1.introduce = function(){
		return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`; 
}
```

이와 같은 경우 여러 객체(person1, person2....)를 생성해야할 경우 불편하다. 따라서 코드의 재사용성을 높이기 위해 첫 함수 선언에 구조를 미리 선언해 보자.

(2) 사용자 정의 생성자

```jsx
const person = function(name,age){     // 함수로 객체의 구조를 미리 선언
		this.name = name;
		this.age = age;
		this.hello = function(){
			return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`; 
		}
}

var person1 = new person('김성현',24); // new 생성자로 함수의 입력값을 받아 인스턴스 생성
```

[https://youtu.be/VnqC_EmnU9g](https://youtu.be/VnqC_EmnU9g)

> 참고 : [https://curryyou.tistory.com/189](https://curryyou.tistory.com/189)

> 참고 : [www.opentutorials.org/course/743/6570](http://www.opentutorials.org/course/743/6570)

참고 사항 **var, const, let의 차이 5가지**
    -1. 중복선언 가능
    -2. 재할당 가능
    -3. 변수 스코프 유효범위
    -4. 변수 호이스팅 방식
    -5. 전역객체 프로퍼티 여부

> 참고 : [https://curryyou.tistory.com/192?category=898979](https://curryyou.tistory.com/192?category=898979)
[링크 텍스트](링크 주소)
