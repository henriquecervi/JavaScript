
// for(var a = 0; a < 10; a++) {
//     console.log(`Repetindo pois ${a} é menor que 10.`)
// }

// While é movido por uma condição, e fica no laço enquanto essa condição for true (verdadeira)

// var i = 0;

// while (i <= 10) {
//     console.log(`Repetindo pois ${i} é menor ou igual à 10.`)
//     i++;
// }

// foreach trabalha com arrays

var avengers = ['Ironman', 'Spiderman', 'Thor', 'Captain America', 'Black Panther']
    avengers.forEach(function(value, key){
        console.log(`${value} na posição ${key}`)
    })