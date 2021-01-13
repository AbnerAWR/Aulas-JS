const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Guilherme'))

app.use('/opa', (req, res, next) => {
    console.log('Antes....')
    next()
})

app.get('/opa', (req, res, next) => {
    console.log('Durante....')
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    
    next()
        // res.send('Estou bem!')
    
        // res.json ({
        //     name: "Ipad 32Gb",
        //     price: 1899.00,
        //     discount: 0.12
        // })
    })
    
app.use((req, res, next) => {
    console.log('Depois....')
    next()
})

app.listen(3000, () => {
    console.log('Backend executando.....')
})