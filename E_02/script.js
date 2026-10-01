function verificarCampo() {
      var campo = document.getElementById("nome");
      var quantidade = campo.value.length;

      if (campo.value.trim() === "") {
        alert("O campo está vazio. Por favor, preencha-o.");
        return false; 
      } else if(quantidade< 0 || quantidade > 10){
        alert("A quantidade de caracteres está incorreta!");
        return false; 
      } else{
        alert("O campo está preenchido com: " + campo.value);
        return true; 
      }
    }