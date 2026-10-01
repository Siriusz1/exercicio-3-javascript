function verificarSelect() {
  var select = document.getElementById("cidade");

  if (select.selectedIndex === 0) {
    alert("Inválido: selecione uma opção diferente da primeira.");
  } else {
    var texto = select.options[select.selectedIndex].text;
    alert("Válido: você selecionou " + texto + ".");
  }
}