// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002]


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilCampeao.forEach(function(ano) {
    console.log(`Brasil campeão do ano ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    if(frutas[i] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
for(var i=0; i <= frutas.length; i++) {
    if(i === frutas.length) {
       var ultimo = frutas[i - 1];
        console.log(ultimo) 
    }
}

// forma curta
var ultimaFrutas = frutas[frutas.length - 1]
console.log(ultimaFrutas)

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
console.log(scroll+=500)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? true : false;
console.log(darCredito)
