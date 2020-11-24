const { exec } = require("child_process");

function esperandoPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => {

            resolve()
        }, tempo);
    })
}
esperandoPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperandoPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperandoPor)
//     .then(() => console.log('Executando promise 3...'))
    
async function executar(){
    let valor = await retornarValor()

    await esperandoPor(1500)
    console.log('Async/await 1...')

    await esperandoPor(1500)
    console.log('Async/await 2...')
    
    await esperandoPor(1500)
    console.log('Async/await 3...')
}

executar()