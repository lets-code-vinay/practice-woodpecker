var circle1 = $("#circle1");
var circle2 = $("#circle2");
var circle3 = $("#circle3");
var circle4 = $("#circle4");
var circle5 = $("#circle5");
//console.log(circle1, circle2, circle3, circle4, circle5);
document.getElementById("mybut").addEventListener("click", function() {
  var test = $("#colPick").val();
  circle1.css({ background: test });
  circle2.css({ background: test });
  circle3.css({ background: test });
  circle4.css({ background: test });
  circle5.css({ background: test });
  //console.log(test);
});
document.getElementById("mybut1").addEventListener("click", function() {
  var test = $("#colPick").val();
  circle1.css({ background: test });
});
document.getElementById("mybut2").addEventListener("click", function() {
  var test = $("#colPick").val();
  circle2.css({ background: test });
});
document.getElementById("mybut3").addEventListener("click", function() {
  var test = $("#colPick").val();
  circle3.css({ background: test });
});
document.getElementById("mybut4").addEventListener("click", function() {
  var test = $("#colPick").val();
  circle4.css({ background: test });
});
document.getElementById("mybut5").addEventListener("click", function() {
  var test = $("#colPick").val();
  circle5.css({ background: test });
});
