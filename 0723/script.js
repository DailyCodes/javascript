// 바뀌지 않을 경우 const로 선언, 오타 수정 (l -> I)
const div = document.getElementById("my-div");
// 이벤트는 button 엘리먼트로 받는 게 좋음
const btn = document.querySelector("button");
// 화살표 함수 및 삼항 연산자로 코드 단순화
btn.addEventListener('click', () => {
    div.style.display === "none" ? div.style.display = "block" : div.style.display = "none"
});