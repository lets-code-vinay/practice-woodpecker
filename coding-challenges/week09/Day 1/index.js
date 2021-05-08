String.prototype.jumpText = function(){
    var arr = this.split('');
    var counter = 0;
    for (var i=0; i<arr.length; i++){
        if(this.charCodeAt(i)>47 && this.charCodeAt(i) <58){
            continue;
        } else{
            if(counter%2== 0){
                arr[i] = arr[i].toUpperCase();
            }
            counter++;
        }
    }
    return arr.join('');
}
console.log("apl45kd".jumpText())
"agwi".jumpText();