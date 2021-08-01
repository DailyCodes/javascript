        // 위치확인 
        function locationTest() {
            navigator.geolocation.getCurrentPosition(handleLocation, handleError); 
        }
        // 위치콜백 
        function handleLocation(position)  {
            var outDiv = document.getElementById("result"); 
            // 좌표 
            var posStr = "latitude : " + position.coords.latitude + "<br/>";
            posStr += "longitude : " + position.coords.longitude; 
            outDiv.innerHTML = posStr; 
            // 위치정보 
            var latlng = new google.maps.LatLng(position.coords.latitude, 
                    position.coords.longitude);     
            // 지도 옵션 
            var mapOption = {
                zoom: 13,
                center: latlng,
                mapTypeControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            // 지도생성
            var map = new google.maps.Map(
                    document.getElementById("mapCanvas"), mapOption);
            // 위치표시 
            new google.maps.Marker({position : latlng, map : map, title : "here!!"});
        } 
        // 에러콜백 
        function handleError(err) {
            var outDiv = document.getElementById("result");
            if(err.code == 1) {
                outDiv.innerHTML = "사용자가 위치정보 공유 거부";
            }
            else {
                outDiv.innerHTML = "에러발생 : " + err.code;
            }
        } 