//Program to find the odd number using function
//programmed by : Vinay Mauyra:
            function isOdd(){
                if( input % 2 != 0){
                    return true;
                 }
                  else
                    return false;
                }
        
                var input = prompt("Enter any number to check Odd");
        console.log(isOdd(input));
        console.log("The program ends here<br>");