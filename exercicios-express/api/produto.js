module.exports = (app, texto) => {
    function  salvar(req, res){
        res.send('Produto > salvar >' + texto)
    }
    
    function obter (req, res) {
        res.send('Usuario > obter')
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return {salvar, obter}
}

//apenas um commit