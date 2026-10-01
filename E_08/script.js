function verificarForm() {
    var senha = document.getElementById('senha').value;

    if (!/[A-Z]/.test(senha)) {
        alert("A senha deve possuir uma letra maiúscula.");
        return false;
    }

    if (!/[a-z]/.test(senha)) {
        alert("A senha deve possuir uma letra minúscula.");
        return false;
    }

    if (!/[^A-Za-z0-9]/.test(senha)) {
        alert("A senha deve possuir um caractere especial.");
        return false;
    }

    if (senha.length < 4) {
        alert("A senha deve possuir no mínimo 4 caracteres.");
        return false;
    }

    alert("Tudo certo! Cadastro completo!");
    return true;
}