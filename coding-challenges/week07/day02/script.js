var name1 = document.querySelector("[name='name']");
var email = document.querySelector("[name='email']");
var pass = document.querySelector("[name='pass']");
//var disDiv = document.querySelector("#disDiv");
document.getElementById("mybut").addEventListener("click", function(event) {
  //alert("dasdsad");
  var newP = document.createElement("p");
  var newEl = event.target.insertAdjacentElement("beforebegin", newP);
  var res =
    "Name:" +
    name1.value +
    "    " +
    "Email:" +
    email.value +
    "     " +
    "Password:" +
    pass.value;
  newEl.insertAdjacentText("afterbegin", res);
});
