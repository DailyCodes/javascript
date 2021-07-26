/*
여기에 JavaScript 코드를 작성합니다.
*/
const valInput = document.getElementById("val")
const stdInput = document.getElementById("std")
const filterBtn = document.getElementById("filter")
const mapBtn = document.getElementById("map")

// 함수의 범용성을 위해 순수 함수로 작성 (입력: 문자열, 출력: 문자열)
const filterFn = (input, n) => {
    const arr = input.split(",") // 쉼표로 구분한 배열
    const result = arr
        .map((value) => value.trim()) // 공백 제거
        .filter((value) => !isNaN(value)) // 숫자가 아닌 값 제거
        .filter((value) => Number(value) % n === 0) // 나머지가 0인 경우만 필터링 (원본은 그대로)
    return result.length === 0
        ? "결과가 없습니다."
        : result.join(",")
}

const mapFn = (input, n) => {
    const arr = input.split(",") // 쉼표로 구분한 배열
    const result = arr
        .map((value) => value.trim()) // 공백 제거
        .filter((value) => !isNaN(value)) // 숫자가 아닌 값 제거
        .map((value) => Number(value) ** n) // 모든 원소에 대해 n제곱 수행 (원본은 그대로)
    return result.length === 0
        ? "결과가 없습니다."
        : result.join(",")
}

// 각 이벤트 리스너에서 값이 없는 경우 걸러냄
filterBtn.addEventListener(
    'click',
    () => (!valInput.value || !stdInput.value)
        ? alert("값을 입력해 주세요.")
        : alert(filterFn(valInput.value, Number(stdInput.value)))
)

mapBtn.addEventListener(
    'click',
    () => (!valInput.value || !stdInput.value)
        ? alert("값을 입력해 주세요.")
        : alert(mapFn(valInput.value, Number(stdInput.value)))
)
