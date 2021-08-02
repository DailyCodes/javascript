function List(description){
    Array.call(this);
    this.description = description
}

List.prototype = Object.create(Array.prototype);
List.prototype.constructor=List;
List.prototype.sum = function sum(){
    this.total = 0;
    for (var i=0; this.length > i; i++){
        this.total += this[i]
    }
    return this.total
}

List.prototype.getFirstDataType = function getFirstDataType(){
    return typeof this[0]
}