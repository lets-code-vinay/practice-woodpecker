
//Programmed by : Vinay Maurya : AttainU : VST1 : Woodpecker


/*All even in an array(even-array.js)
Write a function that takes in an  arr and returns an array contining all the even numbers inside it.
Call the function getEven */

function isEven(num) {
    return num % 2=== 0;
  }
  function evenNum(array) {
    return array.filter(isEven);
  }
  function geteven(array) {
    const evenArray = [];
    for (let i = 0; i < array.length; i++) {
      const currentValue = array[i];
      if (isEven(currentValue)) evenArray.push(currentValue);
    }
    return evenArray;
  }
  
  console.log(geteven([1, 2, 3, 4, 5, 6, 7, 8]))