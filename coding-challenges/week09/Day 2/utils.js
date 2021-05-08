var importingData = require('./data');
//module.exports = importingData; 
 module.exports = exportingFile();

function exportingFile(){

            for(var i =0; i<= importingData.length; i++){
              console.log(i+1 +"__time printing Title___" +importingData[i].title +"\n");
   
        console.log(i+1 +"__time printing Body___" +importingData[i].body +"\n");
            }
        }
