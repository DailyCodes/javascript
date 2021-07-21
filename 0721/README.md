# 날짜와 시간 (Date 객체)

JavaScript [Date 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)는 시간의 한 점을 플랫폼에 종속되지 않는 형태로 나타내며, 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값을 담습니다.

## Date 객체란 무엇인가?

표준 빌트인 객체인 `Date`는 날짜와 시간(연, 월, 일, 시, 분, 초, 밀리초(millisecond/ms. 천분의 1초))을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수입니다.

이러한 `Date` 객체는 내부적으로 **날짜와 시간을 나타내는 정수값**을 가집니다. 이 값은 1970년 1월 1일 00:00:00(UTC)을 기점으로 `Date` 객체가 나타내는 날짜와 시간까지의 밀리초를 나타냅니다. 예를 들어, 모든 시간의 기점인 1970년 1월 1일 0시를 나타내는 `Date` 객체는 내부적으로 **정수값 0**을 가지며, 1970년 1월 1일 0시를 기점으로 하루가 지난 1970년 1월 2일 0시를 나타내는 `Date` 객체는 내부적으로 **정수값 86,400,000**(24h * 60m * 60s * 1000ms)을 갖습니다.

## Date 객체엔 어떤 속성/메서드가 있는가?

`Date` 객체의 주요 속성/메서드는 다음과 같습니다.

```javascript
new Date(); // -> 2021-07-21T00:00:00.000Z
Date(); // -> 'Wed Jul 21 2021 09:00:00 GMT+0900 (대한민국 표준시)'
new Date(0); // -> 1970-01-01T00:00:00.000Z
new Date(86400000); // -> 1970-01-02T00:00:00.000Z
new Date('Jul 21, 2021 00:00:00'); // -> 2021-07-20T15:00:00.000Z
new Date('2021/07/21/00:00:00'); // -> 2021-07-20T15:00:00.000Z
```

| 속성/메서드 | 설명 |
| --- | ---|
| Date.now | 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다. |
| Date.parse | 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간`(new Date(dateString)`의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다. |
| Date.UTC | 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다. `Date.UTC` 메서드는 `new Date(year, month[, day, hour, minute, second, millisecond])`와 같은 형식의 인수를 사용해야 한다. 또한 `Date.UTC` 메서드의 인수는 로컬 타임(KST)이 아닌 UTC로 인식된다. `month`는 월을 의미하는 0~11까지의 정수다. 0부터 시작하므로 주의가 필요하다. |
| Date.prototype.getFullYear | `Date` 객체의 연도를 나타내는 정수를 반환한다. |
| Date.prototype.setFullYear | `Date` 객체에 연도를 나타내는 정수를 설정한다. 연도 이외에 옵션으로 월, 일도 설정할 수 있다. |
| Date.prototype.getMonth | `Date` 객체의 월을 나타내는 0 ~ 11의 정수를 반환한다. 1월은 0, 12월은 11이다. |
| Date.prototype.setMonth | `Date` 객체에 월을 나타내는 0 ~ 11의 정수를 설정한다. 1월은 0, 12월은 11이다. 월 이외에 옵션으로 일도 설정할 수 있다. |
| Date.prototype.getDate | `Date` 객체의 날짜(1 ~ 31)를 나타내는 정수를 반환한다. |
| Date.prototype.setDate | `Date` 객체에 날짜(1 ~ 31)를 나타내는 정수를 설정한다. |
| Date.prototype.getDay | `Date` 객체의 요일(0 ~ 6)을 나타내는 정수를 반환한다. 일요일은 0, 월요일은 1, 화요일은 2, 수요일은 3, 목요일은 4, 금요일은 5, 토요일은 6에 해당한다. |
| Date.prototype.getHours | `Date` 객체의 시간(0 ~ 23)을 나타내는 정수를 반환한다. |
| Date.prototype.setHours | `Date` 객체에 시간(0 ~ 23)을 나타내는 정수를 설정한다. 시간 이외에 옵션으로 분, 초, 밀리초도 설정할 수 있다. |
| Date.prototype.getMinutes | `Date` 객체의 분(0 ~ 59)을 나타내는 정수를 반환한다. |
| Date.prototype.setMinutes | `Date` 객체에 분(0 ~ 59)을 나타내는 정수를 설정한다. 분 이외에 옵션으로 초, 밀리초도 설정할 수 있다. |
| Date.prototype.getSeconds | `Date` 객체의 초(0 ~ 59)를 나타내는 정수를 반환한다. |
| Date.prototype.setSeconds | `Date` 객체에 초(0 ~ 59)를 나타내는 정수를 설정한다. 초 이외에 옵션으로 밀리초도 설정할 수 있다. |
| Date.prototype.getMilliseconds | `Date` 객체의 밀리초(0 ~ 999)를 나타내는 정수를 반환한다. |
| Date.prototype.setMilliseconds | `Date` 객체에 밀리초(0 ~ 999)를 나타내는 정수를 설정한다. |
| Date.prototype.getTime | 1970년 1월 1일 00:00:00(UTC)를 기점으로 `Date` 객체의 시간까지 경과된 밀리초를 반환한다. |
| Date.prototype.setTime | `Date` 객체에 1970년 1월 1일 00:00:00(UTC)를 기점으로 경과된 밀리초를 설정한다. |
| Date.prototype.getTimezoneOffset | UTC와 `Date` 객체에 지정된 로캘(locale) 시간과의 차이를 분 단위로 반환한다. KST는 UTC에 9시간을 더한 시간이다. 즉, UTC = KST - 9h다. |
| Date.prototype.toDateString | 사람이 읽을 수 있는 형식의 문자열로 `Date` 객체의 날짜를 반환한다. |
| Date.prototype.toTimeString | 사람이 읽을 수 있는 형식으로 `Date` 객체의 시간을 표현한 문자열을 반환한다. |
| Date.prototype.toISOString | ISO 8601 형식으로 `Date` 객체의 날짜와 시간을 표현한 문자열을 반환한다. |
| Date.prototype.toLocaleString | 인수로 전달한 로캘을 기준으로 `Date` 객체의 날짜와 시간을 표현한 문자열을 반환한다. 인수를 생략한 경우 브라우저가 동작 중인 시스템의 로캘을 적용한다. |
| Date.prototype.toLocalTimeString | 인수로 전달한 로캘을 기준으로 `Date` 객체의 시간을 표현한 문자열을 반환한다. 인수를 샟략한 경우 브라우저가 동작 중인 시스템의 로캘을 적용한다. |

## Date 객체를 통해 오늘 날짜를 가져오는 방법은 무엇인가?

`Date` 객체를 통해 오늘 날짜를 가져오는 방법은 다음과 같습니다.

```javascript
(function printNow() {
    const today = new Date();

    const dayNames = [
        '(일요일)',
        '(월요일)',
        '(화요일)',
        '(수요일)',
        '(목요일)',
        '(금요일)',
        '(토요일)',
    ];

    const day = dayNames[today.getDay()];

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const now = `${year}년 ${month}월 ${date}일 ${day}` ;

    console.log(now);

    setTimeout(printNow, 1000);
}());
```

## 임의의 날짜를 Date 객체로 바꾸는 방법은 무엇인가?

Date 생성자 함수에 연, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면 지정된 날짜와 시간을 나타내는 객체를 반환합니다. 이 때 연, 월은 반드시 지정해야 합니다. 지정하지 않은 옵션 정보는 0 또는 1로 초기화됩니다. 인수는 다음과 같습니다.

| 인수 | 내용 |
| --- | --- |
| year | 연을 나타내는 1900년 이후의 정수. 0부터 99는 1900부터 1999로 처리된다. |
| month | 월을 나타내는 0 ~ 11까지의 정수(주의: 0부터 시작, 0 = 1월) |
| day | 일을 나타내는 1 ~ 31까지의 정수 |
| hour | 시를 나타내는 0 ~ 23까지의 정수 |
| minute | 분을 나타내는 0 ~ 59까지의 정수 |
| second | 초를 나타내는 0 ~ 59까지의 정수 |
| millisecond | 밀리초를 나타내는 0 ~ 999까지의 정수 |

연, 월을 지정하지 않은 경우 1970년 1월 1일 00:00:00(UTC)을 나타내는 Date 객체를 반환합니다.

```javascript
new Date(2020, 2);
// -> Sun Mar 01 2020 00:00:00 GMT+0900 (대한민국 표준시)

// 월을 나타내는 2는 3월을 의미한다. 2020/3/26/10:00:00:00
new Date(2020, 2, 26, 10, 00, 00, 0)
```

## Date 객체를 통해 두 날짜가 며칠 차이인지 비교하는 방법은 무엇인가?

`Date` 객체를 통하여 두 날짜가 며칠 차이인지 비교하는 방법은 다음과 같습니다.
물론 코드는 다양한 방식으로 작성할 수 있습니다.
계산식에 따라 **`stDate`의 날짜가 `endDate`의 날짜보다 선행해서는 안됩니다.**

```javascript
var now = new Date();

var year = now.getFullYear(); // 연도
var month = now.getMonth() + 1; // 월
var day = now.getDate(); // 일

var stDate = new Date(2021, 07, 20);
var endDate = new Date(2021, 07, 21);

var btMs = endDate.getTime() - stDate.getTime();
var btDay = btMs / (1000*60*60*24);

console.log('두 날짜가 며칠 차이인가? : ' + btDay);
```