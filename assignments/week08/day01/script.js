
var counter = 31;
var timer = setInterval(function() {
  counter -= 1;
  var clock = document.getElementById("time");
  clock.textContent = counter;
  if (counter <= 0) {
    clearInterval(timer);
    alert("Times Up! Sorry.");
  }
}, 1000);

fetch("https://api.jsonbin.io/b/5e26e4668d761771cc94d929")
  .then(function(response) {
    return response.json();
  })
  .then(function(qaa) {
    console.log(qaa);
    let ques = document.getElementById("question");
    let randomQuestion = Math.floor(Math.random() * 10);
    ques.innerHTML = "(Q : )" + qaa[randomQuestion].question;
    //console.log(randomQuestion);
    document.getElementById("mybut").addEventListener("click", function() {
      //alert("test");
      var ans = document.getElementById("txt").value;
      if (counter == 0) {
        alert("Cant Submit answer after Time Up");
      } else if (ans == qaa[randomQuestion].answer) {
        alert("CORRECT");
        clearInterval(timer);
      } else {
        alert("WRONG");
      }
    });
  });
