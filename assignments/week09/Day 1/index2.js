Array.prototype.returnSumOfNumber = function(number){
    for (var i = 0; i < this.length; i++){
        if (this[i] != null){
            this[i] +=number;
        }
    }
    return this;
}
Array.prototype.mapMe = function (callbackFun){
    for (var i=0 ; i <this.length; i++){
        this[i] = callbackFun(this[i].i);
    }
    return this;
}
function addTextToElement(value, index){
    return value+ " " +index+ " "+"i am cool";
}
var arr = [1,2,3,4];
console.log(arr.mapMe(addTextToElement))