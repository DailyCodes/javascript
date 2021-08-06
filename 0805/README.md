# API

> 샘플 코드를 다운로드하여, 로컬 환경에서 `node app.js` 명령어로 실행하시기 바랍니다.

웹 사이트 또는 응용 프로그램용 클라이언트 사이드 [JavaScript](/javascript/docs/glossary.html#javascript)를 작성할 때 **API**(Application Programming Interface)를 사용하지 않으면 많은 것을 만들기 어렵습니다. [API](/javascript/docs/glossary.html#api)는 사이트가 실행되고 있는 브라우저와 운영 체제의 다양한 부분 그리고 웹 사이트 혹은 서비스의 데이터를 다룰 수 있는 인터페이스입니다.

API는 흔히 소프트웨어 프로그램(애플리케이션) 내부에 존재하는 기능 및 규칙의 집합을 의미합니다. 이 정의에 따르면 `console.log()`처럼 JavaScript의 내장 함수들도 일종의 API라고 볼 수 있겠지만, 여기서의 API는 개발자가 앱을 통해 사용자의 웹 브라우저에서 상호작용할 수 있도록 하는 코드 기능들로 의미를 한정해 보겠습니다.

여기서 자세히 설명하지는 않지만, 브라우저 API에 대해 간단히 소개하겠습니다. 브라우저 API는 문서 [객체 모델(DOM)](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model)을 직접 수정하거나 서버에서 데이터를 가져오거나 그래픽 작성 및 수정, 오디오 및 비디오 다루기 등에 사용됩니다.


| **브라우저 API** | **설명** |
| --- | --- |
| [Document](https://developer.mozilla.org/ko/docs/Web/API/Document) | JavaScript가 브라우저가 불러온 웹 페이지(HTML, CSS)에 직접 접근하여 작업할 수 있도록 함 | 
| [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation) | 사용자의 위치 정보 반환 | 
| [Fetch](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API) | 특정 서버로 비동기 방식 API 요청을 보내고 결과값을 가져옴 |
| [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) | 사용자의 웹캠으로부터 오디오나 비디오를 감지하고, 이를 개발자가 원하는 대로 사용할 수 있게끔 함 |
| [Notifications](https://developer.mozilla.org/ko/docs/Web/API/Notifications_API) | 시스템 알림 표시 제어 |
| [Web Animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) | 	이미지 등 웹 페이지 일부를 움직임 |
| [WebRTC](https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API) | 웹 애플리케이션과 사이트가 중간자 없이 양자 간 음성 및 화상 통화, 데이터 교환 시스템 구축 |

## 서드 파티 API란 무엇인가?

![서드 파티 API](https://user-images.githubusercontent.com/52960121/126071003-a6105356-74aa-4531-b292-222f791486ea.png)

서드 파티 API는 별도의 타사 플랫폼(트위터, 페이스북 등)에서 제공하는 API입니다. 예를 들면 Google Maps, Twitter, Facebook, YouTube 등과 같은 많은 대형 웹 사이트와 서비스가 있고 여기에는 개발자 자신의 데이터(예 : 블로그에 트위터 스트림 표시) 또는 서비스(예 : 사이트에 맞춤 Google 지도 표시, Facebook 로그인을 사용하여 사용자 로그인)가 있습니다. 서드 파티 API를 활용하기 위해서는 별도의 서드 파티 API 서버와의 통신을 구축해야 하며, 이 과정에서 일부 제한이 있을 수 있습니다.

* [Google Maps API](https://developers.google.com/maps/)는 구글 지도를 이용하여 지도 첨부, 현재 위치 표시 등 다양한 작업을 수행합니다.
* [OpenWeatherMap API](https://openweathermap.org/api)는 전 세계의 날씨에 대한 정보를 제공합니다.

> 더 많은 공개 API에 대한 정보는 [Big List of Free and Open Public APIs](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/)를 참고하시기 바랍니다.

## API의 인증 키는 무엇이며, 어떻게 얻을 수 있는가?

대부분의 서드 파티 API는 인증 키(App Key, Access Key, Access Token)를 요구합니다. 이는 요청자 식별, 보안 유지, API 호출 횟수 제한, 유료 요금제 운영 등 다양한 목적이 있습니다. API가 공개되어 있고, API 문서화가 잘 되어 있다면 비영리 목적의 개발자가 API 인증 키를 얻는 것은 어렵지 않습니다.

1. 해당 API를 제공하는 사이트의 공식 문서(국문 또는 영문)를 꼼꼼하게 읽어 봅니다.
2. 회원 가입, 개발자 등록, 애플리케이션 등록 등의 절차를 거쳐 인증 키를 발급받습니다.
    * 예시: [Kakao Developers 애플리케이션 등록](http://docs.kakaoi.ai/kakao_i_agent/instance/application/)


## API 요청을 보내고 응답을 받아오는 방법은 무엇인가?

![](https://user-images.githubusercontent.com/52960121/126071016-049f7839-73b6-4b59-87f5-4d4a48e733a9.png)

[브라우저](/javascript/docs/glossary.html#브라우저) 환경의 JavaScript에서 기본적으로 제공하는 [Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)를 통해 특정 [URL](/javascript/docs/glossary.html#url)로 [HTTP](/javascript/docs/glossary.html#html) 요청을 보내고 [비동기](/javascript/docs/glossary.html#비동기-프로그래밍) 응답을 받습니다.

1. `new Request()`를 사용하여 Request 객체를 생성합니다. 이는 API 요청에 필요한 다양한 속성을 담고 있으며, 단순하게는 요청 URL만 있으면 생성할 수 있습니다.
    * 요청(Request)에는 인증 키(App Key) 및 서버에서 요청을 처리하기 위해 필요한 데이터가 포함됩니다.
    * 인증 키(App Key)는 URL의 끝 부분에 쿼리 스트링 파라미터(Query String Parameter)로 들어가거나, 요청 헤더로 전송됩니다.
2. Request 객체는 다시 `fetch()`의 매개 변수로 들어가고, 이는 비동기([Promise](/javascript/docs/glossary.html#promise))로 작동하여 Response 객체를 반환합니다.

3. Response 객체에는 우리가 API로부터 얻고자 하는 응답이 포함되어 있습니다. 일반적으로 JSON 포맷에 속하는 응답 본문(Body)에 바로 접근하기 위해서는 `Response.json()` 메서드를 사용합니다.

```javascript
const requestURL = `https://...`
const request = new Request(requestURL)
fetch(request)
    .then((response)=>response.ok ? response.json() : Promise.reject(`Error code: ${response.status}`))
    .then((data)=>console.log(data))
    .catch((e)=>console.error(e))
```