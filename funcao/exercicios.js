// Crie uma função para verificar se um valor é Truthy
function verificarValor(valor) {
    if(typeof valor === 'string') {
        console.log('valor falso')
    } else if(typeof valor === 'number') {
        console.log('valor true')
    }
}

verificarValor(10);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(n) {
    var perimetro = n * 4
    console.log(perimetro);
}

perimetroQuadrado(10)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function retornaNomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`)
}

retornaNomeCompleto('Vinicius', 'Siess')

// Crie uma função que verifica se um número é par
function numeroPar(x) {
    if(x % 2 === 0) console.log('Numero é par')
    else console.log('Não é par');
}

numeroPar(13)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoValor(tipo) {
    console.log(typeof tipo)
}

tipoValor('Exemplo')

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
    console.log('Vinicius Siess')
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);