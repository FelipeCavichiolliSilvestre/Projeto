var docHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

//Adiciona classes nos elementos pais
function switchMode(){
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("modal-bg").classList.toggle("dark");
    document.querySelector(".menu").classList.toggle("dark");
}

//Controla o progresso da barra
function barUpdate(){

    /*Faz umas contas lokas para saber o percentual da página que vc tá e atribui esse percentual 
    para a width da barra de progesso*/
    var screenPosition = window.innerHeight;
    var htmlTop = document.querySelector("body").getBoundingClientRect().top;
    var atual = Math.abs(htmlTop) + screenPosition; 
    var percent = atual * 100 / docHeight;

    document.getElementById("progress-bar").style.width = percent + "%";
}
barUpdate(); //Chama a função no load da página
window.addEventListener("scroll", barUpdate); //Sempre que um scroll é efetuado chama a função

function callMenu(){
    document.querySelector(".menu").classList.toggle("open");
}
