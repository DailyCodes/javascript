# 클로저

[클로저](/javascript/docs/glossary.html#클로저)는 함수와 함수가 선언된 어휘적 환경의 조합입니다. 클로저를 이해하려면 [JavaScript](/javascript/docs/glossary.html#javascript)가 어떻게 변수의 유효범위를 지정하는지(Lexical scoping)를 먼저 이해해야 합니다.

## 어휘적 범위 지정이란 무엇인가?

```javascript
function init() {
    const name = "Mozilla";
    function displayName() {
        alert(name);
    }
    displayName();
}
init();
```
위 코드를 실행하면 `displayName()` 함수 내의 `alert()`문이 부모 함수에서 정의한 변수 `name`의 값을 성공적으로 출력합니다. 이 예시를 통해 함수가 중첩된 상황에서 파서가 어떻게 변수를 처리하는지 알 수 있습니다. 이는 어휘적 범위 지정(lexical scoping)의 한 예시입니다. 여기서 "lexical"이란, 어휘적 범위 지정(lexical scoping) 과정에서 변수가 어디에서 사용 가능한지 알기 위해 그 변수가 소스코드 내 어디에서 선언되었는지 고려한다는 것을 의미합니다. 단어 "lexical"은 이런 사실을 나타냅니다. 중첩된 함수는 외부 범위(scope)에서 선언한 변수에도 접근할 수 있습니다.

##  JavaScript의 클로저(Closure)란 무엇인가?

```javascript
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
// myFunc변수에 displayName을 리턴함 유효범위의 어휘적 환경을 유지
myFunc();
// 리턴된 displayName 함수를 실행(name 변수에 접근)
```
이 코드는 위의 어휘적 범위 지정을 설명하기 위해 쓴 코드와 동일한 결과가 실행됩니다. 하지만 흥미로운 것은 `displayName()` 함수가 실행되기 전에 외부함수인 `makeFunc()`로부터 리턴되어 `myFunc` 변수에 저장된다는 것입니다. 또한 클로저에서는 함수가 종료되어도 내부의 요소를 여전히 사용할 수 있습니다.

## 클로저를 활용하여 무엇을 만들 수 있는가?

```javascript
function factory_movie(title) {
    return {
        get_title: function () {
            return title;
        },
        set_title: function (_title) {
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title());
alert(matrix.get_title());
```

Java와 같은 몇몇 언어들은 메서드를 Private으로 선언할 수 있는 기능을 제공합니다. 이는 같은 클래스 내부의 다른 메서드에서만 그 메서드들을 호출할 수 있다는 의미입니다.

JavaScript는 태생적으로는 이런 방법을 제공하지 않지만 클로저를 이용하여 Private 메서드를 흉내내는 것이 가능합니다.
