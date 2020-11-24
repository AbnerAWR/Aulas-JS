// const { result } = require("lodash")

// setTimeout(() => {
//     console.log('Execultando callback...')
    
//     setTimeout(() => {
//         console.log('Execultando callback...')
    
//         setTimeout(() => {
//             console.log('Execultando callback...')
        
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperandoPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log('Executando uma promises..')
            resolve()
        }, tempo);
    })
}

esperandoPor()
    .then(() => esperandoPor())
    .then(esperandoPor)
