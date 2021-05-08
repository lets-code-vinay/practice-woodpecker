//Program to find Second Largest in The array
var exampleArray = [0,2,3,4,5,8,1,6];
function findSecondLargestNumber(arr){
    firstLargeNumber = 0;
    secondLargeNumber = 0;

    for(let i = 0; i <= arr.length; i++){
        if(firstLargeNumber < arr[i]){
            secondLargeNumber = firstLargeNumber;
            firstLargeNumber = arr[i];
        
        }
        else if(secondLargeNumber < arr[i]){
            secondLargeNumber = arr[i];
        }
    }
    return secondLargeNumber;
}
console.log("Second Large Number :" + findSecondLargestNumber(exampleArray));
