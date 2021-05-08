
            
            
            /* 1. You are given a Right-angled triangle with variable H for height variable B for breath, kindly
make a function that takes input as (H, B) finally gives you the output(O) as the hypotenuse of
the right-angled triangle.
Hint - this function will have nested functions. Kindly make functions for finding the square of a
number and also a function to find the square root of a function.
Basic Test Case - If the input to the function is (3,4), the output should be 5.*/


    //Entering data through user
            var h = prompt("Enter height of Traingle");
            var b = prompt("Enter the width of Trianle"); 

            console.log(hypotenous( h,b));

            function hypotenous( h, b){
                return squareRoot(square(h) + square( b ))
            }
    //Funtion for calculating the sqaure of number
            function square(number)
            {
                return number * number;
            }
    //Function for calculating squateroot
            function squareRoot( number){
                return Math.sqrt(number);
            }

            
