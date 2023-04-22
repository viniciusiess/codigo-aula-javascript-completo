// FUNCTION.CALL()
const carro = {
    marca: 'Ford',
    ano: 2018
}

function descricaoCarro() {
    console.log(this.marca + ' ' + this.ano)
}

descricaoCarro()
descricaoCarro.call()
descricaoCarro.call(carro)

// EXEMPLO REAL
function DOM(seletor) {
    this.element = document.querySelector(seletor)
}

DOM.prototype.ativo = function(classe) {
    this.element.classList.add(classe)
}

const lista = new DOM('ul')
lista.ativo('ativar')
console.log(lista)

