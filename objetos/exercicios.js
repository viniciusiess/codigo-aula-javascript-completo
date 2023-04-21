// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome: "Vinicius",
  sobrenome: "Siess",
  idade: 23,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
var pessoa = {
  nome: "Vinicius",
  sobrenome: "Siess",
  idade: 23,
  nomeCompleto: function () {
    return this.nome + " " + this.sobrenome;
  },
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'labrador',
    idade: 10,
    late(sexo) {
        if(sexo === 'homem')
            console.log('late')
        else if(sexo === 'mulher') 
            console.log('não late')
    }
}

cachorro.late('mulher')

// nomeie 3 propriedades ou métodos de strings


// nomeie 5 propriedades ou métodos de elementos do DOM

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
