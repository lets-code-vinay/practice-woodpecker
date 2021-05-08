alert("Enter Only 1 Letter to Search for the same letter cities");
alert("Enter The state name in 'Goa' this formate not in 'goa'or'GOA' formate");
alert("Please follow the previous instruction or the App may not work.");

//calling the getcity1 function.
document.getElementById("searchBut").addEventListener("click", function() {
  getCity1();
});

//calling the getcity2 function
document.getElementById("mybut").addEventListener("click", function() {
  getCity2();
});

//adding click event to clean button which cleans the input field and the page
document.getElementById("cleanBut").addEventListener("click", function() {
  document.getElementById("txt1").value = "";
  $("#res").empty();
});

//getCity1 function takes an letter as input converts it to upper case
//runs that letter through the json file and prints all the name of cities
//starting with that letter.
function getCity1() {
  let cityName = $("#txt1").val(); //fetching a letter from the input field
  cityName1 = cityName.toUpperCase(); //converting that in uppercase
  fetch("https://api.jsonbin.io/b/5e25cca6b236b871b36550d4") //fetching the jason file
    .then(function(response) {
      return response.json(); //converting the file in an json object
    })
    .then(function(responseObj) {
      $("#res").append(
        "Name of Cities Starting with '" + cityName1 + "' are: " + "<br>"
      );
      //running a loop through the json object
      for (i = 0; i < responseObj.length; i++) {
        //checking if the inputed string matches any city name in the json file
        if (responseObj[i].name[0] == cityName1) {
          //printing the result on the web page.
          $("#res").append(responseObj[i].name + "<br/>");
        }
      }
    });
}

//getCity2 function takes a state name as input runs that name through the json file and prints all the name of cities attached with that state
function getCity2() {
  let Name = $("#txt1").val(); //fetching state name from the input field
  fetch("https://api.jsonbin.io/b/5e25cca6b236b871b36550d4") //fetching the jason file
    .then(function(response) {
      return response.json(); //converting the file in an json object
    })
    .then(function(responseObj) {
      $("#res").append("Cities in the State of '" + Name + "' are: " + "<br>");
      //running a loop through the json object
      for (i = 0; i < responseObj.length; i++) {
        //checking if the inputed state name matches any state name in the json file to fetch its corrosponding city name
        if (responseObj[i].state == Name) {
          //printing the result on the web page.
          $("#res").append(responseObj[i].name + "<br/>");
        }
      }
    });
}
