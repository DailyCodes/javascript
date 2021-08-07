window.addEventListener('resize', function(){

    let widthSize = window.innerWidth;
    let heightSize = window.innerHeight;

    if (widthSize <= 1300 || heightSize <= 700) {
    console.log("*모바일 화면입니다*");
    }
    else {
    console.log("*PC 화면입니다*"); 
    }
})