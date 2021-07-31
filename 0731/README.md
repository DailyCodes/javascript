# Promise

## 비동기 함수란 무엇이며, 왜 필요한가?
자바스크립트는 싱글스레드이기 때문에 한 번에 하나의 작업만 수행할 수 있다. 이를 해결하기 위해 비동기 함수가 필요하다.
비동기 함수란 특정 코드의 처리가 끝나기 전에 다음 코드를 실행할 수 있는 것을 뜻한다.

## 블로킹(blocking) 코드와 논블로킹(non-blocking) 코드는 각각 어떻게 동작하는가?

* 블로킹 코드
블로킹은 자신의 수행결과가 끝날 때까지 제어권을 갖고 있는 것을 의미합니다.
사용자가 입력할 때까지 프로그램은 어떠한 동작도 수행하지 않습니다.

* 논블로킹 코드
논블로킹은 자신이 호출되었을 때 제어권을 바로 자신을 호출한 쪽으로 넘기며, 자신을 호출한 쪽에서 다른 일을 할 수 있도록 하는 것을 의미합니다.
제어권을 반납해 바로 수행할 수도 있습니다.

## ES6부터 추가된 Promise를 이용해 비동기 함수를 다루는 방법은 무엇인가?
1. Promise의 3가지 상태 설명 (pending, resolved, rejected)

* Pending: 이행하거나 거부되지 않은 초기 상태
* Fulfilled: 완료되어 프로미스가 결과 값을 반환해준 상태
* Rejected: 실패하거나 오류가 발생한 상태

2. .then
then() 은 Promise를 리턴하고 두 개의 콜백 함수를 인수로 받습니다.
resolve시 then으로 수행

3. .catch
reject되는 값은 catch 메소드의 인자로 넘어가서 에러 핸들링을 할 수 있다.
reject시 catch로 수행

**Promise Chain이란 무엇인가?**

여러 개의 프로미스를 연결하여 사용하는 방식

```new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
```
