function List(description) {
    Array.call(this);
    // List 함수의 description 속성 정의
    this.description = description
}

// Array의 프로토타입을 물려받음
List.prototype = Object.create(Array.prototype);

// List 객체의 생성자 함수는 List 함수 자체가 됨
List.prototype.constructor = List;

// List 함수의 sum 메서드 정의
List.prototype.sum = function sum() {
    this.total = 0;
    for (var i = 0; this.length > i; i++) {
        this.total += this[i]
    }
    return this.total
    // 고차 함수를 이용한 방법
    /*
    return this.reduce((a, b) => a + b, 0)
    */
}

// List 함수의 getFirstDataType 메서드 정의
List.prototype.getFirstDataType = function getFirstDataType() {
    return typeof this[0]
}

const list1 = new List("리스트 설명입니다.")
list1.push(100)
list1.push(200)
list1.push(300)
list1.push(400)
console.log(list1.description)
console.log(list1.getFirstDataType())
console.log(list1.sum())