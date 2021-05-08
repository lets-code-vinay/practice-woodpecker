//Assignment- Coding Challenge-2 
//Program to print multiple of 5

console.log("\n The multiple of 5 is ");
console.log("Enter the number till you multiple of 5")
var number = prompt();

for ( i = 1; i <= number; i++ ){ 
	if( i % 5 == 0){
				console.log( i );
	}
}
console.log("\nThe program ends here\n")