/*
여기에 JavaScript 코드를 작성합니다.
*/
const obj = {
    'zero': 0,
    'one': 1,
    'true': true,
    'false': false,
    'blank': '',
    'space': ' ',
    'null': null,
    'undefined': undefined
}
const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonId = obj[button.id]
        buttonId === null
            ? alert(`${button.id}는 null입니다.`)
            : alert(`${button.id}는 null이 아닙니다.`)
        buttonId === undefined
            ? alert(`${button.id}는 undefined입니다.`)
            : alert(`${button.id}는 undefined가 아닙니다.`)
        buttonId || alert(`${button.id}는 거짓 같은 값입니다.`)
        buttonId ?? alert(`${button.id}는 null 또는 undefined입니다.`)
    })
})
