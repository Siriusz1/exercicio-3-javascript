function radioSelecionado() {
    var quantidade = document.querySelectorAll('input[name="hobby"]:checked').length;

    if (quantidade === 0) {
      alert("Marque pelo menos uma opção.");
      return false; 
    }

    alert("Você marcou um opção.");
    return true;
  }