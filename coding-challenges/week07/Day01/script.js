var spanTxt = document.querySelector(".firstSpan");
var FitChiTxt = spanTxt.firstElementChild.textContent;
var LasChilTxt = spanTxt.lastElementChild.textContent;
var PreSibEle = spanTxt.previousElementSibling;
var PreSibEle1 = spanTxt.previousElementSibling.children[1].textContent;
document.getElementById("mybut").addEventListener("click", function() {
  document.getElementById("divrres").innerHTML =
    FitChiTxt +
    "<br/> <br/>" +
    LasChilTxt +
    "<br/> <br/>" +
    PreSibEle1 +
    "<br/> <br/>";
});
// console.log(FitChiTxt);
// console.log(LasChilTxt);
// console.log(PreSibEle1);
