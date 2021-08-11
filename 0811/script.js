/*
여기에 JavaScript 코드를 작성합니다.
*/
// const body = document.querySelector('body');
const div1 = document.createElement('div');
const h1 = document.createElement('h1');
const h1Text = document.createTextNode('이것은 자바스크립트로 만든...');
const h2 = document.createElement('h2');
const h2Text = document.createTextNode('DOM!!!');
h1.appendChild(h1Text);
h2.appendChild(h2Text);
div1.appendChild(h1);
h1.after(h2);

const div2 = document.createElement('div')
const ul = document.createElement('ol')
div2.appendChild(ul)

for (let i = 0; i <= 7; i++) {
    ul
        .appendChild(document.createElement('li'))
        .appendChild(document.createTextNode(i + '번째 항목'));
}

document
    .body
    .appendChild(div1);
div1.after(div2)