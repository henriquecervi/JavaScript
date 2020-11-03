
// var avenger = new Array();

var avengers = ['Homem de Ferro', 'Capitão América', 'Thor']

console.log(avengers);

avengers.push('Hulk') // push adiciona itens ao array

console.log(avengers);

avengers.push('Homem Aranha');
// avengers.pop(); // remove o último registro do array
avengers.shift(); // remove o primeiro registro do array

var indice = avengers.indexOf('Homem Aranha'); // acha o número do índice dentro do array
avengers.splice(indice); // remove apenas o indice informado

avengers.push('Viúva Negra');
avengers.push('Gavião Arqueiro');

console.log(avengers);

var newAvengers = ['Homem Aranha', 'Capitã Marvel', 'Miss Marvel', 'Pantera Negra']

var result = avengers.concat(newAvengers); // faz a junção de arrays.
console.log(result);