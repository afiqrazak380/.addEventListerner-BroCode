// .addEventListener(event, function, useCapture)
// can link event and function to HTML element using .addEventListener method
// one element can have several addEventListener method
// same event can involve different function

// const innerDiv = document.getElementById("innerDiv");

// innerDiv.addEventListener("mouseover", toBlue);
// innerDiv.addEventListener("mouseout", toRed);

// function toBlue(){
//   innerDiv.style.backgroundColor = "blue";
// }
// function toRed(){
//   innerDiv.style.backgroundColor = "red";
// }

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue(){
  alert(`You click this ${this.id}`);
  this.style.backgroundColor = "lightblue"
}