const fs = require('fs')
const path = require('path')



function retornaDados(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) =>{
            resolve(conteudo.toString())
        })
        
    })
}

const caminho = path.join(__dirname, 'dados.txt')

retornaDados(caminho)
    .then(conteudo => conteudo.split('\r\n')) 
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)