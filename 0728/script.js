const colorDivs = document.querySelectorAll("div")
const rgb2hex = (str) => {
    let rgb = str.replace(/\s/g, '')
    rgb = rgb
        .split("(")[1]
        .split(")")[0];
    rgb = rgb.split(",");

    let hex = rgb.map((x) => { //For each array element
        x = parseInt(x).toString(16); //Convert to a base16 string
        return (x.length === 1)
            ? "0" + x
            : x; //Add zero if we get only one character
    })
    hex = hex.join("");

    return hex;
}

// div 두 개를 한꺼번에 설정
colorDivs.forEach((colorDiv) => {
    colorDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = e.target.id;
        const elem = document.getElementById(targetId)
        const bgColor = ntc
            .name(
                rgb2hex(getComputedStyle(elem).backgroundColor)
            )[1]
            .toLowerCase();
        /*
        console.log(
            rgb2hex(getComputedStyle(elem).backgroundColor)
        );
        */
        
        // 삼항 연산자로 새로운 배경색 지정
        const newColor = (bgColor === 'black')
            ? 'yellow'
            : 'black'

        setTimeout(() => {
            alert(bgColor);
            e.target.style.backgroundColor = newColor;
        }, 0);
    })
})
