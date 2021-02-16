// var x = 21

// console.log(x > 20);

// if (x > 20) {
//     console.log("Eu só vejo essa mensagem se de fato X for maior que 20.")
// } else {
//     console.log("Eu só vejo essa mensagem quando X for menor que 20.")
// }

document.getElementById("barman").addEventListener("click", processaBarman);

function processaBarman() {
    var idade = document.querySelector("input[name=idade").value

    var mensagem = document.getElementById("mensagem")

    // if (idade >= 18){
    // // console.log("Você pode beber cerveja.")
    // mensagem.innerHTML = "Você pode beber cerveja."
    // } else if (idade > 15) {
    //     // console.log("Você pode beber refrigerante.")
    //     mensagem.innerHTML = "Você pode beber refrigerante."
    // } else {
    //     mensagem.innerHTML = "Você pode tomar leite."
    // }

    switch(true) {
        case idade >= 18:
            mensagem.innerHTML = "Você pode beber cerveja."
            break;
        case idade > 15:
            mensagem.innerHTML = "Você pode beber refrigerante."
            break;
        case idade >= 1:
            mensagem.innerHTML = "Você pode beber leite."
            break;
        default:
            mensagem.innerHTML = "Valor incorreto."
            break;
    }
}

