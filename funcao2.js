//Armazenado uma func em uma var 
const imprimirsoma = function (a, b){
    console.log(a+b)
}

imprimirsoma(2,3)

//armazenando uma funcao arrow em uma var

const soma = (a, b) =>{
    return a + b
}
console.log(soma(2,4))

//retorno implicito 

const subtracao = (A, b) => A-b 
console.log(subtracao(2,3))