# 이벤트 기본
이벤트는 어떤 사건을 의미합니다. 브라우저에서의 사건이란 클라이언트가 클릭했을때, 스크롤을 했을때, 필드의 내용을 바꾸었을 때 등을 의미합니다.

## 이벤트란 무엇인가?
이벤트(event)는 웹 브라우저가 알려주는 HTML 파트에 대한 사건이 일어남을 의미합니다. 우리는 자바스크립트를 활용해 이렇게 발생한 이벤트에 반응하는 특정 동작을 수행할 수 있습니다. 이벤트의 사례론 사용자의 마우스 클릭, 이동, 키보드 입력 등이 존재합니다. 

## 이벤트 발생 시 함수를 호출하는 방법 3가지는 각각 무엇인가?

1. **이벤트 핸들러 어트리뷰트(Event Handler Attribute) 방식**
HTML태그에 인라인(in-line)방식으로 이벤트 핸들러를 등록합니다.
HTML태그에 이벤트 핸들러 어트리뷰트를 추가하고 이벤트 발생시 동작할 함수 호출문을 할당합니다.
이벤트 핸들러 어트리뷰트는 'on + 이벤트 타입' 형식으로 작성하고 함수 호출문을 할당합니다.
(단, 함수 참조값이 아니라 반드시 호출문이여야 함)
주의할 점은 이벤트 핸들러 프로퍼티에는 하나의 이벤트 핸들러만 등록할 수 있다는 겁니다. 여러 이벤트를 등록해도 마지막 이벤트 핸들러만 등록됩니다.

    ` <button onclick="handleClick()">`

2. **이벤트 핸들러 프로퍼티(Event Handler Property) 방식**
이벤트 핸들러를 객체의 프로퍼티에 값을 할당하듯이 등록합니다.
윈도우 객체 등 DOM 노드 객체는 이벤트에 대응하는 이벤트 핸들러 프로퍼티를 가지고 있습니다.
이벤트 핸들러 프로퍼티의 키는 이벤트 핸들러 어트리뷰트와 마찬가지로 'on + 이벤트 타입' 형식으로 이루어져 있습니다.

     ```<!DOCTYPE html>
    <html>
      <body>
        <input type="button" value="click" id="btn" />
        <script>
          function printThis() {
            console.log(this);
          }

          //이벤트 핸들러 프로퍼티 방식
          document.getElementById('btn').onclick = printThis;
        </script>
      </body>
    </html>
    ```

3. **addEventListener 메서드 방식**
EventTarget.prototype.addEventListener 메서드를 사용하여 이벤트 핸들러를 등록합니다.
이 방법만의 특징으론, addEventListener 메서드가 하나 이상의 이벤트 핸들러를 등록할 수 있다는 점입니다. 이때 이벤트 핸들러는 등록된 순서대로 호출됩니다. 단, 참조가 동일한 이벤트 핸들러를 중복 등록하면 하나의 핸들러만 등록됩니다.

     `이벤트 타깃.addEventListener('이벤트 타입',이벤트 핸들러[,캡쳐 사용 여부]);`



    > 참고 : Ivelin Demirov, "Learn Javascript Visually", Nai inc(2014)




