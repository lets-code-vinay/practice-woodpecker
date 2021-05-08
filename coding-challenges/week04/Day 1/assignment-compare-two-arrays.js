 //Program to two arrays are equal on not and print the result of matching
        var num = [0,2,3,4,5,8,1,6];
        var num1 = [0,5,3,8,1,0,3,9];
        isEqual( num, num1);
        console.log("The length of first array is ", num.length , "\n\n");
        console.log("The length of Second array is ", num1.length ,"\n\n");
       function isEqual(num, num1){
        if(num.length == num1.length){
            console.log("The array is of equal lenght\n");
            
            for(var i = 0; i <= num.length; i++)
                 if(num[i] == num1[i]){
                     continue;
                         console.log( "Arrays are equal\n")
            }   
            else{
                console.log("Arrays are not equal\n")
            }
             
        
        }
        else
            console.log("The array is not of same length\n");
    }

