var arr = [];
$("#mybut").click(function() {
  var stackNum = $("#txtb1").val();
  if (stackNum === "enough") {
    alert("Stopped");
    document.getElementById("#txtb1").disabled = true;
  } else {
    if (arr.length >= 10) {
      alert("Stack Full No more Space");
    } else {
      var stackBox = $("<div id='box'></div>").text(stackNum);
      stackBox.addClass("box_style");
      $("#stackDiv").prepend(stackBox);
      arr.push(stackNum);
      //console.log(arr);
    }
  }
});
