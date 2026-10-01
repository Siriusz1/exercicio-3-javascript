function verificarCheckbox() {
  var checkbox = document.getElementById("termos");

  if (checkbox.checked) {
    alert("Confirmado!");
  } else {
    alert("Você não aceitou os termos");
    return false;
  }
}