/*
여기에 JavaScript 코드를 작성합니다.
*/
const numInput = document.getElementById("num_input");
const produceBtn = document.getElementById("btn");

function makePowerOfFunc(under) {
    return function (n) {
        console.log(under ** n)
        return under ** n
    }
}

produceBtn.addEventListener('click', () => {
    let powerOf2 = makePowerOfFunc(2);
    let powerOf3 = makePowerOfFunc(3);
    let powerOf10 = makePowerOfFunc(10);
    let n = numInput.value
    let rst2 = powerOf2(n)
    let rst3 = powerOf3(n)
    let rst10 = powerOf10(n)
    let text = '2, 3, 10의 ' + n + '승은 ' + rst2 + ', ' + rst3 + ', ' + rst10 + '입니다!'
    alert(text)
})




