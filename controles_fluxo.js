var idade = prompt("Qual sua idade?")

if (idade >= 18) {
    console.log("Posso tirar carta.")
} else if (idade >= 15) {
    console.log("Falta pouco para tirar carta..")
} else {
    console.log("Ainda falta bastante para tirar a carta.")
}

var ingresso = prompt('Qual tipo da Carteira?\nVip\nPremium\nComum');

switch (ingresso) {
    case 'vip':
        console.log("Carteira do tipo Vip")
        break;
    case 'Premium':
        console.log("Carteira do tipo Premium")
        break;
    case 'Comum':
        console.log("Carteira do tipo Comum")
        break;
    default:
        console.log("Tipo da Carteira Inválido.")
        break;
}