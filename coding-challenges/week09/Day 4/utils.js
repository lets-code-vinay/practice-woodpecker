function traverseObjectArray (arr){
for(i=0;i<arr.length;i++){
console.log(`NAME-${arr[i].name}`)
console.log(`AGE-${arr[i].age}`)
console.log(`ADDRESS-${arr[i].address}`)}}
function addAgeToObjectPosition(ageValue,positionOfObj,arrData){
arrData[positionOfObj].age =ageValue;}
module.exports={
exportTraverseObjectArray:traverseObjectArray,
exportAddAgeToObjectPosition:addAgeToObjectPosition}