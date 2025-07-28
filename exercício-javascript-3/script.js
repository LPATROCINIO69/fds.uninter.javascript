const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
let resposta = document.querySelector("#resposta");
const operacao = document.querySelector("#operacao");

operacao.addEventListener("change", calcular);
campo1.addEventListener("keyup",calcular);
campo2.addEventListener("keyup", calcular);

function calcular(){

    if (campo1.value ==='' || campo2.value===''){
        resposta.classList.add("problema");
        resposta.innerHTML="Campo vazio";
        setTimeout(()=>{
            resposta.classList.remove("problema");
            resposta.innerHTML='';
        },3000);
        return;
    }

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