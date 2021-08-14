# Error

Error [객체](/javascript/docs/glossary.html#객체)는 [JavaScript](/javascript/docs/glossary.html#javascript)의 런타임 오류가 발생했을 때 던져지는 객체입니다. Error 객체를 사용자 지정 예외의 기반 객체로 사용하는 것도 가능합니다. 

## 구문 에러(Syntax errors)

코드 상의 구문 에러로 보통 철자가 잘못되어 작동이 안 되거나 중간에 프로그램이 중지됩니다. 여기서 에러 메시지가 출력되므로 확인은 가능합니다. 코드 편집기 툴을 사용하여 에러 메시지의 의미만 파악할 수 있다면 고치는 것이 가능합니다. 

## 논리 에러(Logic errors)

구문은 올바르나 코드의 의미 자체가 잘못된 경우입니다. 즉, 프로그램 자체는 정상적으로 작동되지만, 원하는 결과를 얻지 못하는 경우가 이에 해당합니다. 에러 메시지가 직접적으로 표시되지 않기 때문에 구문 에러와 비교하여 비교적으로 수정의 난이도가 있습니다.

1. AggregateError
   
    하나의 동작이 여러 개의 오류를 발생시키는 경우 여러 오류를 하나의 오류로 감싸는 인스턴스를 만듭니다.

2. EvalError

    전역 함수 `eval()`에서 발생하는 오류의 인스턴스를 생성합니다.

3. InternalError

    Javascript 엔진의 내부에서 오류가 발생했음을 나타내는 오류 인스턴스를 생성합니다.

# Reference

* [MDN Web Docs - Error](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error)
* [MDN Web Docs - JavaScript 문제해결](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_went_wrong)