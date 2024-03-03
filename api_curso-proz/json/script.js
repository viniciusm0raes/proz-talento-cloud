console.log("Trabalhando com JSON")

const objetoJS = {
    nome: 'Vinícius',
    idade: 42,
    estrangeiro: false
}

console.log(objetoJS)
console.log(typeof(objetoJS))

//Gerando uma String JSON a partir de um objeto JavaScript para enviar os dados para outro sistema
const stringJSON = JSON.stringify(objetoJS)
console.log(stringJSON)
console.log(typeof(stringJSON))

//Convertendo uma string JSON em um objeto JS para poderem ser interpretados por um sistema
const parsedJSON = JSON.parse(stringJSON)
console.log(parsedJSON)
console.log(typeof(parsedJSON))

//Não é possível chamar uma variável a partir de strings. Dessa forma, precisamos utilizar o método parse, para então podermos chamar essa(s) variável(eis)
console.log(parsedJSON.nome)
console.log(parsedJSON.idade)
console.log(parsedJSON.estrangeiro)

