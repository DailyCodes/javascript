const btn = document.querySelector('button');

const calculator = function(first,operator,second){     // 함수로 객체의 구조를 미리 선언
    this.first = first;
    this.second = second;
    this.Addition = function(){
        return first+second; 
    }
    this.Subtraction = function(){
        return first-second; 
    }
    this.Multiplication = function(){
        return first*second; 
    }
    this.Division = function(){
        return first/second; 
    }
}
