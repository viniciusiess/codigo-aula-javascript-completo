function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000)
const fiat = new Carro('Fiat', 4000)

////////////////////////////////
 
function Carro2(marca, precoInicial) {
    this.taxa = 1.2
    const precoFinal = precoInicial * this.taxa
    this.marca = marca
    this.preco = precoFinal
}

const mazda = new Carro2('Mazda', 5000)

// Exemplo Function Constructor manipulando o DOM

function Dom(seletor) {
    this.element = function() {
        return document.querySelectorAll(seletor)
    }
    this.ativar = function(classe) {
        this.element().classList.add(classe)
    }
}

const li = new Dom('li')
const ul = new Dom('ul')
const lastLi = new Dom('li:last-child')
lastLi.ativar('ativar')