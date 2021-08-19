const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const name = prompt('응원할 도쿄 올림픽 여자배구 주전 선수를 입력해주세요!');
        try {
            if ([
                "김연경",
                "김수지",
                "양효진",
                "김희진",
                "박정아",
                "오지영"
            ].indexOf(name) === -1) {
                throw new RangeError('주전멤버가 아닙니다! 김연경,김수지,김희진,박정아,양효진,오지영 중에 입력해주세요')
            }
            alert(name + '선수를 응원하셨습니다!')
        } catch (e) {
            alert("Range Error: " + e.message)
        }
    })
})