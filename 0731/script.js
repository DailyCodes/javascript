// 위치콜백
function handleLocation(position) {
    const outDiv = document.getElementById("result");
    const {latitude, longitude} = position.coords
    // 좌표
    outDiv.innerText = `latitude: ${latitude}\nlongitude: ${longitude}`;
    // 위치정보
    const latlng = new google
        .maps
        .LatLng(latitude, longitude);
    // 지도 옵션
    const mapOption = {
        zoom: 13,
        center: latlng,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // 지도생성
    const map = new google
        .maps
        .Map(document.getElementById("mapCanvas"), mapOption);
    // 위치표시
    new google
        .maps
        .Marker({position: latlng, map: map, title: "here!!"});
}
// 에러콜백
function handleError(error) {
    const outDiv = document.getElementById("result");
    if (error.code === 1) {
        outDiv.innerText = "사용자가 위치정보 공유 거부";
    } else {
        outDiv.innerText = `에러발생: ${error.code}`;
    }
}
// Promise 함수
const getPosition = () => {
    return new Promise(
        (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject)
    )
}
// 위치확인
function locationTest() {
    getPosition()
        .then(handleLocation)
        .catch(handleError)
}

// window의 'load' 이벤트 사용
window
    .addEventListener('load', locationTest)