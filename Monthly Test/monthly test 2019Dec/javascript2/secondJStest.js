            /* 2. Create a Function that takes as input two variables (a,b) and gives as output a ^b .
             For example, if the input is(2,3) output should be 2 raised to power 3 that is 8. 
             (You cannot use the math library power function in your solution, kindly solve using for loop or while loop)*/


            var a = prompt( "Enter the first number", a);
        
            var b = prompt("Enter the second numebr", b);
        function toFindPower(a,b){
            let output = 1; 
            for( let i = 1; i <= b; i++)
            {
                output = output * a;

            }
        return output;
        
        }
        console.log(toFindPower(a,b));
