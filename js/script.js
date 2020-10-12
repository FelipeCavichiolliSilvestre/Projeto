var docHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

function switchMode(){
    document.getElementById("cabeçalho").classList.toggle("dark");
    document.getElementById("rodape").classList.toggle("dark");
    document.querySelector("body").classList.toggle("dark");
    document.getElementById("conteudo").classList.toggle("dark");
}

function barUpdate(){
    var screenPosition = window.innerHeight;
    var htmlTop = document.querySelector("header").getBoundingClientRect().top;
    var atual = Math.abs(htmlTop) + screenPosition; 
    var percent = atual * 100 / docHeight;

    document.getElementById("progress-bar").style.width = percent + "%";
}
barUpdate();
window.addEventListener("scroll", barUpdate);
