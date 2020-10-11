var password = document.getElementById("senha")
var confirm_password = document.getElementById("csenha");

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function modal(){
    var modalBg = document.querySelector(".modal-bg");
    modalBg.classList.add("bg-active");
}

function switchMode(){
    document.getElementById("cabeçalho").classList.toggle("dark");
    document.getElementById("rodape").classList.toggle("dark");
    document.querySelector("body").classList.toggle("dark");
    document.getElementById("conteudo").classList.toggle("dark");
}
