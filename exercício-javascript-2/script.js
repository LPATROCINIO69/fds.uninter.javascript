const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
let resposta = document.querySelector("#resposta");
const botao = document.querySelector("#igual");
const operacao = document.querySelector("#operacao");

botao.addEventListener("click",calcular);

function calcular(){
    const valor1 = Number(campo1.value);
    const valor2 = Number(campo2.value);
    const valorOp = operacao.value;

    switch (valorOp){
        case "Somar":
            resposta.innerHTML = valor1 + valor2;
            break;
        case "Subtrair":
            resposta.innerHTML = valor1 - valor2;
            break;
        case "Multiplicar":
            resposta.innerHTML = valor1 * valor2;
            break;
        case "Dividir":
            resposta.innerHTML = valor1 / valor2;
            break;
        default:
            console.log("Não efetuou operação");
    }
}