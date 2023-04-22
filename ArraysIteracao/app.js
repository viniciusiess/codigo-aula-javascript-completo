// FOREACH()

const carros = ['Ford', 'Fiat', 'Honda']
carros.forEach(function(item, index, array) {
    console.log(item.toUpperCase())
})

// com Array Function
carros.forEach((item, index, array) => {
    console.log(item.toUpperCase());
})

const li = document.querySelectorAll('li')

li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
    item.classList.add('ativa')
})

// Modificar Array original
carros.forEach((item, index, array) => {
    array[index] = 'Carro ' + item
})

carros

// [].MAP()
const newCarros = carros.map((item) => {
    return 'Carro ' + item
})

carros;
newCarros;

// [].MAP() ARROW FUNCTION
const numeros = [2, 4, 6, 8, 10, 12, 14]
const numerosX3 = numeros.map(n => n * 3)

numerosX3

// [].REDUCE()
const aulas = [10, 25, 30]
const total1 = aulas.reduce((acumulador, atual) => {
    return acumulador + atual
})

total1;

const total2 = aulas.reduce((acc, cur) => acc + cur, 100)
total2;

// [].FIND() E [].FINDINDEX()
const frutas = ['Banana', 'Pera', 'Uva', 'Maçao']
const buscaUva = frutas.findIndex((fruta) => {
    return fruta === 'Uva'
})

const numeros2 = [6, 43, 22, 88, 101, 29]
const buscaMaior45 = numeros.find(x => x > 45)

// [].FILTER()
const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maça']
const arrayLimpa = frutas.filter((fruta) => {
    return fruta
})

const buscaMaiorQue45 = numeros.filter(x => x > 45);