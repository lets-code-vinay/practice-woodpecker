//Programmed By Vinay Maurya : AttainU : VST1 : Woodpecker

/* Smallest in two Arrays (smallest-two-array.js)
Write a function named smallestOf which takes two parameters-arr1,arr-2.
The array should return smallest element from the two arrays.
(Hint:Two loops,one after another for two arrays) */

function smallestOf(arr1, arr2) {
    let smallest = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
      if (smallest > arr1[i]) smallest = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
      if (smallest > arr2[i]) smallest = arr2[i];
    }
    return smallest;
  }
  console.log(smallestOf([6, 5, 5, 4, 2, 8,1], [2, 8, 9, 9, 0, 5]))