const addBtn = document.getElementById("add");
const calculateBtn = document.getElementById("calculate");
const stdTextBox = document.getElementById("std")
const resultPara = document.getElementById("result")

addBtn.addEventListener('click', () => {
    const input = stdTextBox.value
    // 8자리가 아니거나 숫자가 아닌 값은 받지 않음
    if (input.length !== 8 || isNaN(input)) 
        return
    // 입력값으로부터 년, 월, 일 파싱
    const year = Number(input.slice(0, 4))
    const month = Number(input.slice(4, 6)) - 1
    const day = Number(input.slice(6, 8))
    // 100일 더한 값을 계산 (그냥 day에 100 더하면 됨)
    const stdDate = new Date(year, month, day + 100)
    resultPara.innerText = `기준일로부터 100일 후는 ${stdDate.getFullYear()}년 ${stdDate.getMonth() +
            1}월 ${stdDate.getDate()}일 입니다.`
})

calculateBtn.addEventListener('click', () => {
    // 오늘 날짜 계산 (정확한 계산을 위해 시, 분, 초, 밀리초는 0으로 세팅)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const input = stdTextBox.value
    // 8자리가 아니거나 숫자가 아닌 값은 받지 않음
    if (input.length !== 8 || isNaN(input)) 
        return
    // 입력값으로부터 년, 월, 일 파싱
    const year = Number(input.slice(0, 4))
    const month = Number(input.slice(4, 6)) - 1
    const day = Number(input.slice(6, 8))
    const stdDate = new Date(year, month, day)
    stdDate.setHours(0, 0, 0, 0)
    // 날짜 간 UNIX 시간으로 비교
    const elapsedDays = (today.getTime() - stdDate.getTime()) / (
        24 * 60 * 60 * 1000
    )
    // 양수일 때는 '지났습니다', 음수일 때는 '남았습니다' 표시, 음수도 양수로 표기하도록 - 기호 부착
    resultPara.innerText = elapsedDays > 0
        ? `기준일로부터 ${elapsedDays}일 지났습니다.`
        : `기준일로부터 ${ - elapsedDays}일 남았습니다.`
})