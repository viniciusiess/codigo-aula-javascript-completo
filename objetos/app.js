var pessoa = {
    nome: 'Vinicius',
    idade: 23,
    profissao: 'programador'
}

pessoa.nome

////////////////////////////////

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro: function(lado) {
        return this.lados * lado
    }
}

quadrado.lados //4
quadrado.area(5) //25
quadrado.perimetro(5) //20

////////////////////////////////

