const peso1= 1.0
const peso2= Number('2.0')
console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // ver se é inteiro 
console.log(Number.isInteger(peso2))

const avaliacao1= 9.876
const avaliacao2=6.876

const total = avaliacao1*peso1+avaliacao2*peso2
const media = total / (peso1+peso2)


console.log(media.toFixed(2))//o numero indica a quantidade de numeros apos o .
console.log(media.toString())// se colocar o numero 2 vira binario 
console.log(typeof media)
console.log(typeof Number)