// const open = getElementById("open");
// const mymodal = getElementById("mymodal");
// const close = getElementById("close");

// open.addEventListener("click", () => {
//   mymodal.classList.add("show");
// });

// close.addEventListener("click", () => {
//   mymodal.classList.remove("show");
// });

// Get the modal
var mymodal = document.getElementById("mymodal");

// Get the button that opens the modal
var open = document.getElementById("open");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
open.onclick = function () {
  mymodal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  mymodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == mymodal) {
    mymodal.style.display = "none";
  }
};

// var mymodal1 = document.getElementById("mymodal1");
// var register = document.getElementById("register");
// var close = document.getElementsByClassName("close")[0];
// open.onclick = function () {
//   mymodal1.style.display = "block";
// };
// close.onclick = function () {
//   mymodal1.style.display = "none";
// };
// window.onclick = function (event) {
//   if (event.target == mymodal1) {
//     mymodal1.style.display = "none";
//   }
// };
