function filtarNumeros(array){
    const retorno = []
    for (let entrada of array)
        if (typeof entrada == "number")
        retorno.push(entrada)
        return retorno
}

console.log(filtarNumeros([1, 'teste']))