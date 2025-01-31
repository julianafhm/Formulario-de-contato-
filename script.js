const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const servicos = document.getElementById("servicos");
const mensagem = document.getElementById("mensagem");
const msgSucesso = document.getElementById("msgSucesso");

form.addEventListener("submit", (e) => {
    e.preventDefault();

if (username && email && telefone && servicos && mensagem) {
    msgSucesso.style.display = "block"; 
} else {
    msgSucesso.style.display = "none"; 
}

});
