let botao = document.getElementById("botao");
let estaQuebrado=false;
//botao.style.backgroundColor="blue";

botao.addEventListener("mouseover",(event)=> {if (!estaQuebrado) botao.style.backgroundColor="green"});

botao.addEventListener("mouseout",(event) => {if (!estaQuebrado) botao.style.backgroundColor="blue"});

botao.addEventListener("click", () => {
    botao.style.backgroundColor="red";
    botao.innerHTML="quebrei";
    estaQuebrado=true;
});

