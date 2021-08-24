//função sem retorno
function imprimirsoma(a, b) {
    console.log(a + b)
}

imprimirsoma(2, 3)

//funcao com retorno

function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 5))
console.log(soma(2))