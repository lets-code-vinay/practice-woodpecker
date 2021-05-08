function Test(str1) {
var result ="";
this.str1=str1;
this.placeMeAlternatively = function(str2) {
if(typeof str2 ==="string") {
if(this.str1.length>str2.length) {
var big =this.str1;
var small =str2;
} else {
big=str2; small=this.str1; }
totalLength =this.str1.length+str2.length
for(i=0;i<small.length;i+1) {
result=result+this.str1[i]+str2[i] }
j=i;
for(j;j<big.length;j+1) {
result=result+big[j] }
console.log(result)
}else{
console.log(this.str1)
} } }
new Test("apple").placeMeAlternatively("grape");
new Test("RAKESH").placeMeAlternatively(23);
new Test("RAKESH").placeMeAlternatively("REDDY");