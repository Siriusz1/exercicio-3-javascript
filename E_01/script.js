function verificarCampo() {
      var campo = document.getElementById("nome");

      

      if (campo.value.trim() === "") {
        alert("O campo está vazio. Por favor, preencha-o.");
        return false; 
      }

      alert("O campo está preenchido com: " + campo.value);
      return true; 
    }