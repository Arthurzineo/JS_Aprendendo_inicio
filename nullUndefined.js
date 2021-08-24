let valor // não inicalizada
console.log(valor) // não definida 
// console.log(valor2)// esse valor não foi definido
valor = null // ausencia de valor 
console.log(valor)
const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite fazer isso SEMPRE use NULL
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)


