function verificarNumero() {
  var texto = document.getElementById("numero").value.trim();

  if (texto === "") {
    alert("O campo está vazio. Digite um número.");
    return;
  }

    var n = Number(texto);
    var valido = texto !== "" && Number.isInteger(n) && n > 0;

  if (valido) {
    alert("Válido: " + texto + " é um número inteiro positivo.");
  } else {
    alert("Inválido: digite apenas um número inteiro positivo.");
  }
}