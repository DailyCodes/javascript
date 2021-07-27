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
    const powerOf2 = makePowerOfFunc(2);
    const powerOf3 = makePowerOfFunc(3);
    const powerOf10 = makePowerOfFunc(10);
    const n = numInput.value
    const rst2 = powerOf2(n)
    const rst3 = powerOf3(n)
    const rst10 = powerOf10(n)
    const text = '2, 3, 10의 ' + n + '승은 ' + rst2 + ', ' + rst3 + ', ' + rst10 + '입니다!'
    alert(text)
})




