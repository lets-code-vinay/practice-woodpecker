document.getElementById("mybut").addEventListener("click", function() {
  // alert("test");
  var mydiv = document.getElementById("mydiv");
  var box1 = document.createElement("div");
  var txt1 = document.getElementById("txt1").value;
  var txt2 = document.getElementById("txt2").value;
  // console.log(txt1, txt2);
  box1.innerText = txt1;
  box1.style.color = "white";
  box1.style.backgroundColor = txt2;
  box1.style.height = "50px";
  box1.style.width = "50px"; //use this property to fullfil question requirment
  //box1.style.width = "fit-content"; //use this property to wrap the text in the box
  box1.style.boxSizing = "border-box";
  box1.style.position = "relative";
  box1.style.top = "-350px";
  box1.style.left = "100px";
  box1.style.marginLeft = "48.3%";
  box1.style.marginTop = "2%";
  mydiv.appendChild(box1);
});
