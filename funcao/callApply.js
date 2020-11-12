function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco= 20
global.desc= 0.1
console.log(getPreco()) //funcao chamda direta
console.log(produto.getPreco())// funcao a partir de um objeto

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // funcao do call passando parametros do objeto direto
console.log(getPreco.apply(carro, [0.17, '$']))// funcao do apply passando parametros do objeto atraves do array