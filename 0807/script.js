const statusPara = document.getElementById('status')
const resizeFn = (e) => {
    const widthSize = e.target.innerWidth;
    const heightSize = e.target.innerHeight;
    console.log("window size changed")
    statusPara.innerText = ((widthSize <= 1300 && heightSize <= 700) || (widthSize < heightSize))
        ? "*모바일 화면입니다*"
        : "*PC 화면입니다*"
}

window.addEventListener('load', resizeFn)
window.addEventListener('resize', resizeFn)