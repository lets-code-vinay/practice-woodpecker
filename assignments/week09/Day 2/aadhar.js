var fileSystem = require("fs")
var obj ={
Name:"Jasprit",
"Aadhar number":"6048 6310 1264",
DOB:"01/02/73",
Gender: "Male" ,
}
console.log(obj)
function aadharDetails(obj){
fileSystem.appendFile('./aadhar.txt',
`Name:${obj.Name}
Aadhar:${obj["Aadhar number"]}
DOB:${obj.DOB}
Gender:${obj.Gender}\n\n`,
function(err){
if(err){
console.log("Opps!!!!! SOME THING GONE WRONG... PLEASE TRY AGAIN FOR OUTPUT ('-')");
}
else{
console.log("ENTERED DATA IS SAVED");
}})}
aadharDetails(obj);