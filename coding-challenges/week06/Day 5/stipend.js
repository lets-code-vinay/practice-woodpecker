//Coding Challenge : Week 6 : Day5

//Programmed by : Vinay Mauyra: AttainU : VST1 : Woodpecker


document.write("<h1> Stipend according to Attendance</h1><hr>");

    for( var noOfStudent = 1; noOfStudent <= 10; noOfStudent++ ){
    
        var attendance = [];
        var enteredData = prompt("Enter the number", +noOfStudent,"of Students" );
                attendance.push(enteredData);

         
                    if(attendance > 100)
                    {
                        alert("Invalid Value");                        
                        noOfStudent-- ;
                        continue;

                    }
                    else{
                        if(attendance > 81 && attendance < 100){
                                document.write( " <br> <br> ",noOfStudent, ")<strong> { attendance :</strong>", attendance, "%<b>, Stipend: 'Rs. 5000 </b>}" );
                        }  
                        else if( attendance > 61 && attendance < 80){
                               document.write("<br> <br> ",noOfStudent, ")<strong> { attendance :</strong>", attendance, "%<b>, Stipend: 'Rs. 3500 </b>}" ) ;
                        }  
                        else if( attendance > 41 && attendance < 60){
                                document.write( " <br> <br>",noOfStudent, ") <strong> { attendance :</strong>", attendance, "%<b>, Stipend: 'Rs. 2000 </b>}" );
                        } 
                        else{
                                document.write( " <br> <br>",noOfStudent, ") <strong> { attendance :</strong>", attendance, "%<b>, Stipend: 'Rs. 500 </b>}" );
                        }
                    }
                       


    }

    document.write("<br> <br> <strong> Thanks!! Refresh for Re-Entering the data</strong>")
