function areaQuadrado(lado) {
    return lado * lado
}

areaQuadrado(10)

//----------------------------------------------------------------

function pi() {
    return 3.14
}

var total = 5 * pi()

//----------------------------------------------------------------

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'azul'
    } else if (cor === 'verde') {
        return 'verde'
    } else {
        return 'sem cor'
    }
}

corFavorita()

//----------------------------------------------------------------

addEventListener('click', function() {
    console.log('clicou')
})