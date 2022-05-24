var selectResult = document.getElementById("header");
var selectInput = document.getElementById("input");
function count() {
  selectResult.innerHTML = selectInput.value.length;
}

function refrsh() {
  selectResult.innerHTML = 0;
  selectInput.value = "";
}
