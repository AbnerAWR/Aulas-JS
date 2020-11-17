// pessoa -> 123 ->{...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//Pessoa -> 456 -> {objeto}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)//Trava o objeto e nao deixa com que nenhuma alteração ocorra

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pesssoaConstante = Object.freeze({nome: 'Joao'})
pesssoaConstante.nome = 'Maria'