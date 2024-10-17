// Login hardcoded
const validUsername = "aly";
const validPassword = "elisa";

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    // Pega os valores do formulário e remove espaços extras
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Verificação de usuário e senha (não sensível a maiúsculas/minúsculas)
    if(username.toLowerCase() === validUsername.toLowerCase() && password === validPassword) {
        // Redireciona para outra página
        window.location.href = "index1.html";
    } else {
        alert("Usuário ou senha incorretos");
    }
});
