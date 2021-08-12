// 비교 연산자 예제
console.log(3 == "3");
console.log(3 === "3");

// 단항 증가/감소 연산자 예제
for (let i = 0; i < 3;)
    console.log(`the value of i: ${i++}` );

for (let j = 0; j < 3;)
    console.log(`the value of j: ${++j}`);

// 단락 평가 예제
function f1() {
    console.log("콘솔에 표시되지 않습니다.")
}

function f2() {
    console.log("콘솔에 표시됩니다.")
}

let a = 0, b = 1;
a && f1();
b || f1();
b && f2();
a || f2();


