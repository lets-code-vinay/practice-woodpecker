var degree = 0;
$("#right").click(function() {
  degree += 10;
  $("#ball").animate({ left: "+=10" }, function() {});
  $("#ball").css({ transform: "rotate(" + degree + "deg)" });
});
$("#left").click(function() {
  degree -= 10;
  $("#ball").animate({ left: "-=10" }, function() {});
  $("#ball").css({ transform: "rotate(" + degree + "deg)" });
});
