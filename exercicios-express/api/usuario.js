function salvar(req, res){
    res.send('Usuario > salvar')
}

function obter(req,res) {
    res.sendo('Usuario > obter')
}

module.exports = { salvar, obter }

//apenas um commit