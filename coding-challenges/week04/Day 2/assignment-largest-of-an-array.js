//Program to find Second Largest in The array
var exampleArray = [0,2,3,4,5,8,1,6];
function largestNumber(arr){
   
    var largeNumber = 0;
   
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > largeNumber){
            
             largeNumber = arr[i];
        
        }
    }

    return largeNumber;
}
    document.write("The large number is :", largestNumber(exampleArray));
