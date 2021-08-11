/*
여기에 JavaScript 코드를 작성합니다.
*/
// let body = document.querySelector('body');
let div1 = document.createElement('div');
let h1 = document.createElement('h1');
let h1_text = document.createTextNode('이것은 자바스크립트로 만든...');
let h2 = document.createElement('h2');
let h2_text = document.createTextNode('DOM!!!');
h2.appendChild(h2_text);

h1.appendChild(h1_text);
div1.appendChild(h1);
h1.after(h2)

let div2 = document.createElement('div')
let ul = document.createElement('ol')
div2.appendChild(ul)

for (var i = 0; i <= 7; i++) {
    ul.appendChild(document.createElement('li')).appendChild(document.createTextNode(i + '번째 항목'));
}

document.body.appendChild(div1);
div1.after(div2)

